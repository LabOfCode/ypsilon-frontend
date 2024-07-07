import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { theme } from '@/Theme';
import '@/assets/images/svg_sprite.svg';
import { App } from '@/components/App';

const isDev = process.env.NODE_ENV === 'development';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={isDev ? '/' : '/ypsilon-frontend/'}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </HelmetProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
