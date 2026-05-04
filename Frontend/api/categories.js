// Vercel Serverless Function for Categories API
export default async function handler(req, res) {
  // D1 database connection (simulated for now)
  // In production, this would connect to your actual D1 database
  
  try {
    switch (req.method) {
      case 'GET':
        // Mock data for testing
        const categories = [
          { id: 1, name: 'Yöresel Lezzetler', description: 'Tunceli ve Şarköy yöresinden doğal ürünler', image_url: '/products/ceviz.jpg' },
          { id: 2, name: 'Organik Yumurta', description: 'Serbest gezen tavuklardan organik yumurtalar', image_url: '/products/koy-yumurtasi.jpg' },
          { id: 3, name: 'Peynir Çeşitleri', description: 'Geleneksel yöntemlerle üretilmiş yöresel peynirler', image_url: '/products/tulum-peyniri.jpg' },
          { id: 4, name: 'Zeytin & Zeytinyağı', description: 'Doğal sıkım zeytinyağı ve sofralık zeytin', image_url: '/products/zeytinyagi.jpg' }
        ];
        res.status(200).json(categories);
        break;
        
      case 'POST':
        const { name, description, image_url } = req.body;
        
        // Validation
        if (!name) {
          return res.status(400).json({ error: 'Category name is required' });
        }
        
        // Mock database insertion
        const newCategory = {
          id: Date.now(),
          name,
          description: description || '',
          image_url: image_url || '',
          created_at: new Date().toISOString()
        };
        
        res.status(201).json(newCategory);
        break;
        
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Categories API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
