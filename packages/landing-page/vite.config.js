import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Migrated from Create React App (react-scripts 5.0.1) in #63.
// outDir stays 'build' so deploy-webapp.sh / deploy-s3.sh (aws s3 sync build/)
// and DEPLOYMENT.md keep working unchanged.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})
