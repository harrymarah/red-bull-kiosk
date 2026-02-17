import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ChillersPage from './pages/ChillersPage';
import EventsPage from './pages/EventsPage';
import BrandPage from './pages/BrandPage';
import FitnessPage from './pages/FitnessPage';
import NewProductsPage from './pages/NewProductsPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/product" element={<ProductPage />} />
          <Route path="category/chillers" element={<ChillersPage />} />
          <Route path="category/events" element={<EventsPage />} />
          <Route path="category/brand" element={<BrandPage />} />
          <Route path="category/fitness" element={<FitnessPage />} />
          <Route path="category/new-products" element={<NewProductsPage />} />
          <Route path="category/:slug" element={<CategoryPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
