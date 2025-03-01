import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './i18n';
//import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import { theme } from '@/Theme';
import '@/assets/images/svg_sprite.svg';
//import { persistor } from './redux/store';
import { App } from '@/components/App';

const isDev = process.env.NODE_ENV === 'development';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate
      loading={null}
      persistor={persistor}
    > */}
    <BrowserRouter basename={isDev ? '/' : '/'}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);
