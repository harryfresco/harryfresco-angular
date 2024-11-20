
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/harryfresco-angular"
  }
],
  assets: new Map([
['index.csr.html', {size: 5375, hash: 'cb06280d155738f716f12833db0c071d9f4b4142416cc79172384091282ac2d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1125, hash: 'ae6954ee9a4af029d5ec5d7948fa54ffa4995943ec454f4c79b30fe6374f7e2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 20651, hash: '547052a8c561c8b191e08d17a1e21880b7f0af78e8786f27161f49f51b523687', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-YSZDR4PV.css', {size: 312537, hash: 'rTaopxAJbGk', text: () => import('./assets-chunks/styles-YSZDR4PV_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
