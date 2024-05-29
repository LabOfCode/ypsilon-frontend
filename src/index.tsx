import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
//import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/Theme';
import '@/assets/images/svg_sprite.svg';
//import { PersistGate } from 'redux-persist/integration/react';
//import { persistor, store } from './redux/store';
import { App } from '@/components/App';

const isDev = process.env.NODE_ENV === 'development';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate
      loading={null}
      persistor={persistor}
    > */}
    <HashRouter basename={isDev ? '/' : '/ypsilon-frontend'}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </HashRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
