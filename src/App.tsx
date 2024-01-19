import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallbackComponent } from '@/components/functional';
import { AppRouter } from '@/router/AppRouter';
import './App.css';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <AppRouter />
    </ErrorBoundary>
  );
}

export { App };
