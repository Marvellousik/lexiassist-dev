import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env';

/**
 * GET /api/auth/me
 * Proxies to backend to get current user info
 * Used by the frontend to check authentication status
 */
export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${env.NEXT_PUBLIC_API_GATEWAY_URL}/api/auth/me`, {
      headers: {
        'Content-Type': 'application/json',
        // Forward the session cookie
        'Cookie': request.headers.get('cookie') || '',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }
      throw new Error(`Backend error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Auth me error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}
