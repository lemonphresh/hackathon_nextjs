"use client";
import React, { createContext, useState, useContext, useCallback } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info") => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000); // this will auto remove the toast after 3 sec
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`mb-2 px-4 py-2 rounded shadow-lg cursor-pointer text-gray-600 ${
            toast.type === "success"
              ? "bg-green-200"
              : toast.type === "error"
                ? "bg-red-200"
                : "bg-gray-200"
          }`}
          onClick={() => removeToast(toast.id)}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};
