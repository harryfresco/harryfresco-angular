
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/analogue/june22"
  },
  {
    "renderMode": 2,
    "route": "/analogue/jan23"
  },
  {
    "renderMode": 2,
    "route": "/analogue/may23"
  },
  {
    "renderMode": 2,
    "route": "/analogue/aug23"
  },
  {
    "renderMode": 2,
    "route": "/analogue/june24"
  },
  {
    "renderMode": 2,
    "route": "/landing"
  },
  {
    "renderMode": 2,
    "route": "/choose"
  },
  {
    "renderMode": 2,
    "route": "/digital/wizard"
  },
  {
    "renderMode": 2,
    "route": "/digital/june24d"
  },
  {
    "renderMode": 2,
    "route": "/digital/japan"
  },
  {
    "renderMode": 2,
    "route": "/digital/sky"
  },
  {
    "renderMode": 2,
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "redirectTo": "/landing",
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 5435, hash: '249490568a2ae7bb112dea6f49548404d5c20ab69b24abed918740912b9246fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1155, hash: 'd2b161677bda69a3fae44935c67896205fdea99fde22eab9c734de9d7d488892', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['analogue/june22/index.html', {size: 24320, hash: '37b75a67b4e1642cf3fb41e28dd41f9cd5e925480baf171daaec35fcf63dfb3b', text: () => import('./assets-chunks/analogue_june22_index_html.mjs').then(m => m.default)}], 
['analogue/jan23/index.html', {size: 24375, hash: '1d31686afd717b676a4e7c4b7a12b442080acc459f03aa6c4deb750093e33832', text: () => import('./assets-chunks/analogue_jan23_index_html.mjs').then(m => m.default)}], 
['analogue/may23/index.html', {size: 24100, hash: 'fd000c8099c94539e29cb391d9ad3009946b6ac06a295c4b1eac9e0d1d35e136', text: () => import('./assets-chunks/analogue_may23_index_html.mjs').then(m => m.default)}], 
['analogue/june24/index.html', {size: 24771, hash: 'c276b32fb55d3c84e85596a2a8169f2c4aaa520c18ebf2b795b621a16564129b', text: () => import('./assets-chunks/analogue_june24_index_html.mjs').then(m => m.default)}], 
['analogue/aug23/index.html', {size: 24144, hash: 'd26c8ef08e4907455864d195522aed5edb0e9d8248b62a8345e859b972eef16d', text: () => import('./assets-chunks/analogue_aug23_index_html.mjs').then(m => m.default)}], 
['landing/index.html', {size: 10378, hash: '1bdad767d74bc3be32fbe5f61bb592fb942d5b9738b65c7127d1db2fce0479c7', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)}], 
['choose/index.html', {size: 11578, hash: '411df6717e9c674870ded783d462531e3c4e67707ca5836842cabb257ad59121', text: () => import('./assets-chunks/choose_index_html.mjs').then(m => m.default)}], 
['digital/wizard/index.html', {size: 22814, hash: '85f990b6652bb073dcd1ab44ed5cdc4269f433afafd11dbcfd14f1d891cb9158', text: () => import('./assets-chunks/digital_wizard_index_html.mjs').then(m => m.default)}], 
['digital/japan/index.html', {size: 24914, hash: '48f821207ac6ed5a1da21db367929b901be47827148f53e617f9865a04f94a59', text: () => import('./assets-chunks/digital_japan_index_html.mjs').then(m => m.default)}], 
['digital/june24d/index.html', {size: 23150, hash: 'd52c9c4cc3a0c540040f626ab68d9ce4a78a02c059015429d883a5ac600872dd', text: () => import('./assets-chunks/digital_june24d_index_html.mjs').then(m => m.default)}], 
['digital/sky/index.html', {size: 22798, hash: 'fb83b9a446373dceef642cf29cfa74cc29c9db4d7e6b069551bda310c9b0a700', text: () => import('./assets-chunks/digital_sky_index_html.mjs').then(m => m.default)}], 
['gallery/index.html', {size: 17482, hash: '41e5fdf14ea08e281d6316ecfdc37d80c5aa8a281cd4385028e71258b2536ed0', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)}], 
['styles-NE7GDVQQ.css', {size: 325835, hash: 'opnWluTZUCE', text: () => import('./assets-chunks/styles-NE7GDVQQ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
