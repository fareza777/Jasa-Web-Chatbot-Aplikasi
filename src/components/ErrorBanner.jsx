import { AlertTriangle, X } from "lucide-react";

export default function ErrorBanner({ message, onDismiss }) {
  if (!message) {
    return null;
  }

  return (
    <div className="fixed left-4 right-4 top-4 z-50 mx-auto flex max-w-3xl items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-900 shadow-soft">
      <AlertTriangle className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
      <p className="flex-1">{message}</p>
      <button
        className="rounded p-1 text-red-700 hover:bg-red-100"
        onClick={onDismiss}
        aria-label="Tutup error"
        type="button"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
