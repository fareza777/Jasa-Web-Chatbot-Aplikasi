import { PackagePlus } from "lucide-react";

export default function EmptyState({ onAdd }) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-md border border-dashed border-navy-100 bg-white px-6 text-center">
      <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-navy-50 text-gold-500">
        <PackagePlus className="h-8 w-8" aria-hidden="true" />
      </div>
      <h2 className="text-lg font-bold text-navy-900">Belum ada paket produk.</h2>
      <p className="mt-2 max-w-md text-sm text-slate-600">
        Klik tombol + untuk menambahkan.
      </p>
      <button
        type="button"
        onClick={onAdd}
        className="mt-5 rounded-md bg-navy-800 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-700"
      >
        Tambah Paket
      </button>
    </div>
  );
}
