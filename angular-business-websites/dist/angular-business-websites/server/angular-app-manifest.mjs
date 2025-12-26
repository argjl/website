
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/lead-automation"
  },
  {
    "renderMode": 2,
    "route": "/website-development"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2537, hash: '775c678b55874fca17c65a4d9663d7c83bf2977619b9bc5585d8f1f6997c15bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: '10a78d838b52c6dc482b7c4c6fa9c7b0b3a39168dc093c42f365d1711e0013fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12976, hash: '88fe7b3b71e9012c0ffbcb733418427c43c5a69178ae78e939f30d556c6d9e20', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lead-automation/index.html': {size: 20514, hash: 'fe3d0684a4feb6e0f920b8302a72fa5d3e83eaa2e71a0845334ed7a977c34710', text: () => import('./assets-chunks/lead-automation_index_html.mjs').then(m => m.default)},
    'website-development/index.html': {size: 11945, hash: '2499a5c71f1555d2173905d6f69fb102fbe506a70e610fe699290975bf38c7be', text: () => import('./assets-chunks/website-development_index_html.mjs').then(m => m.default)},
    'styles-H6FRPQ4R.css': {size: 4227, hash: 'MAZm0oBsH/I', text: () => import('./assets-chunks/styles-H6FRPQ4R_css.mjs').then(m => m.default)}
  },
};
