import { getCollection } from 'astro:content';

export async function GET() {
  const entries = await getCollection('briefings');
  const data = entries.map((entry) => ({
    id: entry.id,
    haystack: [
      entry.data.title,
      entry.data.summary,
      entry.data.tags.join(' '),
      entry.body
    ].join(' ').toLowerCase()
  }));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
