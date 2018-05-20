import sitemap from '../node_modules/sitemap';

const buildSitemap = (hostname = 'http://localhost:3000', paths = []) => {
    return sitemap.createSitemap({
                                     hostname,
                                     urls: paths.map(item => ({ url: item.path })),
                                 });

};

export default buildSitemap;