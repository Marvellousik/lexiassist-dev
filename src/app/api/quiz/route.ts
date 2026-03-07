import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env';

/**
 * Quiz API Routes
 * Proxies requests to the backend API Gateway
 */

// GET /api/quiz - List all quizzes
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const response = await fetch(`${env.NEXT_PUBLIC_API_GATEWAY_URL}/api/quiz?${searchParams.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': request.headers.get('cookie') || '',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch quizzes' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Quiz fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/quiz - Create new quiz or submit attempt
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${env.NEXT_PUBLIC_API_GATEWAY_URL}/api/quiz`, {
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
        { error: 'Failed to process quiz request', details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Quiz POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
