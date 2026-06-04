import { Plus } from "lucide-react";
import { categories } from "../data/initialProducts";
import EmptyState from "./EmptyState";
import ProductCard from "./ProductCard";

export default function Dashboard({
  products,
  selectedCategory,
  onCategoryChange,
  onAdd,
  onSelect,
}) {
  const filteredProducts =
    selectedCategory === "Semua"
      ? products
      : products.filter((product) => product.kategori === selectedCategory);

  return (
    <main className="min-h-screen bg-navy-50">
      <section className="bg-navy-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-gold-400">
                Dashboard Tokopedia
              </p>
              <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                Kelola listing jasa digital dari satu tempat.
              </h1>
            </div>
            <button
              type="button"
              onClick={onAdd}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-4 py-3 text-sm font-black text-navy-900 hover:bg-gold-400"
            >
              <Plus className="h-5 w-5" aria-hidden="true" />
              Tambah Paket
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-slate-600">
            {filteredProducts.length} dari {products.length} paket ditampilkan
          </p>
          <label className="text-sm font-bold text-navy-900">
            Filter Kategori
            <select
              value={selectedCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
              className="ml-0 mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm sm:ml-3 sm:mt-0 sm:w-auto"
            >
              <option value="Semua">Semua</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>

        {products.length === 0 ? (
          <EmptyState onAdd={onAdd} />
        ) : filteredProducts.length === 0 ? (
          <div className="rounded-md border border-dashed border-navy-100 bg-white px-6 py-14 text-center text-sm font-semibold text-slate-600">
            Tidak ada paket pada kategori ini.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelect}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
