
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-5EHJOG5T.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 17035, hash: '99323865c2d2106e5ebf3b3a2eb7534a2bbb3965910bc4c19a455f88f7b4f81e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17198, hash: '0a7527d91c900bd61f654281e3f85ff73f4753335f81f061067fb97deda88fd8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GVFAF53N.css': {size: 13285, hash: 'tXPgHVRR0e0', text: () => import('./assets-chunks/styles-GVFAF53N_css.mjs').then(m => m.default)}
  },
};
