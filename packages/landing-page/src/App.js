import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DataTable from './components/DataTable';
import { fetchData } from './services/api';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
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
      </div>
    </ThemeProvider>
  );
}

export default App;
