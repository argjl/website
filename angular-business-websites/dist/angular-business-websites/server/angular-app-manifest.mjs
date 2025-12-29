
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
    'index.csr.html': {size: 2688, hash: 'b06955f542306842e14098e053be8aaf89086e418e0d384d708c870bada912d4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1103, hash: '6a5308f5946879978b992ebab4cec3d86261b100639e00132ef7c65e0f5f9ef5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'lead-automation/index.html': {size: 21616, hash: 'ccf9ae3c46c203c63343db82cdfc9586df24f5999d4b8d044170449cbfb566fc', text: () => import('./assets-chunks/lead-automation_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15916, hash: '46072afa649bfa0bae109a454a08b9f2361af45400bce0726c948490cc019246', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'website-development/index.html': {size: 13249, hash: '483b03ba0cb52281b1c51cd2a0de8a560d1394937d2c25341f7f1fac44e9710c', text: () => import('./assets-chunks/website-development_index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 5460, hash: 'dc78e6117b1cc8dae7c9bd8ed781fce7436715e3abe0d73cb3a49e7e31f5da2e', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'styles-H6FRPQ4R.css': {size: 4227, hash: 'MAZm0oBsH/I', text: () => import('./assets-chunks/styles-H6FRPQ4R_css.mjs').then(m => m.default)}
  },
};
