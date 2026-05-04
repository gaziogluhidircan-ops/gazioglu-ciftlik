// Vercel Serverless Function for Orders API
export default async function handler(req, res) {
  // D1 database connection (simulated for now)
  // In production, this would connect to your actual D1 database

  try {
    switch (req.method) {
      case 'GET':
        // Mock orders data
        const orders = [
          {
            id: 1,
            order_number: 'GC-2024-001',
            customer_name: 'Hıdır Can Gazioğlu',
            customer_email: 'canhidir@example.com',
            customer_phone: '0555 123 4567',
            shipping_address: 'İstanbul, Göktürk',
            total_amount: 143.25,
            status: 'confirmed',
            payment_method: 'credit_card',
            payment_status: 'paid',
            notes: 'Kapı önüne bırakınız',
            created_at: '2024-04-28T10:30:00Z',
            items: [
              { product_id: 1, product_name: 'Şarköy Zeytin Yağı', quantity: 2, unit_price: 500.00, total_price: 1000.00 },
              { product_id: 2, product_name: 'Organik Köy Yumurtası (30\\'lu Koli)', quantity: 1, unit_price: 350.00, total_price: 350.00 },
              { product_id: 3, product_name: 'Tunceli Tulum Peyniri', quantity: 1, unit_price: 700.00, total_price: 700.00 }
            ]
          }
        ];
        res.status(200).json(orders);
        break;

      case 'POST':
        const {
          customer_name,
          customer_email,
          customer_phone,
          shipping_address,
          items,
          payment_method
        } = req.body;

        // Validation
        if (!customer_name || !customer_email || !items || items.length === 0) {
          return res.status(400).json({ error: 'Customer name, email, and items are required' });
        }

        // Calculate total amount
        const total_amount = items.reduce((sum, item) =>
          sum + (item.unit_price * item.quantity), 0
        );

        // Generate order number
        const order_number = `GC-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`;

        // Mock database insertion
        const newOrder = {
          id: Date.now(),
          order_number,
          customer_name,
          customer_email,
          customer_phone: customer_phone || '',
          shipping_address: shipping_address || '',
          total_amount,
          status: 'pending',
          payment_method: payment_method || 'cash',
          payment_status: 'pending',
          notes: '',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };

        res.status(201).json(newOrder);
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Orders API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
