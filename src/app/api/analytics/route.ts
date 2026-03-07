import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env';

/**
 * Analytics API Routes
 * Proxies requests to the backend API Gateway
 */

// GET /api/analytics - Get user analytics
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || 'week';
    
    const response = await fetch(`${env.NEXT_PUBLIC_API_GATEWAY_URL}/api/analytics?period=${period}`, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': request.headers.get('cookie') || '',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch analytics' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
