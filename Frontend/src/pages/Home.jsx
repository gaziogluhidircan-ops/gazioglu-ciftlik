import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axiosClient from '../api/axiosClient';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback realistic product images based on prompt
  const fallbackProducts = [
    { id: 1, name: 'Şarköy Zeytinyağı (1 Litre)', description: 'Şarköy yöresinden doğal sıkım zeytinyağı.', price: 500, stock: 50, imageUrl: '/products/zeytinyagi.jpg' },
    { id: 2, name: 'Organik Köy Yumurtası (30\\'lu Koli)', description: 'Serbest gezen tavuklardan organik köy yumurtası.', price: 350, stock: 100, imageUrl: '/products/koy-yumurtasi.jpg' },
    { id: 3, name: 'Organik Köy Yumurtası (15\\'li Koli)', description: 'Serbest gezen tavuklardan organik köy yumurtası.', price: 200, stock: 100, imageUrl: '/products/koy-yumurtasi.jpg' },
    { id: 4, name: 'Tunceli Tulum Peyniri (1 Kilo)', description: 'Tunceli yöresine özgü doğal tulum peyniri.', price: 700, stock: 25, imageUrl: '/products/tulum-peyniri.jpg' },
    { id: 5, name: 'Tunceli Cevizi (1 Kilo)', description: 'Doğal kabuklu Tunceli cevizi.', price: 750, stock: 30, imageUrl: '/products/ceviz.jpg' },
    { id: 6, name: 'Tunceli Tereyağı (1 Kilo)', description: 'Doğal köy tereyağı.', price: 930, stock: 15, imageUrl: '/products/tereyagi.jpg' },
    { id: 7, name: 'Kuru Dut (1 Kilo)', description: 'Güneşte kurutulmuş doğal dut.', price: 975, stock: 100, imageUrl: '/products/kuru-dut.jpg' },
    { id: 8, name: 'Doğal Tunceli Halvori Balı (1 Kilo)', description: 'Tunceli Halvori yöresinden doğal bal.', price: 2600, stock: 20, imageUrl: '/products/halvori-bali.jpg' },
    { id: 9, name: 'Dut Pekmezi (1 Litre)', description: 'Doğal yapım dut pekmezi.', price: 1400, stock: 30, imageUrl: '/products/dut-pekmezi.jpg' },
    { id: 10, name: 'Dağ Sarımsağı (1 Kilo)', description: 'Doğal toplanmış dağ sarımsağı.', price: 1800, stock: 15, imageUrl: '/products/dag-sarimsagi.jpg' },
    { id: 11, name: 'Şarköy Sofralık Zeytin (1 Kilo)', description: 'Şarköy yöresinden sofralık doğal zeytin.', price: 275, stock: 50, imageUrl: '/products/sofralik-zeytin.jpg' }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to mock data if API fails
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
          <div className="products-loading">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="product-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-title"></div>
                  <div className="skeleton-description"></div>
                  <div className="skeleton-footer">
                    <div className="skeleton-price"></div>
                    <div className="skeleton-button"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
