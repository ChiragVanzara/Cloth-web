'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
  actionLabel?: string;
  onAction?: () => void;
}

interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'info' | 'error', actionLabel?: string, onAction?: () => void) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (
      message: string,
      type: 'success' | 'info' | 'error' = 'success',
      actionLabel?: string,
      onAction?: () => void
    ) => {
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
      const newToast: Toast = { id, message, type, actionLabel, onAction };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3.5 rounded-sm bg-[#121416] border border-white/15 text-white shadow-2xl shadow-black/80 text-xs font-mono tracking-wider uppercase transition-all duration-300 animate-fadeIn"
          >
            <div className="flex items-center gap-2.5">
              {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-[#1ECAD3] flex-shrink-0" />}
              {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-[#C65A28] flex-shrink-0" />}
              {toast.type === 'info' && <Info className="w-4 h-4 text-[#C59A3A] flex-shrink-0" />}
              <span className="text-white/90">{toast.message}</span>
            </div>

            <div className="flex items-center gap-2">
              {toast.actionLabel && toast.onAction && (
                <button
                  onClick={() => {
                    toast.onAction?.();
                    removeToast(toast.id);
                  }}
                  className="text-[10px] text-[#1ECAD3] underline underline-offset-2 hover:text-white"
                >
                  {toast.actionLabel}
                </button>
              )}
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
