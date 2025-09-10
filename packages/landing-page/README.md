# Landing Page

A modern, responsive React landing page with a clean design and smooth animations.

## Features

- **Responsive Design**: Works perfectly on all screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Component-based**: Built with reusable React components
- **Fast Performance**: Optimized for speed and user experience
- **Accessible**: Built with accessibility best practices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the landing page directory:
   ```bash
   cd packages/landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Header.css
│   ├── Hero.js            # Hero section
│   ├── Hero.css
│   ├── Features.js        # Features section
│   ├── Features.css
│   ├── Footer.js          # Footer
│   └── Footer.css
├── App.js                 # Main app component
├── App.css               # App styles
├── index.js              # Entry point
└── index.css             # Global styles
```

## Customization

The landing page is designed to be easily customizable:

1. **Branding**: Update the brand name in `Header.js` and `Footer.js`
2. **Content**: Modify the hero section content in `Hero.js`
3. **Features**: Add or modify features in `Features.js`
4. **Styling**: Customize colors and styles in the CSS files
5. **Colors**: The main brand color is defined in `index.css` (#667eea)

## Deployment

To deploy the landing page:

1. Build the production version:
   ```bash
   npm run build
   ```

2. The `build` folder will contain the static files ready for deployment to any static hosting service.

## License

MIT License - feel free to use this template for your projects!
