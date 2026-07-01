import React from 'react';
import Button from '../ui/Button';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Erro capturado pelo app:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fatal-screen">
          <div className="fatal-card">
            <span className="eyebrow">modo seguro</span>
            <h1>Algo saiu do fluxo.</h1>
            <p>Uma área do app falhou, mas seus estudos continuam protegidos. Recarregue a tela ou limpe os dados locais se necessário.</p>
            <div className="fatal-actions">
              <Button onClick={() => window.location.reload()}>Recarregar app</Button>
              <Button variant="secondary" onClick={() => this.setState({ hasError: false })}>Voltar ao app</Button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
