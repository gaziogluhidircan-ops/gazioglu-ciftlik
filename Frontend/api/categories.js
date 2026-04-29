// Vercel Serverless Function for Categories API
export default async function handler(req, res) {
  // D1 database connection (simulated for now)
  // In production, this would connect to your actual D1 database
  
  try {
    switch (req.method) {
      case 'GET':
        // Mock data for testing
        const categories = [
          { id: 1, name: 'Süt Ürünleri', description: 'Taze süt ve süt ürünleri', image_url: '/images/dairy.jpg' },
          { id: 2, name: 'Yumurta', description: 'Taze çiftlik yumurtaları', image_url: '/images/eggs.jpg' },
          { id: 3, name: 'Peynir', description: 'Doğal çiftlik peynirleri', image_url: '/images/cheese.jpg' },
          { id: 4, name: 'Yem ve Saman', description: 'Hayvan yemleri ve saman çeşitleri', image_url: '/images/feed.jpg' }
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
