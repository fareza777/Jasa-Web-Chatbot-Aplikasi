export const serviceCatalog = [
  {
    id: "website",
    name: "Website Conversion System",
    label: "Website",
    headline: "Website premium yang siap menjual, bukan sekadar tampil online.",
    description:
      "Untuk bisnis yang butuh landing page, company profile, katalog, booking, atau website multi-halaman dengan copywriting dan struktur konversi yang matang.",
    basePrice: 1800000,
    timeline: "7-14 hari kerja",
    includes: [
      "Strategi struktur halaman",
      "Copywriting penawaran",
      "Desain responsif premium",
      "Form lead dan CTA WhatsApp",
      "Optimasi performa dasar",
    ],
    options: [
      {
        id: "pages",
        label: "Jumlah halaman",
        type: "select",
        choices: [
          { label: "1 landing page fokus konversi", value: "1 halaman", price: 0 },
          { label: "5 halaman bisnis lengkap", value: "5 halaman", price: 1200000 },
          { label: "10 halaman + katalog layanan", value: "10 halaman", price: 2600000 },
        ],
      },
      {
        id: "visualStyle",
        label: "Arah visual",
        type: "select",
        choices: [
          { label: "Luxury corporate", value: "Luxury corporate", price: 0 },
          { label: "Modern tech startup", value: "Modern tech startup", price: 250000 },
          { label: "Bold product launch", value: "Bold product launch", price: 350000 },
        ],
      },
      {
        id: "accent",
        label: "Aksen warna",
        type: "select",
        choices: [
          { label: "Emerald black", value: "Emerald black", price: 0 },
          { label: "Gold graphite", value: "Gold graphite", price: 0 },
          { label: "Electric blue", value: "Electric blue", price: 0 },
        ],
      },
      {
        id: "features",
        label: "Fitur tambahan",
        type: "multi",
        choices: [
          { label: "Form konsultasi terstruktur", value: "Form konsultasi", price: 350000 },
          { label: "Katalog produk atau jasa", value: "Katalog", price: 500000 },
          { label: "Integrasi pixel tracking", value: "Pixel tracking", price: 300000 },
          { label: "Blog atau artikel SEO", value: "Blog SEO", price: 650000 },
        ],
      },
    ],
  },
  {
    id: "chatbot",
    name: "AI WhatsApp Sales Assistant",
    label: "Chatbot AI",
    headline: "Chatbot AI yang merespons prospek seperti sales profesional.",
    description:
      "Untuk bisnis yang ingin balasan cepat, kualifikasi calon pembeli, follow-up otomatis, dan skrip chat yang rapi di WhatsApp.",
    basePrice: 2400000,
    timeline: "5-10 hari kerja",
    includes: [
      "Mapping flow percakapan",
      "Persona brand dan tone chat",
      "FAQ dan knowledge base",
      "Skrip kualifikasi prospek",
      "Testing skenario chat",
    ],
    options: [
      {
        id: "automationDepth",
        label: "Kedalaman automasi",
        type: "select",
        choices: [
          { label: "FAQ dan respons cepat", value: "FAQ", price: 0 },
          { label: "Lead qualification", value: "Kualifikasi lead", price: 900000 },
          { label: "Full sales assistant", value: "Full sales assistant", price: 1800000 },
        ],
      },
      {
        id: "tone",
        label: "Gaya percakapan",
        type: "select",
        choices: [
          { label: "Ramah dan konsultatif", value: "Konsultatif", price: 0 },
          { label: "Cepat dan direct closing", value: "Direct closing", price: 0 },
          { label: "Premium concierge", value: "Premium concierge", price: 300000 },
        ],
      },
      {
        id: "channels",
        label: "Integrasi",
        type: "multi",
        choices: [
          { label: "Google Sheet lead log", value: "Google Sheet", price: 450000 },
          { label: "Notifikasi admin", value: "Notifikasi admin", price: 250000 },
          { label: "Routing ke CS berbeda", value: "Routing CS", price: 600000 },
          { label: "Template follow-up 7 hari", value: "Follow-up", price: 500000 },
        ],
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App MVP",
    label: "Aplikasi",
    headline: "Aplikasi mobile yang terasa solid untuk validasi produk dan layanan.",
    description:
      "Untuk bisnis yang butuh aplikasi katalog, portal pelanggan, booking, komunitas, edukasi, atau MVP internal yang bisa diuji cepat.",
    basePrice: 5200000,
    timeline: "14-30 hari kerja",
    includes: [
      "Wireframe flow aplikasi",
      "UI mobile modern",
      "Build APK untuk uji coba",
      "Struktur modul utama",
      "Dokumentasi serah terima",
    ],
    options: [
      {
        id: "platform",
        label: "Target platform",
        type: "select",
        choices: [
          { label: "Android APK", value: "Android", price: 0 },
          { label: "Android + PWA", value: "Android + PWA", price: 1600000 },
          { label: "Cross-platform plan", value: "Cross-platform", price: 3200000 },
        ],
      },
      {
        id: "screens",
        label: "Jumlah layar",
        type: "select",
        choices: [
          { label: "5 layar inti", value: "5 layar", price: 0 },
          { label: "10 layar lengkap", value: "10 layar", price: 1700000 },
          { label: "15 layar + dashboard", value: "15 layar", price: 3600000 },
        ],
      },
      {
        id: "modules",
        label: "Modul tambahan",
        type: "multi",
        choices: [
          { label: "Login pelanggan", value: "Login", price: 900000 },
          { label: "Booking atau reservasi", value: "Booking", price: 1400000 },
          { label: "Push notification plan", value: "Push notification", price: 800000 },
          { label: "Katalog interaktif", value: "Katalog interaktif", price: 1100000 },
        ],
      },
    ],
  },
  {
    id: "growth-stack",
    name: "Digital Growth Stack",
    label: "Paket Combo",
    headline: "Website, chatbot, dan aset digital yang dirancang sebagai satu mesin penjualan.",
    description:
      "Untuk bisnis yang ingin langsung punya etalase, sistem chat, tracking lead, dan materi presentasi yang konsisten dalam satu eksekusi.",
    basePrice: 6800000,
    timeline: "21-35 hari kerja",
    includes: [
      "Website conversion system",
      "AI WhatsApp assistant",
      "Lead capture workflow",
      "Template penawaran",
      "Setup analytics dasar",
    ],
    options: [
      {
        id: "bundle",
        label: "Level paket",
        type: "select",
        choices: [
          { label: "Launch stack", value: "Launch", price: 0 },
          { label: "Scale stack", value: "Scale", price: 2600000 },
          { label: "Authority stack", value: "Authority", price: 5200000 },
        ],
      },
      {
        id: "assets",
        label: "Aset tambahan",
        type: "multi",
        choices: [
          { label: "Pitch deck 8 halaman", value: "Pitch deck", price: 900000 },
          { label: "Template konten 30 hari", value: "Konten 30 hari", price: 1500000 },
          { label: "Brand mini guide", value: "Brand guide", price: 1200000 },
          { label: "Proposal PDF premium", value: "Proposal PDF", price: 850000 },
        ],
      },
    ],
  },
];

export const serviceOutcomes = [
  "Website terasa kredibel sejak layar pertama",
  "Calon pelanggan paham paket tanpa harus bertanya berulang",
  "Alur chat dan CTA dibuat untuk mengurangi lead bocor",
  "Semua copy, visual, dan struktur dipikirkan sebagai sistem penjualan",
];

export const industries = [
  {
    id: "professional",
    label: "Jasa Profesional",
    headline: "Bangun otoritas dan ubah konsultasi menjadi lead berkualitas.",
    recommendedService: "website",
  },
  {
    id: "property",
    label: "Properti",
    headline: "Tampilkan unit, kualifikasi prospek, dan follow-up otomatis.",
    recommendedService: "growth-stack",
  },
  {
    id: "clinic",
    label: "Klinik & Wellness",
    headline: "Buat pengalaman booking terasa rapi, aman, dan terpercaya.",
    recommendedService: "website",
  },
  {
    id: "education",
    label: "Edukasi",
    headline: "Jual program, kelola inquiry, dan arahkan calon siswa dengan jelas.",
    recommendedService: "chatbot",
  },
  {
    id: "retail",
    label: "Produk & Retail",
    headline: "Gabungkan katalog, chat, dan tracking lead dalam satu alur.",
    recommendedService: "growth-stack",
  },
];

export const goals = [
  {
    id: "lead",
    label: "Cari leads",
    impact: "Prioritas pada CTA, form konsultasi, dan struktur penawaran.",
    recommendedService: "website",
  },
  {
    id: "automation",
    label: "Automasi chat",
    impact: "Prioritas pada flow percakapan, FAQ, dan follow-up.",
    recommendedService: "chatbot",
  },
  {
    id: "booking",
    label: "Booking",
    impact: "Prioritas pada jadwal, form kebutuhan, dan notifikasi admin.",
    recommendedService: "mobile-app",
  },
  {
    id: "authority",
    label: "Naikkan trust",
    impact: "Prioritas pada visual premium, proof, dan proposal digital.",
    recommendedService: "growth-stack",
  },
];

export const visualThemes = [
  {
    id: "luxury",
    label: "Luxury",
    description: "Dark editorial, gold accent, premium spacing.",
    colors: {
      dark: "#080B12",
      accent: "#C7A66B",
      secondary: "#0F766E",
      surface: "#F7F4EE",
    },
  },
  {
    id: "tech",
    label: "Tech",
    description: "Clean SaaS, emerald signal, dashboard feel.",
    colors: {
      dark: "#07131F",
      accent: "#38BDF8",
      secondary: "#10B981",
      surface: "#EEF6FF",
    },
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Quiet, airy, polished, fast to scan.",
    colors: {
      dark: "#1F2937",
      accent: "#111827",
      secondary: "#6B7280",
      surface: "#FAFAF8",
    },
  },
  {
    id: "bold",
    label: "Bold",
    description: "High contrast, launch energy, strong CTA.",
    colors: {
      dark: "#130A24",
      accent: "#F97316",
      secondary: "#7C3AED",
      surface: "#FFF7ED",
    },
  },
];

export const exampleBuilds = [
  {
    title: "Luxury Clinic Website",
    type: "Website",
    description: "Homepage premium, layanan, dokter, booking CTA, dan trust section.",
  },
  {
    title: "Property AI Sales Assistant",
    type: "Chatbot AI",
    description: "Kualifikasi budget, lokasi, tipe unit, dan handover prospek ke sales.",
  },
  {
    title: "Mobile Booking App",
    type: "Aplikasi",
    description: "Onboarding, katalog layanan, jadwal, booking, dan riwayat pelanggan.",
  },
  {
    title: "Digital Growth Stack",
    type: "Combo",
    description: "Website, chatbot, lead capture, template proposal, dan tracking dasar.",
  },
];

export const credibilitySignals = [
  {
    title: "Conversion Strategy",
    description: "Struktur halaman dan CTA disusun dari intensi pembeli, bukan dari urutan template.",
  },
  {
    title: "Premium Interface",
    description: "Visual system konsisten untuk website, chatbot, proposal, dan app screen.",
  },
  {
    title: "Sales Enablement",
    description: "Output dibuat agar mudah dipakai untuk presentasi, follow-up, dan closing.",
  },
  {
    title: "Launch Readiness",
    description: "Setiap paket punya scope, timeline, deliverables, dan next step yang jelas.",
  },
];

export const testimonials = [
  {
    quote:
      "Yang berubah bukan cuma tampilan. Cara kami menjelaskan layanan jadi jauh lebih rapi dan calon klien lebih cepat paham.",
    name: "Founder bisnis jasa",
    role: "Professional services",
  },
  {
    quote:
      "Flow chatbot membantu memilah inquiry. Admin masuk saat prospek sudah lebih jelas kebutuhannya.",
    name: "Sales lead",
    role: "Property marketing",
  },
  {
    quote:
      "Proposal digital terasa lebih premium dan mudah dipresentasikan dibanding sekadar daftar harga.",
    name: "Owner UMKM",
    role: "Retail & service",
  },
];
