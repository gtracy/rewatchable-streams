# SEO & AI Bot Infrastructure Setup Runbook

This runbook covers the manual AWS and Cloudflare configuration steps required to complete traditional SEO and AI crawler support for **watchthatpod.com**.

---

## 1. Cloudflare Redirect Rule (`www` → Apex)

Fixes the live `HTTP 525` SSL handshake error on `https://www.watchthatpod.com/` by redirecting all `www` traffic cleanly at the Cloudflare edge.

1. Open the **Cloudflare Dashboard** → select the `watchthatpod.com` zone.
2. Go to **Rules → Redirect Rules** → click **Create rule**.
3. Configure the rule:
   - **Rule name:** `Redirect www to apex`
   - **When incoming requests match:** Custom filter expression
     - Field: `Hostname` | Operator: `equals` | Value: `www.watchthatpod.com`
   - **Then:** Dynamic URL redirect
     - **Expression:** `concat("https://watchthatpod.com", http.request.uri.path)`
     - **Status code:** `301`
     - **Preserve query string:** Checked
4. Click **Deploy**.
5. Verify from a terminal:
   ```bash
   curl -I https://www.watchthatpod.com/
   # Expect: HTTP/2 301 and location: https://watchthatpod.com/
   ```

---

## 2. CloudFront Custom Error Responses (`E3UTGKV2VWOXDQ`)

Serve the custom dark-themed `/404.html` page with an HTTP `404` status code instead of raw S3 XML `AccessDenied` responses.

1. Open the **AWS Console → CloudFront → Distributions → `E3UTGKV2VWOXDQ`**.
2. Go to the **Error pages** tab → click **Create custom error response** twice:
   - **Rule 1 (`403` → `/404.html`):**
     - **HTTP error code:** `403: Forbidden`
     - **Customize error response:** `Yes`
     - **Response page path:** `/404.html`
     - **HTTP response code:** `404: Not Found`
     - **Error caching minimum TTL:** `300`
   - **Rule 2 (`404` → `/404.html`):**
     - **HTTP error code:** `404: Not Found`
     - **Customize error response:** `Yes`
     - **Response page path:** `/404.html`
     - **HTTP response code:** `404: Not Found`
     - **Error caching minimum TTL:** `300`
3. Wait for distribution deployment to complete, then verify:
   ```bash
   curl -i https://watchthatpod.com/non-existent-page
   # Expect: HTTP/2 404 and the Watch That Pod 404 HTML page
   ```

---

## 3. `rewatchables-build-JSON` (`packages/www_job`) Lambda Environment Variables & IAM Permissions

Enable daily S3 publishing of `llms.txt`, `llms-full.txt`, `sitemap.xml`, `ai-catalog.json`, `.well-known/ard.json`, `.well-known/ai-catalog.json`, `/movie/*` and `/streaming/*` static pages, `index.html` JSON-LD/`<noscript>` enrichment, and automatic CloudFront cache invalidation.

### Environment Variables

Set the following on the **`rewatchables-build-JSON`** Lambda function (**AWS Console → Lambda → `rewatchables-build-JSON` → Configuration → Environment variables**):

