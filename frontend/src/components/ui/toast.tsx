import * as React from "react";

export interface ToastProps {
  title?: string;
  description?: string;
}

export function Toast({ title, description }: ToastProps) {
  return (
    <div className="bg-white text-gray-900 border shadow-md rounded-lg p-4 flex flex-col gap-1 animate-in fade-in duration-300">
      {title && <strong className="text-base">{title}</strong>}
      {description && <span className="text-sm text-gray-700">{description}</span>}
    </div>
  );
}
