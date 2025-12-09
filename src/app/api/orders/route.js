import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';

// GET /api/orders - Get orders for current user
export async function GET(request) {
    try {
        await dbConnect();

        // TODO: Add authentication check
        // const session = await getServerSession(authOptions);
        // if (!session) {
        //   return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        // }

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');
        const status = searchParams.get('status');
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;

        let query = {};
        if (userId) query.user = userId;
        if (status) query.orderStatus = status;

        const skip = (page - 1) * limit;

        const [orders, total] = await Promise.all([
            Order.find(query)
                .populate('items.product', 'name images')
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            Order.countDocuments(query),
        ]);

        return NextResponse.json({
            success: true,
            orders,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch orders' },
            { status: 500 }
        );
    }
}

// POST /api/orders - Create new order
export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();

        const order = await Order.create(body);

        // TODO: Send order confirmation email
        // TODO: Update product stock

        return NextResponse.json({
            success: true,
            order,
            message: 'Order placed successfully',
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}
