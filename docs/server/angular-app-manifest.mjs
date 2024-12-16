
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.html', {size: 6365, hash: 'e95264a3b8a2c86b834e986050a2c678edc268942de30cd555cd161b35c7cbc4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 2085, hash: 'a6d10998055273ea3da33c11fb4396375b26e4d955ce11927ad8bd6d25ff6a51', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-MUK7Q3PC.css', {size: 327027, hash: 'jqszwmf5GB4', text: () => import('./assets-chunks/styles-MUK7Q3PC_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
