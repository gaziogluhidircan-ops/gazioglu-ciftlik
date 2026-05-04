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
            name: 'Şarköy Zeytinyağı (1 Litre)', 
            description: 'Şarköy yöresinden doğal sıkım zeytinyağı', 
            price: 500.00, 
            category_id: 1, 
            image_url: '/products/zeytinyagi.jpg', 
            stock: 50,
            is_active: true 
          },
          { 
            id: 2, 
            name: 'Organik Köy Yumurtası (30\\'lu Koli)', 
            description: 'Serbest gezen tavuklardan doğal organik köy yumurtası', 
            price: 350.00, 
            category_id: 2, 
            image_url: '/products/koy-yumurtasi.jpg', 
            stock: 100,
            is_active: true 
          },
          { 
            id: 7, 
            name: 'Organik Köy Yumurtası (15\\'li Koli)', 
            description: 'Serbest gezen tavuklardan doğal organik köy yumurtası', 
            price: 200.00, 
            category_id: 2, 
            image_url: '/products/koy-yumurtasi.jpg', 
            stock: 100,
            is_active: true 
          },
          { 
            id: 3, 
            name: 'Tunceli Tulum Peyniri (1 Kilo)', 
            description: 'Tunceli yöresine özgü doğal tulum peyniri', 
            price: 700.00, 
            category_id: 3, 
            image_url: '/products/tulum-peyniri.jpg', 
            stock: 25,
            is_active: true 
          },
          { 
            id: 4, 
            name: 'Tunceli Cevizi (1 Kilo)', 
            description: 'Doğal kabuklu Tunceli cevizi', 
            price: 750.00, 
            category_id: 1, 
            image_url: '/products/ceviz.jpg', 
            stock: 30,
            is_active: true 
          },
          { 
            id: 5, 
            name: 'Tunceli Tereyağı (1 Kilo)', 
            description: 'Doğal köy tereyağı', 
            price: 930.00, 
            category_id: 1, 
            image_url: '/products/tereyagi.jpg', 
            stock: 15,
            is_active: true 
          },
          { 
            id: 6, 
            name: 'Kuru Dut (1 Kilo)', 
            description: 'Güneşte kurutulmuş doğal dut', 
            price: 975.00, 
            category_id: 1, 
            image_url: '/products/kuru-dut.jpg', 
            stock: 100,
            is_active: true 
          },
          { 
            id: 8, 
            name: 'Doğal Tunceli Halvori Balı (1 Kilo)', 
            description: 'Tunceli Halvori yöresinden doğal bal', 
            price: 2600.00, 
            category_id: 1, 
            image_url: '/products/halvori-bali.jpg', 
            stock: 20,
            is_active: true 
          },
          { 
            id: 9, 
            name: 'Dut Pekmezi (1 Litre)', 
            description: 'Doğal yapım dut pekmezi', 
            price: 1400.00, 
            category_id: 1, 
            image_url: '/products/dut-pekmezi.jpg', 
            stock: 30,
            is_active: true 
          },
          { 
            id: 10, 
            name: 'Dağ Sarımsağı (1 Kilo)', 
            description: 'Doğal toplanmış dağ sarımsağı', 
            price: 1800.00, 
            category_id: 1, 
            image_url: '/products/dag-sarimsagi.jpg', 
            stock: 15,
            is_active: true 
          },
          { 
            id: 11, 
            name: 'Şarköy Sofralık Zeytin (1 Kilo)', 
            description: 'Şarköy yöresinden sofralık doğal zeytin', 
            price: 275.00, 
            category_id: 1, 
            image_url: '/products/sofralik-zeytin.jpg', 
            stock: 50,
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
