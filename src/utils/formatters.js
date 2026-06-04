export function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

export function createTokopediaPreview(product) {
  const fiturText = product.fitur
    .filter((item) => item.trim())
    .map((item) => `- ${item}`)
    .join("\n");

  return `${product.judul}

${product.deskripsiLengkap || product.deskripsiSingkat}

Kategori: ${product.kategori}
Harga: ${formatRupiah(product.harga)}

Fitur utama:
${fiturText || "- Belum ada fitur"}

Cocok untuk UMKM yang ingin menampilkan layanan digital secara profesional dan mudah dipahami calon pelanggan.`;
}
