# Dashboard Listing Jasa Digital

Aplikasi React satu halaman untuk mengelola listing produk digital UMKM: chatbot WhatsApp, landing page, aplikasi Android, dan paket combo.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
```

## Struktur Proyek

- `src/App.jsx` - state utama, integrasi localStorage, dan alur modal.
- `src/components/` - komponen dashboard, kartu produk, modal form, loading, empty, dan error state.
- `src/data/initialProducts.js` - data awal 4 paket produk.
- `src/utils/` - helper localStorage dan formatter listing Tokopedia.

## Asumsi

- Data awal disimpan ke `localStorage` hanya saat storage masih kosong.
- Preview Tokopedia dibuat dari data form terbaru dan diformat sebagai teks sederhana.
- Tidak ada backend atau database karena seluruh state dikelola di browser.
