import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'app/App';
import ThemeProvider from 'app/providers/theme-provider';
import ErrorBoundary from 'app/providers/error-boundary';
import StoreProvider from 'app/providers/store-provider';

import 'shared/config/i18n/188n';

import './app/styles/index.scss';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
