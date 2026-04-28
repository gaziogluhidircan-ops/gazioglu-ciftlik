import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchOrders();
    }
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get('/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axiosClient.put(`/orders/${orderId}/status`, `"${newStatus}"`, {
        headers: { 'Content-Type': 'application/json' }
      });
      fetchOrders(); // Refresh orders
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Sipariş durumu güncellenirken hata oluştu.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Basic validation - just check if fields are not empty
    if (!username.trim() || !password.trim()) {
      alert('Lütfen kullanıcı adı ve şifre giriniz.');
      return;
    }
    
    try {
      const response = await axiosClient.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
      alert('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: '150px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--pine-dark)', marginBottom: '32px' }}>Yönetici Girişi</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            type="text" 
            placeholder="Kullanıcı Adı" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ 
              padding: '12px', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'Jost, sans-serif'
            }}
            autoComplete="username"
          />
          <input 
            type="password" 
            placeholder="Şifre" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              padding: '12px', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'Jost, sans-serif'
            }}
            autoComplete="current-password"
          />
          <button 
            type="submit" 
            className="btn-primary"
            style={{ 
              padding: '12px 24px',
              fontSize: '14px',
              fontFamily: 'Jost, sans-serif'
            }}
          >
            Giriş Yap
          </button>
        </form>
        <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-light)' }}>
          <p>Admin kullanıcı: <strong>admin</strong></p>
          <p>Admin şifre: <strong>admin123</strong></p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '120px', maxWidth: '1000px', margin: '0 auto', paddingBottom: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--pine-dark)' }}>Yönetici Paneli</h1>
        <button onClick={handleLogout} className="btn-outline" style={{ color: 'var(--pine)', borderColor: 'var(--pine)' }}>Çıkış Yap</button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div style={{ background: 'var(--cream)', padding: '24px', borderRadius: '4px' }}>
          <h3 style={{ marginBottom: '16px', color: 'var(--pine-dark)' }}>Son Siparişler</h3>
          {loading ? (
            <p>Yükleniyor...</p>
          ) : orders.length === 0 ? (
            <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Henüz sipariş bulunmuyor.</p>
          ) : (
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {orders.map(order => (
                <div key={order.id} style={{ 
                  border: '1px solid #ddd', 
                  padding: '12px', 
                  marginBottom: '12px', 
                  borderRadius: '4px',
                  background: 'white'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong>{order.customerName}</strong>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {order.customerPhone} • {new Date(order.createdAt).toLocaleDateString('tr-TR')}
                      </div>
                      <div style={{ fontSize: '14px', marginTop: '4px' }}>
                        Toplam: {order.totalAmount} ₺
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <select 
                        value={order.status} 
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        style={{ 
                          padding: '4px 8px', 
                          fontSize: '12px',
                          border: '1px solid #ddd',
                          borderRadius: '4px'
                        }}
                      >
                        <option value="Pending">Bekliyor</option>
                        <option value="Shipped">Kargolandı</option>
                        <option value="Completed">Tamamlandı</option>
                        <option value="Cancelled">İptal Edildi</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
                    {order.orderItems.map(item => `${item.name} (${item.quantity}x)`).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{ background: 'var(--cream)', padding: '24px', borderRadius: '4px' }}>
          <h3 style={{ marginBottom: '16px', color: 'var(--pine-dark)' }}>Ürün Yönetimi</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Yakında eklenecek.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
