import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const authorization = req.headers.get('authorization');
    if (!authorization) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const response = await fetch('https://api.cloud.llamaindex.ai/api/v1/projects/current', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': authorization,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({ error: `Failed to fetch from LlamaCloud: ${errorText}` }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
} 
