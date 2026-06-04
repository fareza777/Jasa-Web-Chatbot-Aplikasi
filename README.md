# Premium Digital Service Website

Aplikasi React satu halaman untuk mempresentasikan jasa digital premium: website, AI chatbot WhatsApp, aplikasi mobile, dan paket growth stack. Halaman utama memakai konfigurator paket interaktif untuk menyesuaikan kebutuhan seperti jumlah halaman website, gaya visual, fitur chatbot, modul aplikasi, dan add-on penawaran.

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

- `src/App.jsx` - entry utama aplikasi.
- `src/components/PremiumStudio.jsx` - landing page premium dan konfigurator paket.
- `src/data/serviceCatalog.js` - data layanan, opsi konfigurasi, timeline, dan harga.
- `src/utils/formatters.js` - formatter harga Rupiah.

## Asumsi

- Estimasi harga bersifat simulasi awal untuk membantu konsultasi.
- Konfigurator berjalan di browser tanpa backend.
- Paket dibuat generik agar tidak menampilkan nama personal di halaman utama.
