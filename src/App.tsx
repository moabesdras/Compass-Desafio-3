import { Navigate, Route, Routes } from 'react-router-dom';
import Root from './templates/Root';
import Home from './pages/Home/Home';
import Shop from './pages/shop/Shop';
import ProductPage from './pages/product-detailed/ProductPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Componente principal da aplicação, que renderiza as rotas e gerencia a navegação
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/" element={<Root />}>
        <Route index path="/home" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/product" element={<ProductPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
