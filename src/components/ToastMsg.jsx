
import React from "react";

export default function ToastMsg({ toast }) {
  if (!toast) return null;

  const bgColor =
    toast.type === "success"
      ? "bg-green-500"
      : toast.type === "info"
      ? "bg-blue-500"
      : "bg-gray-500";

  return (
    <div
      className={`fixed bottom-6 right-6 px-4 py-2 rounded text-white shadow-lg ${bgColor} animate-slide-in`}
      style={{ minWidth: "200px" }}
    >
      {toast.text}
    </div>
  );
}
