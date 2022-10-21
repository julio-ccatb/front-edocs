import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import './styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/auth.provider';

const _QueryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={_QueryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
