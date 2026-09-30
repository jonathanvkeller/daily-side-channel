import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = (await getCollection('briefings')).sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf());
  const site = new URL(import.meta.env.BASE_URL, context.site);
  return rss({
    title: 'Daily Side-Channel',
    description: 'Strange artifacts, useful collisions, creative fuel, and rabbit holes.',
    site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.summary,
      link: `briefings/${entry.id}/`
    }))
  });
}
