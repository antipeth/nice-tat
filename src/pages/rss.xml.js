import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: '春风少年兄',
    description: '你在世纪大道东门。',
    stylesheet: '/rss/pretty-feed-v3.xsl',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}