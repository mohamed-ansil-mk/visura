import { useState } from "react";
import { Toast } from "./toast";

export function useToast() {
  const [toasts, setToasts] = useState<
    { id: number; title: string; description: string }[]
  >([]);

  const toast = ({
    title,
    description,
  }: {
    title: string;
    description?: string;
  }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description: description ?? "" }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const ToastContainer = () => (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
      {toasts.map((t) => (
        <Toast key={t.id} title={t.title} description={t.description} />
      ))}
    </div>
  );

  return { toast, ToastContainer };
}
