import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env';

/**
 * Study Materials API Routes
 * Proxies requests to the backend API Gateway
 */

// GET /api/study - List all study materials
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const subject = searchParams.get('subject');
    const difficulty = searchParams.get('difficulty');
    
    // Build query string
    const queryParams = new URLSearchParams();
    if (subject) queryParams.set('subject', subject);
    if (difficulty) queryParams.set('difficulty', difficulty);
    
    const queryString = queryParams.toString();
    const url = `${env.NEXT_PUBLIC_API_GATEWAY_URL}/api/study${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': request.headers.get('cookie') || '',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch study materials' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Study materials error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/study - Create new study material
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${env.NEXT_PUBLIC_API_GATEWAY_URL}/api/study`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': request.headers.get('cookie') || '',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: 'Failed to create study material', details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Create study material error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
