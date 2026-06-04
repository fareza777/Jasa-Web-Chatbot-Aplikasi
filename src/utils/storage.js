import { initialProducts } from "../data/initialProducts";

const STORAGE_KEY = "listingProdukDigital";

export function loadProducts() {
  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
    return initialProducts;
  }

  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : initialProducts;
}

export function saveProducts(products) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
