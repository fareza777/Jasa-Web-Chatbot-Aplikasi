import { Plus, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { categories } from "../data/initialProducts";
import { createTokopediaPreview } from "../utils/formatters";

const blankProduct = {
  judul: "",
  kategori: "Chatbot",
  harga: 0,
  deskripsiSingkat: "",
  fitur: [],
  deskripsiLengkap: "",
};

export default function ProductFormModal({ product, onClose, onSave, onDelete }) {
  const [draft, setDraft] = useState(product || blankProduct);
  const [newFeature, setNewFeature] = useState("");
  const [formError, setFormError] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const previewText = useMemo(() => createTokopediaPreview(draft), [draft]);

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function addFeature() {
    const cleanFeature = newFeature.trim();
    if (!cleanFeature) {
      return;
    }
    setDraft((current) => ({
      ...current,
      fitur: [...current.fitur, cleanFeature],
    }));
    setNewFeature("");
  }

  function removeFeature(index) {
    setDraft((current) => ({
      ...current,
      fitur: current.fitur.filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  function saveDraft() {
    if (!draft.judul.trim()) {
      setFormError("Judul tidak boleh kosong.");
      return;
    }

    if (!Number(draft.harga) || Number(draft.harga) <= 0) {
      setFormError("Harga harus berupa angka positif.");
      return;
    }

    setFormError("");
    onSave({
      ...draft,
      id: draft.id || `produk-${Date.now()}`,
      harga: Number(draft.harga),
      fitur: draft.fitur.filter((item) => item.trim()),
    });
  }

  return (
    <div className="fixed inset-0 z-40 bg-navy-900/70 px-4 py-6 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-h-full max-w-5xl flex-col overflow-hidden rounded-md bg-white shadow-soft">
        <header className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-gold-500">
              Editor Listing
            </p>
            <h2 className="text-xl font-black text-navy-900">
              {draft.id ? "Edit Paket Produk" : "Tambah Paket Produk"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-2 text-slate-500 hover:bg-navy-50 hover:text-navy-900"
            aria-label="Tutup modal"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div className="grid flex-1 overflow-auto lg:grid-cols-[1.2fr_0.8fr]">
          <form className="space-y-5 p-5" onSubmit={(event) => event.preventDefault()}>
            {formError && (
              <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-900">
                {formError}
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-navy-900">
                Judul
                <input
                  value={draft.judul}
                  onChange={(event) => updateField("judul", event.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  placeholder="Nama paket produk"
                />
              </label>
              <label className="block text-sm font-semibold text-navy-900">
                Kategori
                <select
                  value={draft.kategori}
                  onChange={(event) => updateField("kategori", event.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-sm font-semibold text-navy-900">
              Harga
              <input
                type="number"
                min="0"
                value={draft.harga}
                onChange={(event) => updateField("harga", event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                placeholder="599000"
              />
            </label>

            <label className="block text-sm font-semibold text-navy-900">
              Deskripsi Singkat
              <textarea
                value={draft.deskripsiSingkat}
                onChange={(event) =>
                  updateField("deskripsiSingkat", event.target.value)
                }
                rows="3"
                className="mt-2 w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>

            <label className="block text-sm font-semibold text-navy-900">
              Deskripsi Lengkap
              <textarea
                value={draft.deskripsiLengkap}
                onChange={(event) =>
                  updateField("deskripsiLengkap", event.target.value)
                }
                rows="5"
                className="mt-2 w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>

            <section>
              <h3 className="text-sm font-bold text-navy-900">Fitur</h3>
              <div className="mt-2 space-y-2">
                {draft.fitur.map((feature, index) => (
                  <div
                    key={`${feature}-${index}`}
                    className="flex items-center gap-2 rounded-md bg-navy-50 px-3 py-2"
                  >
                    <span className="flex-1 text-sm text-slate-700">{feature}</span>
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="rounded p-1 text-slate-500 hover:bg-white hover:text-red-700"
                      aria-label={`Hapus fitur ${feature}`}
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  value={newFeature}
                  onChange={(event) => setNewFeature(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      addFeature();
                    }
                  }}
                  className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
                  placeholder="Tambah fitur baru"
                />
                <button
                  type="button"
                  onClick={addFeature}
                  className="grid h-10 w-10 place-items-center rounded-md bg-navy-800 text-white hover:bg-navy-700"
                  aria-label="Tambah fitur"
                >
                  <Plus className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </section>
          </form>

          <aside className="border-t border-navy-100 bg-navy-50 p-5 lg:border-l lg:border-t-0">
            <button
              type="button"
              onClick={() => setShowPreview((value) => !value)}
              className="w-full rounded-md border border-navy-200 bg-white px-4 py-2 text-sm font-bold text-navy-800 hover:border-gold-400"
            >
              Preview Listing
            </button>
            {showPreview && (
              <pre className="mt-4 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-md border border-navy-100 bg-white p-4 text-sm leading-6 text-slate-700">
                {previewText}
              </pre>
            )}
          </aside>
        </div>

        <footer className="flex flex-col-reverse gap-3 border-t border-navy-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => draft.id && onDelete(draft.id)}
            disabled={!draft.id}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-red-200 px-4 py-2 text-sm font-bold text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            Hapus
          </button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={saveDraft}
              className="rounded-md bg-gold-500 px-4 py-2 text-sm font-black text-navy-900 hover:bg-gold-400"
            >
              Simpan Paket
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
