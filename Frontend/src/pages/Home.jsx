import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axiosClient from '../api/axiosClient';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback realistic product images based on prompt
  const fallbackProducts = [
    { id: 1, name: 'Sızma Zeytinyağı', description: 'Doğal taş baskı, cam şişede saf sızma zeytinyağı.', price: 450, stock: 12, imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Gemlik Zeytini', description: 'Ahşap kasede sunulan özenle seçilmiş siyah ve yeşil zeytinler.', price: 120, stock: 45, imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f40ce8892?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'Erzincan Tulum Peyniri', description: 'Geleneksel yöntemlerle üretilmiş, yoğun aromalı tulum peyniri.', price: 320, stock: 5, imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, name: 'Kabuklu Ceviz', description: 'Yeni mahsul, ince kabuklu, içi dolgun taze ceviz.', price: 280, stock: 20, imageUrl: 'https://images.unsplash.com/photo-1599598425947-33004bb434d3?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, name: 'Kuru Dut', description: 'Güneşte kurutulmuş, doğal tatlı, katkısız kuru dut.', price: 150, stock: 30, imageUrl: 'https://images.unsplash.com/photo-1601646274028-c1164de74fa6?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, name: 'Üzüm Pekmezi', description: 'Odun ateşinde kaynatılmış, saf ve organik üzüm pekmezi.', price: 180, stock: 15, imageUrl: 'https://images.unsplash.com/photo-1632733473181-edb1a5113dd8?q=80&w=1000&auto=format&fit=crop' },
  ];

  useEffect(() => {
    // In a real app, this fetches from ASP.NET API
    // axiosClient.get('/products').then(res => setProducts(res.data)).catch(err => console.error(err));
    
    // Using mock data for immediate UI rendering
    setTimeout(() => {
      setProducts(fallbackProducts);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">YENİ HASAT 2026</div>
          <h1 className="hero-h1">Doğanın <br /><em>En Saf Hali</em></h1>
          <p className="hero-sub">
            Gazioğlu Çiftliği olarak tarladan sofranıza, hiçbir katkı maddesi kullanmadan en doğal lezzetleri sunuyoruz.
          </p>
          <div className="hero-btns">
            <a href="#products" className="btn-primary">Ürünleri İncele</a>
            <a href="#about" className="btn-outline">Hikayemiz</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-top" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595858428807-6bb9037c8672?q=80&w=1000&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Visual background */}
          </div>
          <div className="hero-img-bottom">
            <div className="hero-img-cell" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=500&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="hero-img-cell" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555507036-ab1f40ce8892?q=80&w=500&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="products-header">
          <div className="section-label">MAĞAZA</div>
          <h2 className="section-title">Doğal <em>Ürünlerimiz</em></h2>
          <p>Kendi tarlalarımızda özenle yetiştirdiğimiz, geleneksel yöntemlerle hazırladığımız tamamen organik ürünler.</p>
        </div>
        
        {loading ? (
          <div className="loading">Yükleniyor...</div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
