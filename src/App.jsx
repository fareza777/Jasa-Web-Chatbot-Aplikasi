import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import ErrorBanner from "./components/ErrorBanner";
import LoadingSpinner from "./components/LoadingSpinner";
import ProductFormModal from "./components/ProductFormModal";
import { loadProducts, saveProducts } from "./utils/storage";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeProduct, setActiveProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setProducts(loadProducts());
      } catch (storageError) {
        setError(`Gagal membaca localStorage: ${storageError.message}`);
      } finally {
        setLoading(false);
      }
    }, 500);

    // asumsi: delay 500ms hanya untuk memperlihatkan loading state sesuai acceptance criteria.
    return () => window.clearTimeout(timer);
  }, []);

  function persistProducts(nextProducts) {
    try {
      saveProducts(nextProducts);
      setProducts(nextProducts);
      setError("");
      return true;
    } catch (storageError) {
      setError(`Gagal menyimpan data: ${storageError.message}`);
      return false;
    }
  }

  function openNewProduct() {
    setActiveProduct(null);
    setModalOpen(true);
  }

  function openExistingProduct(product) {
    setActiveProduct(product);
    setModalOpen(true);
  }

  function handleSave(product) {
    const nextProducts = products.some((item) => item.id === product.id)
      ? products.map((item) => (item.id === product.id ? product : item))
      : [product, ...products];

    if (persistProducts(nextProducts)) {
      setModalOpen(false);
      setActiveProduct(null);
    }
  }

  function handleDelete(productId) {
    const nextProducts = products.filter((product) => product.id !== productId);
    if (persistProducts(nextProducts)) {
      setModalOpen(false);
      setActiveProduct(null);
    }
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ErrorBanner message={error} onDismiss={() => setError("")} />
      <Dashboard
        products={products}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onAdd={openNewProduct}
        onSelect={openExistingProduct}
      />
      {modalOpen && (
        <ProductFormModal
          product={activeProduct}
          onClose={() => {
            setModalOpen(false);
            setActiveProduct(null);
          }}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}
