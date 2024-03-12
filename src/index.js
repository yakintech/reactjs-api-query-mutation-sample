import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();


root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </QueryClientProvider>

);


