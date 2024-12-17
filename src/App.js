import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { useAuth } from './hooks/useAuth';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/auth/Profile';
import PrivateRoute from './components/auth/PrivateRoute';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import FAQ from './components/pages/FAQ';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Terms from './components/pages/Terms';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import OrderConfirmation from './components/checkout/OrderConfirmation';
import SearchResults from './components/search/SearchResults';
import OrderList from './components/orders/OrderList';
import OrderDetails from './components/orders/OrderDetails';
import VendorDashboard from './components/vendor/Dashboard';
import VendorOrders from './components/vendor/OrderManagement';
import VendorRegistration from './components/vendor/VendorRegistration';

const AppContent = () => {
  useAuth();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/vendor/register" element={<VendorRegistration />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-confirmation/:orderId"
          element={
            <PrivateRoute>
              <OrderConfirmation />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders/:orderId"
          element={
            <PrivateRoute>
              <OrderDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/vendor/dashboard"
          element={
            <PrivateRoute roles={['vendor']}>
              <VendorDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/vendor/orders"
          element={
            <PrivateRoute roles={['vendor']}>
              <VendorOrders />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;