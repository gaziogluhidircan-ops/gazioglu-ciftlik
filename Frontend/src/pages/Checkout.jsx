import React, { useState } from 'react';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Sepetiniz Boş</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>Alışverişe Dön</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    let message = `Merhaba, sipariş vermek istiyorum.\n\n*Sipariş Detayı:*\n`;
    cartItems.forEach(item => {
      message += `- ${item.name} (${item.quantity} adet) - ${item.price * item.quantity} ₺\n`;
    });
    message += `\n*Toplam:* ${getCartTotal()} ₺\n\n`;
    message += `*İletişim Bilgileri:*\nİsim: ${formData.name}\nTelefon: ${formData.phone}\nAdres: ${formData.address}`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Construct Order object
    const order = {
      customerName: formData.name,
      customerPhone: formData.phone,
      customerAddress: formData.address,
      totalAmount: getCartTotal(),
      orderItems: cartItems.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        unitPrice: item.price
      }))
    };

    try {
      // Send to API
      // await axiosClient.post('/orders', order);
      
      // Open WhatsApp
      const waLink = `https://wa.me/905550000000?text=${generateWhatsAppMessage()}`;
      window.open(waLink, '_blank');
      
      clearCart();
      alert('Siparişiniz alındı. WhatsApp üzerinden iletişime geçebilirsiniz.');
      navigate('/');
    } catch (error) {
      console.error("Order error", error);
      alert('Sipariş oluşturulurken bir hata oluştu.');
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form-container">
          <h2>Sipariş Bilgileri</h2>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Ad Soyad</label>
              <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Telefon</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Teslimat Adresi</label>
              <textarea name="address" rows="4" required value={formData.address} onChange={handleInputChange}></textarea>
            </div>
            <button type="submit" className="btn-primary btn-submit">Siparişi Tamamla & WhatsApp'a Git</button>
          </form>
        </div>
        
        <div className="checkout-summary">
          <h2>Sipariş Özeti</h2>
          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price * item.quantity} ₺</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>Genel Toplam:</span>
            <span>{getCartTotal()} ₺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
