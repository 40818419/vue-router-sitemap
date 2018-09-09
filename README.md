# vue-router-sitemap
Generate sitemap.xml by vue-router configuration

## Install

`npm i --save vue-router-sitemap`

## Example usage

```js
import VueRouterSitemap      from 'vue-router-sitemap';
import path                  from 'path';
import { router }            from 'router';

...
export const sitemapMiddleware = () => {
  return (req, res) => {
    res.set('Content-Type', 'application/xml');

    const staticSitemap = path.resolve('dist/static', 'sitemap.xml');
    const filterConfig = {
      isValid: false,
      rules: [
        /\/example-page/,
        /\*/,
      ],
    };

    new VueRouterSitemap(router).filterPaths(filterConfig).build('http://example.com').save(staticSitemap);

    return res.sendFile(staticSitemap);
  };
};

app.get('/sitemap.xml', sitemapMiddleware());
...
```