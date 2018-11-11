import sitemap from 'sitemap';

const buildSitemap = (hostname = 'http://localhost', paths = []) => {
  return sitemap.createSitemap({
    hostname,
    urls: paths.map(item => ({ url: item.path })),
  });

};

export default buildSitemap;
