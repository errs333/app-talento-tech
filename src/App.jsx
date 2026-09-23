// app-talento-tech\src\App.jsx
import { Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/layout/Layout';
import { Cart } from './componentes/Cart/Cart';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />
      </Route>
    </Routes>
  );
}
export default App;