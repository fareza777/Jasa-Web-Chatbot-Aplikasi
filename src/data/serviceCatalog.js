export const serviceCatalog = [
  {
    id: "website",
    name: "Website Conversion System",
    label: "Website",
    headline: "Website yang langsung menjelaskan siapa Anda, apa yang ditawarkan, dan kenapa orang harus percaya.",
    description:
      "Cocok untuk landing page, company profile, katalog, booking, atau website multi-halaman yang ingin terlihat rapi tanpa terasa berlebihan.",
    basePrice: 750000,
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
          { label: "5 halaman bisnis lengkap", value: "5 halaman", price: 650000 },
          { label: "10 halaman + katalog layanan", value: "10 halaman", price: 1400000 },
        ],
      },
      {
        id: "visualStyle",
        label: "Arah visual",
        type: "select",
        choices: [
          { label: "Luxury corporate", value: "Luxury corporate", price: 0 },
          { label: "Modern tech startup", value: "Modern tech startup", price: 150000 },
          { label: "Bold product launch", value: "Bold product launch", price: 200000 },
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
          { label: "Form konsultasi terstruktur", value: "Form konsultasi", price: 150000 },
          { label: "Katalog produk atau jasa", value: "Katalog", price: 250000 },
          { label: "Integrasi pixel tracking", value: "Pixel tracking", price: 150000 },
          { label: "Blog atau artikel SEO", value: "Blog SEO", price: 300000 },
        ],
      },
    ],
  },
  {
    id: "chatbot",
    name: "AI WhatsApp Sales Assistant",
    label: "Chatbot AI",
    headline: "Chatbot AI yang membantu membalas cepat, memilah calon pembeli, dan menjaga follow-up tetap jalan.",
    description:
      "Untuk bisnis yang sering kehilangan calon pelanggan karena chat telat dibalas, pertanyaan berulang, atau follow-up admin tidak konsisten.",
    basePrice: 950000,
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
          { label: "Lead qualification", value: "Kualifikasi lead", price: 450000 },
          { label: "Full sales assistant", value: "Full sales assistant", price: 900000 },
        ],
      },
      {
        id: "tone",
        label: "Gaya percakapan",
        type: "select",
        choices: [
          { label: "Ramah dan konsultatif", value: "Konsultatif", price: 0 },
          { label: "Cepat dan direct closing", value: "Direct closing", price: 0 },
          { label: "Premium concierge", value: "Premium concierge", price: 150000 },
        ],
      },
      {
        id: "channels",
        label: "Integrasi",
        type: "multi",
        choices: [
          { label: "Google Sheet lead log", value: "Google Sheet", price: 200000 },
          { label: "Notifikasi admin", value: "Notifikasi admin", price: 150000 },
          { label: "Routing ke CS berbeda", value: "Routing CS", price: 300000 },
          { label: "Template follow-up 7 hari", value: "Follow-up", price: 250000 },
        ],
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App MVP",
    label: "Aplikasi",
    headline: "Aplikasi ringan untuk menguji ide, merapikan layanan, atau memberi akses khusus ke pelanggan.",
    description:
      "Cocok untuk katalog, portal pelanggan, booking, komunitas, edukasi, atau alat internal yang perlu cepat dipakai tanpa scope terlalu besar.",
    basePrice: 2500000,
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
          { label: "Android + PWA", value: "Android + PWA", price: 850000 },
          { label: "Cross-platform plan", value: "Cross-platform", price: 1800000 },
        ],
      },
      {
        id: "screens",
        label: "Jumlah layar",
        type: "select",
        choices: [
          { label: "5 layar inti", value: "5 layar", price: 0 },
          { label: "10 layar lengkap", value: "10 layar", price: 850000 },
          { label: "15 layar + dashboard", value: "15 layar", price: 1800000 },
        ],
      },
      {
        id: "modules",
        label: "Modul tambahan",
        type: "multi",
        choices: [
          { label: "Login pelanggan", value: "Login", price: 450000 },
          { label: "Booking atau reservasi", value: "Booking", price: 700000 },
          { label: "Push notification plan", value: "Push notification", price: 400000 },
          { label: "Katalog interaktif", value: "Katalog interaktif", price: 550000 },
        ],
      },
    ],
  },
  {
    id: "growth-stack",
    name: "Digital Growth Stack",
    label: "Paket Combo",
    headline: "Website, chatbot, dan aset penawaran yang saling nyambung dari awal sampai follow-up.",
    description:
      "Untuk bisnis yang ingin langsung punya tampilan online, alur chat, tracking lead, dan bahan penawaran yang terasa satu brand.",
    basePrice: 3200000,
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
          { label: "Scale stack", value: "Scale", price: 1400000 },
          { label: "Authority stack", value: "Authority", price: 2700000 },
        ],
      },
      {
        id: "assets",
        label: "Aset tambahan",
        type: "multi",
        choices: [
          { label: "Pitch deck 8 halaman", value: "Pitch deck", price: 450000 },
          { label: "Template konten 30 hari", value: "Konten 30 hari", price: 750000 },
          { label: "Brand mini guide", value: "Brand guide", price: 600000 },
          { label: "Proposal PDF premium", value: "Proposal PDF", price: 400000 },
        ],
      },
    ],
  },
  {
    id: "digital-assistant",
    name: "OpenClaw Digital Assistant",
    label: "Asisten Digital",
    headline: "Asisten digital siap pakai untuk menjawab, mengarahkan, merangkum, dan membantu workflow harian.",
    description:
      "Untuk pelanggan yang ingin punya asisten seperti Hermes atau OpenClaw versi bisnisnya sendiri, disiapkan sesuai layanan, SOP, dan gaya komunikasi brand.",
    basePrice: 2900000,
    timeline: "21-40 hari kerja",
    includes: [
      "Blueprint persona asisten",
      "Knowledge base bisnis",
      "Workflow automation",
      "Admin handover mode",
      "Testing skenario pelanggan",
    ],
    options: [
      {
        id: "assistantRole",
        label: "Peran asisten",
        type: "select",
        choices: [
          { label: "Customer support assistant", value: "Customer support", price: 0 },
          { label: "Sales qualification assistant", value: "Sales qualification", price: 650000 },
          { label: "Operations co-pilot", value: "Operations co-pilot", price: 1100000 },
        ],
      },
      {
        id: "deployment",
        label: "Mode deployment",
        type: "select",
        choices: [
          { label: "Website assistant", value: "Website assistant", price: 0 },
          { label: "WhatsApp assistant", value: "WhatsApp assistant", price: 850000 },
          { label: "Multi-channel assistant", value: "Multi-channel assistant", price: 1800000 },
        ],
      },
      {
        id: "assistantModules",
        label: "Modul kecerdasan",
        type: "multi",
        choices: [
          { label: "FAQ knowledge base", value: "FAQ knowledge base", price: 250000 },
          { label: "Lead scoring", value: "Lead scoring", price: 400000 },
          { label: "Task summary", value: "Task summary", price: 350000 },
          { label: "Human handover routing", value: "Human handover", price: 400000 },
          { label: "Internal SOP assistant", value: "SOP assistant", price: 700000 },
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
    headline: "Bikin calon klien cepat paham layanan dan lebih yakin untuk konsultasi.",
    recommendedService: "website",
  },
  {
    id: "property",
    label: "Properti",
    headline: "Tampilkan unit dengan rapi, saring prospek, lalu arahkan ke sales yang tepat.",
    recommendedService: "growth-stack",
  },
  {
    id: "clinic",
    label: "Klinik & Wellness",
    headline: "Buat calon pasien merasa aman sebelum mereka booking atau bertanya.",
    recommendedService: "website",
  },
  {
    id: "education",
    label: "Edukasi",
    headline: "Jelaskan program, jawab pertanyaan berulang, dan arahkan calon siswa tanpa ribet.",
    recommendedService: "chatbot",
  },
  {
    id: "retail",
    label: "Produk & Retail",
    headline: "Gabungkan katalog, chat, dan pencatatan lead dalam alur yang mudah dipakai.",
    recommendedService: "growth-stack",
  },
  {
    id: "operations",
    label: "Operasional & Admin",
    headline: "Buat asisten digital yang membantu admin menjawab, merangkum, dan mengarahkan pekerjaan.",
    recommendedService: "digital-assistant",
  },
];

export const goals = [
  {
    id: "lead",
    label: "Cari leads",
    impact: "Fokus pada CTA yang jelas, form singkat, dan penawaran yang mudah dipahami.",
    recommendedService: "website",
  },
  {
    id: "automation",
    label: "Automasi chat",
    impact: "Fokus pada jawaban cepat, FAQ, dan follow-up agar chat tidak menumpuk.",
    recommendedService: "chatbot",
  },
  {
    id: "booking",
    label: "Booking",
    impact: "Fokus pada jadwal, form kebutuhan, dan notifikasi yang langsung masuk ke admin.",
    recommendedService: "mobile-app",
  },
  {
    id: "authority",
    label: "Naikkan trust",
    impact: "Fokus pada visual yang meyakinkan, bukti kerja, dan proposal yang enak dibaca.",
    recommendedService: "growth-stack",
  },
  {
    id: "assistant",
    label: "Bangun asisten digital",
    impact: "Fokus pada knowledge base, workflow, handover manusia, dan SOP yang jelas.",
    recommendedService: "digital-assistant",
  },
];

export const visualThemes = [
  {
    id: "signature",
    label: "Signature",
    description: "Gelap, presisi, aksen cobalt, cocok untuk jasa yang ingin terlihat high-trust.",
    colors: {
      dark: "#080B12",
      accent: "#2563EB",
      secondary: "#93C5FD",
      surface: "#F6F8FB",
    },
  },
  {
    id: "tech",
    label: "Tech",
    description: "Bersih, modern, terasa seperti produk SaaS atau dashboard profesional.",
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
    description: "Ringan, lapang, mudah dibaca, cocok untuk brand yang ingin terlihat tenang.",
    colors: {
      dark: "#1F2937",
      accent: "#2563EB",
      secondary: "#64748B",
      surface: "#F8FAFC",
    },
  },
  {
    id: "launch",
    label: "Launch",
    description: "Kontras dan cepat terbaca, cocok untuk campaign atau produk yang ingin segera diuji pasar.",
    colors: {
      dark: "#07131F",
      accent: "#2563EB",
      secondary: "#60A5FA",
      surface: "#EFF6FF",
    },
  },
];

export const exampleBuilds = [
  {
    title: "Luxury Clinic Website",
    type: "Website",
    description: "Homepage yang langsung membangun rasa aman: layanan jelas, profil dokter, CTA booking, dan trust section.",
  },
  {
    title: "Property AI Sales Assistant",
    type: "Chatbot AI",
    description: "Chatbot yang menanyakan budget, lokasi, tipe unit, lalu meneruskan prospek yang sudah lebih siap ke sales.",
  },
  {
    title: "Mobile Booking App",
    type: "Aplikasi",
    description: "Aplikasi simpel untuk melihat layanan, memilih jadwal, booking, dan menyimpan riwayat pelanggan.",
  },
  {
    title: "Digital Growth Stack",
    type: "Combo",
    description: "Satu paket yang menyambungkan website, chatbot, lead capture, proposal, dan tracking sederhana.",
  },
  {
    title: "OpenClaw Digital Assistant",
    type: "Asisten Digital",
    description: "Asisten digital dengan persona, knowledge base, routing workflow, lead scoring, dan handover ke admin.",
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
  {
    title: "Assistant Blueprint",
    description: "Persona, batasan jawaban, escalation path, dan SOP dibuat sebelum asisten dipasang.",
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

export const packageTiers = [
  {
    id: "launch",
    name: "Launch",
    priceLabel: "Mulai Rp750rb",
    bestFor: "Bisnis yang butuh presence premium cepat.",
    includes: [
      "Website atau chatbot scope kecil",
      "Copywriting utama",
      "CTA konsultasi",
      "Review responsif",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    priceLabel: "Mulai Rp2,5jt",
    bestFor: "Bisnis yang ingin sistem lead lebih lengkap.",
    includes: [
      "Website multi-section",
      "AI chat flow atau app MVP ringan",
      "Proposal preview",
      "Lead capture workflow",
    ],
    featured: true,
  },
  {
    id: "authority",
    name: "Authority",
    priceLabel: "Mulai Rp4,5jt+",
    bestFor: "Brand yang ingin terlihat mapan dan siap scale.",
    includes: [
      "Growth stack lengkap",
      "Website + chatbot + aset sales",
      "Premium visual direction",
      "Launch support dan handover",
    ],
  },
];

export const industryPlaybooks = {
  professional: {
    title: "Professional Services Playbook",
    focus: "Membuat calon klien percaya sebelum masuk sesi konsultasi.",
    moves: [
      "Tampilkan masalah yang biasa dialami klien",
      "Pisahkan layanan berdasarkan outcome",
      "Gunakan CTA konsultasi dengan pertanyaan awal",
      "Tambahkan proof berupa proses, credential, dan hasil kerja",
    ],
  },
  property: {
    title: "Property Lead Playbook",
    focus: "Memilah prospek berdasarkan lokasi, budget, dan intent beli.",
    moves: [
      "Buat katalog unit atau tipe properti yang mudah discan",
      "Tambahkan chatbot kualifikasi budget dan lokasi",
      "Routing prospek panas ke sales lebih cepat",
      "Follow-up otomatis untuk prospek yang belum siap",
    ],
  },
  clinic: {
    title: "Clinic Trust Playbook",
    focus: "Meningkatkan rasa aman, profesional, dan mudah booking.",
    moves: [
      "Tampilkan layanan dengan benefit yang jelas",
      "Sorot dokter, fasilitas, dan proses treatment",
      "Buat CTA booking yang tidak terasa agresif",
      "Gunakan FAQ untuk mengurangi keraguan awal",
    ],
  },
  education: {
    title: "Education Enrollment Playbook",
    focus: "Mengubah rasa ingin tahu menjadi inquiry program.",
    moves: [
      "Tampilkan roadmap belajar dan outcome peserta",
      "Pisahkan program berdasarkan level atau tujuan",
      "Gunakan chatbot untuk rekomendasi program",
      "Buat follow-up untuk calon siswa yang belum mendaftar",
    ],
  },
  retail: {
    title: "Retail Growth Playbook",
    focus: "Menggabungkan katalog, promo, dan chat menjadi alur order.",
    moves: [
      "Buat katalog produk yang cepat dipahami",
      "Tampilkan best seller dan alasan membeli",
      "Gunakan chat untuk rekomendasi produk",
      "Tambahkan tracking lead untuk campaign",
    ],
  },
  operations: {
    title: "Digital Assistant Operations Playbook",
    focus: "Membuat asisten digital yang membantu admin, sales, dan support bekerja lebih konsisten.",
    moves: [
      "Tentukan persona, batasan jawaban, dan SOP escalation",
      "Bangun knowledge base dari FAQ, produk, layanan, dan kebijakan bisnis",
      "Tambahkan lead scoring dan ringkasan kebutuhan pelanggan",
      "Gunakan human handover untuk pertanyaan sensitif atau high-value",
    ],
  },
};

export const assetChecklist = [
  "Brand direction dan tone komunikasi",
  "Headline utama dan offer angle",
  "CTA konsultasi atau order",
  "FAQ dan objection handling",
  "Lead capture form atau chat flow",
  "Proposal atau brief siap copy",
  "Responsive layout desktop/mobile",
  "Launch checklist dan handover notes",
];

export const guaranteeSignals = [
  {
    title: "Scope clarity",
    description: "Setiap paket punya batasan, deliverables, dan next step yang eksplisit.",
  },
  {
    title: "Review checkpoint",
    description: "Pengerjaan dipecah ke tahap strategy, design, build, dan handover.",
  },
  {
    title: "Conversion-minded",
    description: "Setiap section diarahkan untuk menjelaskan value dan mendorong tindakan.",
  },
  {
    title: "Handover-ready",
    description: "Output tidak berhenti di tampilan; ada brief, copy, dan arahan penggunaan.",
  },
];

export const maturityAuditItems = [
  {
    id: "clear-offer",
    label: "Penawaran utama sudah jelas dalam 5 detik",
    weight: 16,
    recommendation: "Perkuat headline, subheadline, dan value proposition.",
  },
  {
    id: "premium-proof",
    label: "Ada proof, proses, atau credential yang membuat brand dipercaya",
    weight: 14,
    recommendation: "Tambahkan trust layer: proses kerja, testimonial, atau proof of work.",
  },
  {
    id: "lead-capture",
    label: "Ada form, CTA, atau WhatsApp flow untuk menangkap lead",
    weight: 18,
    recommendation: "Bangun lead capture dan CTA yang konsisten di setiap section.",
  },
  {
    id: "chat-system",
    label: "Chat calon pelanggan sudah diarahkan dengan script atau automasi",
    weight: 16,
    recommendation: "Gunakan AI assistant untuk FAQ, kualifikasi, dan follow-up.",
  },
  {
    id: "mobile-polish",
    label: "Tampilan mobile terasa premium dan cepat dipahami",
    weight: 14,
    recommendation: "Prioritaskan mobile layout, spacing, dan CTA above-the-fold.",
  },
  {
    id: "proposal-ready",
    label: "Ada proposal atau brief siap kirim setelah konsultasi",
    weight: 12,
    recommendation: "Siapkan proposal preview dan project brief yang bisa dicopy.",
  },
  {
    id: "analytics-ready",
    label: "Lead dan campaign sudah bisa dilacak",
    weight: 10,
    recommendation: "Tambahkan tracking dasar dan struktur lead log.",
  },
];

export const scopeMatrix = [
  {
    area: "Strategy",
    launch: "Offer angle + CTA utama",
    scale: "Buyer journey + conversion map",
    authority: "Positioning system + campaign direction",
  },
  {
    area: "Design",
    launch: "Premium landing direction",
    scale: "Full interface system",
    authority: "Multi-channel visual language",
  },
  {
    area: "Automation",
    launch: "Basic lead routing",
    scale: "AI qualification + follow-up",
    authority: "End-to-end growth workflow",
  },
  {
    area: "Sales Assets",
    launch: "Proposal copy starter",
    scale: "Proposal + WhatsApp scripts",
    authority: "Pitch deck + content system",
  },
  {
    area: "Launch",
    launch: "Responsive review",
    scale: "Tracking + handover brief",
    authority: "Launch support + optimization notes",
  },
];

export const caseStudySimulations = [
  {
    id: "clinic-growth",
    title: "Klinik ingin terlihat premium dan meningkatkan booking",
    industry: "Klinik & Wellness",
    problem:
      "Calon pasien sering bertanya hal dasar berulang, sementara halaman layanan belum cukup meyakinkan.",
    solution:
      "Website trust-first dengan struktur layanan, FAQ treatment, CTA booking, dan chatbot untuk pertanyaan awal.",
    stack: ["Website Conversion", "AI FAQ Assistant", "Booking CTA", "Trust Layer"],
    outcome: "Inquiry lebih terarah dan admin menerima calon pasien dengan konteks lebih jelas.",
  },
  {
    id: "property-leads",
    title: "Tim properti butuh memilah prospek lebih cepat",
    industry: "Properti",
    problem:
      "Banyak chat masuk tanpa budget, lokasi, atau tipe unit yang jelas sehingga sales membuang waktu.",
    solution:
      "AI qualification flow untuk budget, lokasi, tipe unit, dan timeline beli, ditambah landing page katalog unit.",
    stack: ["Property Landing Page", "AI Lead Qualification", "Sales Routing", "Lead Log"],
    outcome: "Prospek panas lebih cepat teridentifikasi dan follow-up jadi lebih konsisten.",
  },
  {
    id: "course-launch",
    title: "Program edukasi ingin launch cohort baru",
    industry: "Edukasi",
    problem:
      "Calon siswa belum paham perbedaan program, benefit, dan jalur belajar yang cocok.",
    solution:
      "Landing page program dengan roadmap belajar, rekomendasi program lewat chatbot, dan proposal ringkas.",
    stack: ["Course Landing Page", "Program Recommender", "WhatsApp Follow-up", "FAQ Layer"],
    outcome: "Inquiry lebih berkualitas karena calon siswa sudah memahami pilihan sebelum konsultasi.",
  },
  {
    id: "service-authority",
    title: "Bisnis jasa profesional ingin naik kelas",
    industry: "Jasa Profesional",
    problem:
      "Penawaran masih terlihat generik, sehingga sulit membedakan diri dari kompetitor harga murah.",
    solution:
      "Positioning premium, proposal generator, credibility layer, dan conversion-focused service page.",
    stack: ["Authority Website", "Proposal Generator", "Credibility System", "Scope Matrix"],
    outcome: "Value jasa lebih mudah dijelaskan dan proses konsultasi terasa lebih profesional.",
  },
  {
    id: "assistant-ops",
    title: "Bisnis ingin punya asisten digital siap pakai",
    industry: "Operasional & Admin",
    problem:
      "Admin sering menjawab pertanyaan berulang, merangkum kebutuhan manual, dan kehilangan konteks saat handover.",
    solution:
      "OpenClaw Digital Assistant dengan persona, knowledge base, lead scoring, SOP helper, dan human handover routing.",
    stack: ["OpenClaw Assistant", "Knowledge Base", "Lead Scoring", "Human Handover"],
    outcome: "Tim menerima ringkasan kebutuhan yang lebih jelas dan respons pelanggan lebih konsisten.",
  },
];

export const objectionHandlers = [
  {
    id: "too-expensive",
    concern: "Takut investasinya terlalu mahal",
    response:
      "Harga dijelaskan lewat scope, deliverables, ROI estimator, dan payback logic agar keputusan terasa rasional.",
    proof: ["ROI estimator", "Scope matrix", "Proposal preview"],
  },
  {
    id: "unclear-scope",
    concern: "Takut scope project tidak jelas",
    response:
      "Setiap paket punya matrix kedalaman, project brief, checklist aset, dan tahapan roadmap yang eksplisit.",
    proof: ["Scope matrix", "Project intake", "Execution roadmap"],
  },
  {
    id: "not-premium",
    concern: "Takut hasilnya terlihat seperti template",
    response:
      "Visual theme, credibility layer, industry playbook, dan example builds membantu menunjukkan arah desain yang custom.",
    proof: ["Visual themes", "Example builds", "Credibility layer"],
  },
  {
    id: "hard-to-manage",
    concern: "Takut setelah jadi sulit dipakai",
    response:
      "Output dilengkapi handover notes, brief siap copy, WhatsApp opener, dan launch checklist agar mudah digunakan.",
    proof: ["Handover-ready", "Asset checklist", "WhatsApp brief"],
  },
  {
    id: "low-quality-leads",
    concern: "Takut lead tetap tidak berkualitas",
    response:
      "Chatbot, lead qualification, CTA flow, dan tracking membantu menyaring kebutuhan sebelum masuk proses closing.",
    proof: ["AI qualification", "Lead capture", "Response system"],
  },
  {
    id: "ai-control",
    concern: "Takut asisten digital menjawab sembarangan",
    response:
      "Asisten dibuat dengan persona, knowledge base, guardrail, fallback, dan handover ke manusia untuk pertanyaan sensitif.",
    proof: ["Assistant blueprint", "Knowledge base", "Human handover"],
  },
];

export const offerTones = [
  {
    id: "premium",
    label: "Premium consultative",
    headline: "Bangun sistem digital yang membuat brand terlihat siap dipercaya.",
    subheadline:
      "Cocok untuk bisnis jasa yang ingin menaikkan perceived value, memperjelas penawaran, dan membuat calon klien lebih siap konsultasi.",
  },
  {
    id: "direct",
    label: "Direct response",
    headline: "Ubah traffic dan chat masuk menjadi lead yang lebih siap closing.",
    subheadline:
      "Cocok untuk bisnis yang ingin CTA lebih tajam, alur chat lebih rapi, dan penawaran yang cepat dipahami.",
  },
  {
    id: "authority",
    label: "Authority builder",
    headline: "Tampilkan expertise Anda seperti brand yang sudah mapan.",
    subheadline:
      "Cocok untuk konsultan, klinik, edukasi, dan layanan high-ticket yang perlu trust sebelum harga dibahas.",
  },
  {
    id: "productized",
    label: "Productized service",
    headline: "Paketkan layanan digital Anda agar mudah dipilih dan dibeli.",
    subheadline:
      "Cocok untuk membuat scope, deliverables, timeline, dan proposal terasa jelas sejak awal.",
  },
];

export const ctaPatterns = [
  {
    id: "strategy-call",
    label: "Strategy call",
    primary: "Request Strategy Call",
    secondary: "Lihat rencana sistem",
  },
  {
    id: "proposal",
    label: "Proposal first",
    primary: "Generate Proposal",
    secondary: "Bandingkan scope",
  },
  {
    id: "audit",
    label: "Audit first",
    primary: "Cek Kesiapan Digital",
    secondary: "Lihat rekomendasi",
  },
  {
    id: "brief",
    label: "Brief first",
    primary: "Isi Project Brief",
    secondary: "Copy WhatsApp Text",
  },
];

export const premiumDeliverables = [
  {
    title: "Conversion Website",
    label: "Website",
    description: "Hero premium, service flow, proof layer, pricing logic, dan CTA lead capture.",
  },
  {
    title: "AI Chat System",
    label: "Automation",
    description: "Greeting, FAQ, kualifikasi lead, rekomendasi paket, dan handover ke admin.",
  },
  {
    title: "Proposal Engine",
    label: "Sales Asset",
    description: "Draft proposal, WhatsApp opener, project brief, dan scope summary siap copy.",
  },
  {
    title: "Launch Dashboard",
    label: "Operations",
    description: "Readiness score, roadmap, checklist aset, dan prioritas optimasi berikutnya.",
  },
  {
    title: "Digital Assistant",
    label: "AI Operations",
    description: "Persona, knowledge base, workflow action, lead scoring, dan human handover.",
  },
];

export const architectureNodes = [
  {
    id: "website",
    title: "Website",
    subtitle: "Premium conversion layer",
    description:
      "Halaman utama menjelaskan positioning, layanan, proof, pricing logic, dan CTA utama.",
    output: "Trust, clarity, dan first impression yang kuat.",
  },
  {
    id: "capture",
    title: "Lead Capture",
    subtitle: "Form, CTA, tracking",
    description:
      "Setiap CTA diarahkan ke form, WhatsApp, brief, atau proposal generator sesuai intent user.",
    output: "Lead masuk dengan konteks lebih jelas.",
  },
  {
    id: "ai-chat",
    title: "AI Chat",
    subtitle: "Qualification assistant",
    description:
      "Chatbot membantu FAQ, kualifikasi kebutuhan, rekomendasi paket, dan follow-up awal.",
    output: "Admin menerima prospek yang lebih siap ditangani.",
  },
  {
    id: "proposal",
    title: "Proposal",
    subtitle: "Scope and offer engine",
    description:
      "Proposal otomatis merangkum scope, timeline, budget indikatif, dan next step.",
    output: "Penawaran lebih cepat dikirim dan terlihat profesional.",
  },
  {
    id: "launch",
    title: "Launch",
    subtitle: "Readiness dashboard",
    description:
      "Readiness score, checklist, roadmap, dan asset handover memastikan sistem siap dipakai.",
    output: "Project terasa lengkap sampai tahap serah terima.",
  },
  {
    id: "assistant",
    title: "Assistant",
    subtitle: "OpenClaw workflow layer",
    description:
      "Asisten digital membaca kebutuhan user, memakai knowledge base, menjalankan flow, dan mengarahkan ke admin saat perlu.",
    output: "Operasional pelanggan lebih cepat, konsisten, dan mudah diskalakan.",
  },
];
