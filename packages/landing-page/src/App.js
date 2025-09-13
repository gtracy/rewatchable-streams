import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DataTable from './components/DataTable';
import Footer from './components/Footer';
import { fetchData } from './services/api';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import Sora font from Google Fonts
import '@fontsource/sora/400.css';
import '@fontsource/sora/500.css';
import '@fontsource/sora/600.css';
import '@fontsource/sora/700.css';

// Import Geist font
import '@fontsource/geist/400.css';
import '@fontsource/geist/500.css';

// Create a Material-UI theme with dark mode
const theme = createTheme({
  typography: {
    fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
});

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchData();
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <main className="main-content">
          <DataTable 
            data={data} 
            isLoading={isLoading} 
            error={error} 
          />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