| Variable | Value | Required? | Notes |
| --- | --- | --- | --- |
| `CLOUDFRONT_DISTRIBUTION_ID` | `E3UTGKV2VWOXDQ` | **Required** (for auto-invalidation) | Enables post-publish CloudFront invalidation of `/index.html`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/ai-catalog.json`, `/.well-known/ai-catalog.json`, `/.well-known/ard.json`, `/movie/*`, and `/streaming/*` |
| `WEBAPP_PREFIX` | `webapp` | Optional | Defaults to `webapp` in `packages/www_job/app.js` |
| `PODCAST_MOVIES_TABLE` | `podcast_movies` | Optional | Defaults to `podcast_movies` |
| `MOVIE_STREAMS_TABLE` | `movie_streams` | Optional | Defaults to `movie_streams` |
| `S3_BUCKET` | `rewatchables` | Optional | Defaults to `rewatchables` |
| `S3_KEY` | `data_files/podcast_movie_data.json` | Optional | Defaults to `data_files/podcast_movie_data.json` |

Since all other variables already default to your production values in `packages/www_job/app.js`, you only need to set `CLOUDFRONT_DISTRIBUTION_ID` via CLI:

```bash
AWS_PROFILE=<your-profile> aws lambda update-function-configuration \
  --function-name rewatchables-build-JSON \
  --region us-east-2 \
  --environment "Variables={CLOUDFRONT_DISTRIBUTION_ID=E3UTGKV2VWOXDQ}"
```

> **Note:** Check the existing environment variables on `rewatchables-build-JSON` before running `update-function-configuration`, as the CLI replaces the entire `Variables` map.

### IAM Execution Role Policy

Ensure the Lambda execution role (`arn:aws:iam::315817266687:role/rewatchables-runner`) has:

- `s3:GetObject` on `arn:aws:s3:::rewatchables/webapp/index.html` (to read the deployed SPA `index.html` before injecting fresh JSON-LD and `<noscript>` markup)
- `s3:PutObject` on `arn:aws:s3:::rewatchables/webapp/*` and `arn:aws:s3:::rewatchables/data_files/*`
- `cloudfront:CreateInvalidation` on `arn:aws:cloudfront::315817266687:distribution/E3UTGKV2VWOXDQ`

Example inline policy statement:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadIndexHtmlForSeoInjection",
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::rewatchables/webapp/index.html"
    },
    {
      "Sid": "WriteDataAndSeoArtifacts",
      "Effect": "Allow",
      "Action": "s3:PutObject",
      "Resource": [
        "arn:aws:s3:::rewatchables/data_files/*",
        "arn:aws:s3:::rewatchables/webapp/*"
      ]
    },
    {
      "Sid": "InvalidateSeoPaths",
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::315817266687:distribution/E3UTGKV2VWOXDQ"
    }
  ]
}
```

---

## 4. Cloudflare AI Crawl Control & Bot Fight Mode Verification

Ensure major AI search and indexing crawlers are **not** blocked from fetching `/`, `/llms.txt`, `/llms-full.txt`, or `/sitemap.xml`.

1. In the **Cloudflare Dashboard** → `watchthatpod.com` → **Security → Bots**:
   - Check **AI Crawl Control** (or **Block AI Bots / AI Scrapers and Crawlers**): make sure it is **disabled** or configured to allow search/retrieval bots.
   - If **Bot Fight Mode** or **Super Bot Fight Mode** is enabled, confirm verified bots are set to **Allow**.
2. Verify each of the following user agents is allowed:
   - `OAI-SearchBot` (OpenAI Search)
   - `PerplexityBot` (Perplexity)
   - `ClaudeBot` (Anthropic)
   - `Google-Extended` (Google Gemini / AI)
3. Spot-check after deployment:
   ```bash
   for ua in "OAI-SearchBot" "PerplexityBot" "ClaudeBot" "Google-Extended"; do
     echo "=== $ua ==="
     curl -sI -A "$ua" https://watchthatpod.com/llms.txt | head -n 5
   done
   # Expect: HTTP/2 200 and content-type: text/plain; charset=utf-8
   ```

---

## 5. Search Engine Sitemap Submission

1. **Google Search Console** (`https://search.google.com/search-console`):
   - Select the `watchthatpod.com` domain property (verify via Cloudflare DNS TXT record if not yet verified).
   - Navigate to **Indexing → Sitemaps**.
   - Submit `https://watchthatpod.com/sitemap.xml` and confirm status is **Success**.
   - Use **URL Inspection** on `https://watchthatpod.com/` to verify Google sees the injected JSON-LD (`WebSite`, `PodcastSeries`, `ItemList`) and `<noscript>` content.
2. **Bing Webmaster Tools** (`https://www.bing.com/webmasters`):
   - Add/verify `watchthatpod.com` (can import directly from Google Search Console).
   - Navigate to **Sitemaps** → submit `https://watchthatpod.com/sitemap.xml`.

---

## 6. CloudFront Function for Subdirectory Index Routing (`E3UTGKV2VWOXDQ`)

CloudFront's **Default Root Object** (`index.html`) only applies to the root path `/` — it does **not** automatically resolve subdirectory URLs like `/movie/the-godfather-1972/` or `/streaming/free/` to their underlying S3 objects (`/movie/the-godfather-1972/index.html` and `/streaming/free/index.html`). Without a viewer-request rewrite, S3 returns `403 AccessDenied` for those directory paths.

Add a lightweight **CloudFront Function** (`cloudfront-js-2.0`) on distribution `E3UTGKV2VWOXDQ`:

1. Open **AWS Console → CloudFront → Functions → Create function**.
2. Name it `watchthatpod-subdirectory-index` and choose runtime **`cloudfront-js-2.0`**.
3. Paste the following viewer-request handler:
   ```js
   function handler(event) {
     var request = event.request;
     var uri = request.uri;

     if (uri.startsWith('/movie/') || uri.startsWith('/streaming/')) {
       if (uri.endsWith('/')) {
         request.uri += 'index.html';
       } else if (!uri.includes('.')) {
         request.uri += '/index.html';
       }
     }

     return request;
   }
   ```
4. Click **Save changes** → **Publish** tab → **Publish function**.
5. Under **Associated distributions**, click **Add association**:
   - **Distribution:** `E3UTGKV2VWOXDQ`
   - **Event type:** `Viewer request`
   - **Cache behavior:** `Default (*)`
6. Verify after deployment:
   ```bash
   curl -I https://watchthatpod.com/streaming/free/
   curl -I https://watchthatpod.com/movie/the-godfather-1972/
   # Expect: HTTP/2 200 and content-type: text/html; charset=utf-8
   ```
