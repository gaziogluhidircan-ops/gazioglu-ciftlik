// Vercel Serverless Function for Products API
export default async function handler(req, res) {
  // D1 database connection (simulated for now)
  // In production, this would connect to your actual D1 database
  
  try {
    switch (req.method) {
      case 'GET':
        // Mock data for testing - Gazioğlu Çiftliği ürünleri
        const products = [
          { 
            id: 1, 
            name: 'Şarköy Zeytin Yağı', 
            description: '1 Litre Soğuk Sıkım Doğal Sızma Zeytinyağı', 
            price: 500.00, 
            category_id: 1, 
            image_url: '/images/olive-oil.jpg', 
            stock: 50,
            is_active: true 
          },
          { 
            id: 2, 
            name: 'Organik Köy Yumurtası (30\\'lu Koli)', 
            description: 'Serbest gezen tavuklardan organik köy yumurtası', 
            price: 350.00, 
            category_id: 2, 
            image_url: '/images/eggs-30.jpg', 
            stock: 100,
            is_active: true 
          },
          { 
            id: 7, 
            name: 'Organik Köy Yumurtası (15\\'li Koli)', 
            description: 'Serbest gezen tavuklardan organik köy yumurtası', 
            price: 200.00, 
            category_id: 2, 
            image_url: '/images/eggs-15.jpg', 
            stock: 100,
            is_active: true 
          },
          { 
            id: 3, 
            name: 'Tunceli Tulum Peyniri', 
            description: 'Geleneksel yöntemlerle üretilmiş Tunceli tulum peyniri (1 kg)', 
            price: 700.00, 
            category_id: 3, 
            image_url: '/images/tulum-cheese.jpg', 
            stock: 25,
            is_active: true 
          },
          { 
            id: 4, 
            name: 'Tunceli Cevizi', 
            description: 'Doğal ortamda yetişmiş Tunceli cevizi (1 kg)', 
            price: 750.00, 
            category_id: 1, 
            image_url: '/images/walnut.jpg', 
            stock: 30,
            is_active: true 
          },
          { 
            id: 5, 
            name: 'Tunceli Tereyağı', 
            description: 'Taze sütten yapılmış doğal Tunceli tereyağı (1 kg)', 
            price: 930.00, 
            category_id: 1, 
            image_url: '/images/tunceli-butter.jpg', 
            stock: 15,
            is_active: true 
          },
          { 
            id: 6, 
            name: 'Küçükbaş Yem', 
            description: 'Koyun ve keçiler için özel formül yem', 
            price: 2500.00, 
            category_id: 4, 
            image_url: '/images/sheep-feed.jpg', 
            stock: 100,
            is_active: true 
          }
        ];
        res.status(200).json(products);
        break;
        
      case 'POST':
        const { name, description, price, category_id, image_url, stock } = req.body;
        
        // Validation
        if (!name || !price || !category_id) {
          return res.status(400).json({ error: 'Name, price, and category_id are required' });
        }
        
        // Mock database insertion
        const newProduct = {
          id: Date.now(),
          name,
          description: description || '',
          price: parseFloat(price),
          category_id: parseInt(category_id),
          image_url: image_url || '',
          stock: parseInt(stock) || 0,
          is_active: true,
          created_at: new Date().toISOString()
        };
        
        res.status(201).json(newProduct);
        break;
        
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Products API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
