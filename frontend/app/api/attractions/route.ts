import { NextResponse } from 'next/server';
import { apiClient } from '@/lib/api/client';

export async function GET() {
  try {
    const response = await apiClient.get('/attractions');
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch attractions' },
      { status: 500 }
    );
  }
}
