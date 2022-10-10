import React, { Component } from "react";

interface IProps {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<IProps> {
  state = { hasError: false };

  constructor(props: { children: React.ReactNode }) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err: Error) {
    console.log(err);
  }

  render() {
    if (this.state.hasError) {
      return <div>an error has occured</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
