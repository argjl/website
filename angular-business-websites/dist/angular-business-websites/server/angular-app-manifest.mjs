
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
  },
  {
    "renderMode": 2,
    "route": "/privacy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2679, hash: '3e6a87db3d839529e197c7f220fa75ae012cfc3439fceddecec3085f618a3ae3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1094, hash: 'ebffd43a65f53dd291f2873a17d7a3e499d791e847bcd338cd826b02c8f0b13e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15573, hash: '0694fb689dbd2eb2daec038921ed9e6566e6e17ead53ccf8dbba3c138172f49b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'website-development/index.html': {size: 12042, hash: '20d6379e5cf7e36166e92f3e62e6e67a48e8f18e48712782ef609f1cafe00607', text: () => import('./assets-chunks/website-development_index_html.mjs').then(m => m.default)},
    'lead-automation/index.html': {size: 20656, hash: '79d60685d393e7431a949f2791b95289c06e674cd8d98e4e3e55138e79d1dc99', text: () => import('./assets-chunks/lead-automation_index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 4253, hash: 'dcc25dea78a3d9dbcf5b2ec390d1d39445538773464acfe5e4c590a207b94a69', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'styles-H6FRPQ4R.css': {size: 4227, hash: 'MAZm0oBsH/I', text: () => import('./assets-chunks/styles-H6FRPQ4R_css.mjs').then(m => m.default)}
  },
};
