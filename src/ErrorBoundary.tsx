import React from 'react';

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // log to console; can be replaced with an external error service
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 p-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-4">The site encountered an error while rendering. See details below and open the browser console for more information.</p>
            <pre className="whitespace-pre-wrap bg-slate-800 p-4 rounded-lg text-sm">
              {this.state.error ? `${this.state.error.name}: ${this.state.error.message}\n\n${this.state.error.stack}` : 'Unknown error'}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
