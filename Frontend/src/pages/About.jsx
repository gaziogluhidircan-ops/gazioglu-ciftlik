import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Gazioğlu Çiftliği</h1>
        <p>Geleneksel Lezzetler, Modern Anlayış</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Hikayemiz</h2>
          <p>
            Gazioğlu Çiftliği, 1985 yılında babamızın dedelerinden kalma topraklarda başlayan 
            bir çiftlik olma yolculuğuna çıktı. O günden bugüne, doğallığı ve geleneksel 
            üretim yöntemlerini koruyarak en kaliteli ürünleri sizlere sunuyoruz.
          </p>
          <p>
            Ailemizin üç nesirdir sürdürdüğü tarım geleneği, bugün modern teknolojiyle 
            birleşerek daha da güçlendi. Amacımız, doğadan aldığımızı doğaya geri vererek 
            sürdürülebilir bir gelecek inşa etmek.
          </p>
        </div>

        <div className="about-section">
          <h2>Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🌿 Doğallık</h3>
              <p>Hiçbir kimyasal katkı maddesi kullanmadan, saf ve doğal ürünler üretiyoruz.</p>
            </div>
            <div className="value-item">
              <h3>👨‍🌾 Geleneksel Üretim</h3>
              <p>Atalarımızdan öğrendiğimiz yöntemlerle, her ürünü özenle işliyoruz.</p>
            </div>
            <div className="value-item">
              <h3>🏆 Kalite</h3>
              <p>Her aşamada kalite kontrolü yaparak en iyi ürünleri masanıza taşıyoruz.</p>
            </div>
            <div className="value-item">
              <h3>🤝 Müşteri Memnuniyeti</h3>
              <p>Sizin güveniniz bizim en büyük değerimiz. Her zaman memnuniyetinizi ön planda tutuyoruz.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Ürünlerimiz</h2>
          <p>
            Çiftliğimizde özenle yetiştirdiğimiz zeytinlerden, soğuk sıkım yöntemiyle 
            elde ettiğimiz zeytinyağlarına; taze cevizlerden, organik peynirlerimize kadar 
            geniş bir ürün yelpazesi sunuyoruz.
          </p>
          <div className="products-highlight">
            <div className="product-category">
              <h3>🫒 Zeytinyağları</h3>
              <p>Taş baskı yöntemiyle üretilen, doğal sızma zeytinyağları</p>
            </div>
            <div className="product-category">
              <h3>🫒 Zeytinler</h3>
              <p>Özenle seçilmiş Şarköy zeytinleri, geleneksel tatlar</p>
            </div>
            <div className="product-category">
              <h3>🧀 Peynirler</h3>
              <p>Tunceli'nin dağlarında doğal ortamda üretilen tulum peynirleri</p>
            </div>
            <div className="product-category">
              <h3>🌰 Kuru Yemişler</h3>
              <p>Tunceli kabuklu ceviz, taze ve lezzetli</p>
            </div>
            <div className="product-category">
              <h3>🍯 Reçeller ve Pekmezler</h3>
              <p>Ev yapımı dut pekmezi, doğal ve sağlıklı</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Vizyonumuz</h2>
          <p>
            Gelecekte de Türkiye'nin dört bir yanına ve dünyaya doğal, sağlıklı ve 
            geleneksel lezzetleri ulaştırmayı hedefliyoruz. Sürdürülebilir tarım 
            pratikleriyle doğayı korurken, sizlere en kaliteli ürünleri sunmaya devam 
            edeceğiz.
          </p>
        </div>

        <div className="about-section">
          <h2>İletişim</h2>
          <div className="contact-info">
            <p><strong>📍 Adres:</strong> Gazioğlu Çiftliği, Tunceli, Türkiye</p>
            <p><strong>📞 Telefon:</strong> +90 555 123 45 67</p>
            <p><strong>📧 E-posta:</strong> info@gaziogluciftlik.com</p>
            <p><strong>🌐 Web:</strong> www.gaziogluciftlik.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
