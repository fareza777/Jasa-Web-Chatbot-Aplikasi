import { Edit3 } from "lucide-react";
import { formatRupiah } from "../utils/formatters";

export default function ProductCard({ product, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group flex h-full flex-col rounded-md border border-navy-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-soft"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded bg-navy-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-navy-700">
          {product.kategori}
        </span>
        <Edit3
          className="h-4 w-4 text-slate-400 group-hover:text-gold-500"
          aria-hidden="true"
        />
      </div>
      <h2 className="text-lg font-bold leading-snug text-navy-900">{product.judul}</h2>
      <p className="mt-2 text-2xl font-black text-gold-500">
        {formatRupiah(product.harga)}
      </p>
      <p className="mt-3 line-clamp-2 text-sm text-slate-600">
        {product.deskripsiSingkat}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {product.fitur.slice(0, 2).map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </button>
  );
}
