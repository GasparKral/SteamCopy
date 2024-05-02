export const res = (
    body: string,
    {
        status,
        statusText,
        headers,
    }: {
        status?: number;
        statusText?: string;
        headers?: Record<string, string>;
    }
) => new Response(body, { status, statusText, headers });
