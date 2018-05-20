import fs   from 'fs';
import path from 'path';

import sm from '../node_modules/sitemap';

import parseRoutes  from './routes-parser.js';
import buildSitemap from './sitemap-builder';
import splitPaths   from './path-splitter';

class VueRouterSitemap {
    constructor(router) {
        if (!router) {
            throw new Error('Need pass router in module');
        }

        this.paths = parseRoutes(router.options.routes);

        return this;
    }

    filterPaths(filterConfig) {
        return this;
    }

    applyParams(paramsConfig) {
        return this;
    }

    build(hostname = 'http://localhost', { limitCountPaths = 49999 } = {}) {
        this.hostname = hostname;
        this.splitted = splitPaths(this.paths, limitCountPaths);
        this.sitemaps = this.splitted.map(paths => buildSitemap(hostname, paths));
        return this;
    }

    save(dist, publicPath = '/') {
        const sitemapPaths = [];
        console.log('------------------------------', this.sitemaps);
        this.sitemaps.map((sitemap, index) => {
            const savePath = dist.replace('.xml', `-${index}.xml`);
            fs.writeFileSync(savePath, sitemap.toString());
            sitemapPaths.push(this.hostname + publicPath + path.basename(savePath));
        });

        const sitemapIndex = sm.buildSitemapIndex({
                                                      urls:     sitemapPaths,
                                                      hostname: this.hostname,
                                                  });
        fs.writeFileSync(dist, sitemapIndex);
        return this;
    }
}

export default VueRouterSitemap;

/*
export { default as parseRoutes }  from './routes-parser';
export { default as buildSitemap } from './sitemap-builder';
export { default as splitPaths }   from './paths-splitter';*/
