import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import './styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/auth.provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const _QueryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={_QueryClient}>
        <AuthProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
