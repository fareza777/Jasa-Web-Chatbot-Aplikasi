export default function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-50 px-4">
      <div className="flex items-center gap-3 rounded-md bg-white px-5 py-4 text-navy-800 shadow-soft">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-navy-100 border-t-gold-500" />
        <span className="text-sm font-semibold">Memuat data listing...</span>
      </div>
    </div>
  );
}
