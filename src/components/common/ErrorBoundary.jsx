import React from 'react';
import { ShieldAlert, RotateCcw, Compass, Home } from 'lucide-react';
import { ArchivalStamp, WaxSeal } from './IndianMotif';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('DetectiveX Error Boundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/cases';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center p-6 bg-warm-50">
          <div className="max-w-xl w-full bg-cream-50 border-2 border-warm-300 rounded-3xl p-8 sm:p-10 shadow-soft-xl relative overflow-hidden text-center space-y-6">
            <div className="absolute top-4 right-4 opacity-70 pointer-events-none">
              <ArchivalStamp text="SYSTEM EXCEPTION" rotate={-8} />
            </div>

            <div className="w-16 h-16 mx-auto rounded-2xl bg-burgundy-100/80 border border-burgundy-300 flex items-center justify-center text-burgundy-800 shadow-inner">
              <ShieldAlert className="w-8 h-8 text-burgundy-800" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono-archive font-bold tracking-widest text-gold-700 uppercase">
                CID ARCHIVAL INVESTIGATION NOTICE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy-950">
                Investigation File Interrupted
              </h2>
              <p className="text-sm text-sepia-body leading-relaxed max-w-md mx-auto">
                A technical anomaly occurred while opening this investigation dossier. The CID records department has logged this event.
              </p>
            </div>

            {this.state.error && (
              <div className="text-left bg-warm-100/70 border border-warm-300/80 rounded-xl p-3 text-xs font-mono text-burgundy-900 overflow-x-auto max-h-32">
                <span className="font-bold">Error:</span> {this.state.error.message || String(this.state.error)}
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display text-xs font-bold uppercase tracking-wider shadow-dossier transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4 text-gold-300" />
                <span>Reload Investigation</span>
              </button>

              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-warm-200 hover:bg-warm-300 text-burgundy-950 font-display text-xs font-bold uppercase tracking-wider border border-warm-400 transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-burgundy-700" />
                <span>Case Explorer</span>
              </button>

              <a
                href="/"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-transparent hover:bg-warm-200/50 text-sepia-muted font-display text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <Home className="w-3.5 h-3.5" />
                <span>HQ</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
