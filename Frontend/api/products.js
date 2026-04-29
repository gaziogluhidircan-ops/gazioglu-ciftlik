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
            name: 'Taze Tam Yağlı Süt', 
            description: 'Günlük sağılan taze inek sütü, tam yağlı ve doğal', 
            price: 25.50, 
            category_id: 1, 
            image_url: '/images/milk.jpg', 
            stock: 50,
            is_active: true 
          },
          { 
            id: 2, 
            name: 'Organik Çiftlik Yumurtası', 
            description: 'Serbest gezen tavuklardan organik yumurtalar', 
            price: 18.75, 
            category_id: 2, 
            image_url: '/images/eggs.jpg', 
            stock: 100,
            is_active: true 
          },
          { 
            id: 3, 
            name: 'Taze Beyaz Peynir', 
            description: 'Geleneksel yöntemlerle üretilmiş taze beyaz peynir', 
            price: 85.00, 
            category_id: 3, 
            image_url: '/images/white-cheese.jpg', 
            stock: 25,
            is_active: true 
          },
          { 
            id: 4, 
            name: 'Koyun Yoğurdu', 
            description: 'Doğal koyun sütünden yapılmış yoğurt', 
            price: 45.00, 
            category_id: 1, 
            image_url: '/images/yogurt.jpg', 
            stock: 30,
            is_active: true 
          },
          { 
            id: 5, 
            name: 'Tereyağı', 
            description: 'Taze sütten yapılmış doğal tereyağı', 
            price: 120.00, 
            category_id: 1, 
            image_url: '/images/butter.jpg', 
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
