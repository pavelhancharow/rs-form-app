import { Component, ComponentType, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  FallbackComponent: ComponentType;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, { componentStack }: ErrorInfo): void {
    componentStack ??= 'ErrorBoundary';

    this.setState((state) => ({ ...state, error, componentStack }));
    console.error(error, componentStack);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.FallbackComponent;

      return <FallbackComponent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
