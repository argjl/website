
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
    'index.csr.html': {size: 2537, hash: 'c17a4d112ded6132c804761b11c6bd7e6cb7f412079277294a1077ca74d36385', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: 'e74edf2081d4ab651ca72c2e3e99d4b2af6f595c2673cbd0cb88cd00ae46eb4c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'website-development/index.html': {size: 11900, hash: 'eb9d684a5127b5af6d082eef33eec110de625e319454ad9a722829207f2838dd', text: () => import('./assets-chunks/website-development_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13073, hash: 'c72c2087e5c84708312cf5d8b61d9bba3930877462cf380ca45b9cfcc5b8783e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 4111, hash: '23bbd9610361cd986a71c48a2fc24a5f3c75413aa84c449447036e011702069f', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'lead-automation/index.html': {size: 20514, hash: '7fc9aff373d4f00187be6a8edcf9eb793f6d551d6c244f9a210c8fbf42b67bf2', text: () => import('./assets-chunks/lead-automation_index_html.mjs').then(m => m.default)},
    'styles-H6FRPQ4R.css': {size: 4227, hash: 'MAZm0oBsH/I', text: () => import('./assets-chunks/styles-H6FRPQ4R_css.mjs').then(m => m.default)}
  },
};
