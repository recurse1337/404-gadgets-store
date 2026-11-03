import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getProducts } from './api/products';
import { MainLayout } from './modules/shared/MainLayout';
import { CartPage } from './modules/CartPage';
import { CatalogPage } from './modules/CatalogPage';
import { FavoritesPage } from './modules/FavoritesPage';
import { HomePage } from './modules/HomePage';
import { NotFoundPage } from './modules/NotFoundPage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import { ComparePage } from './modules/ComparePage';

export const App = () => {
  useEffect(() => {
    getProducts().catch(() => undefined);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path=":category" element={<CatalogPage />} />
        <Route path=":category/:productId" element={<ProductDetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="compare" element={<ComparePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
