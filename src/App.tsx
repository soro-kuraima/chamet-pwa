import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallbackComponent } from '@/components/functional';
import { AppRouter } from '@/router/AppRouter';
import './App.css';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <AppRouter />
      <Toaster />
    </ErrorBoundary>
  );
}

export { App };
