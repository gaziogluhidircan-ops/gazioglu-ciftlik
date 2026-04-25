import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Dummy test since real db is not connected without sql server
      if (username === 'admin' && password === 'admin123') {
          // const response = await axiosClient.post('/auth/login', { username, passwordHash: password });
          // localStorage.setItem('token', response.data.token);
          localStorage.setItem('token', 'dummy-token');
          setIsAuthenticated(true);
      } else {
          alert('Geçersiz kullanıcı adı veya şifre.');
      }
    } catch (error) {
      alert('Giriş başarısız.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: '150px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--pine-dark)' }}>Yönetici Girişi</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
          <input 
            type="text" 
            placeholder="Kullanıcı Adı" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <input 
            type="password" 
            placeholder="Şifre" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button type="submit" className="btn-primary">Giriş Yap</button>
        </form>
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
          <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>Veritabanı bağlantısı kurulduğunda burada siparişler listelenecektir.</p>
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
