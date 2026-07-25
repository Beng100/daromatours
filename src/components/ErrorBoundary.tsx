import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled UI error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-sand-50 px-6 text-center">
          <h1 className="font-display text-2xl font-semibold text-night-800">משהו השתבש</h1>
          <p className="max-w-md text-night-500">
            אירעה שגיאה בלתי צפויה. אפשר לרענן את העמוד, או לחזור לדף הבית.
          </p>
          <a href="/" className="rounded-full bg-ember-500 px-6 py-3 font-semibold text-white hover:bg-ember-600">
            לדף הבית
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
