import ms from 'ms'
import router from 'rill'
import helmet from '@rill/helmet'
import fresh from '@rill/fresh'
import etag from '@rill/etag'
import compress from '@rill/compress'
import polyfill from '@rill/polyfill'
import serve from '@rill/static'
import progress from '@rill/progress'
import logger from '@rill/logger'
import expose from '@rill/expose'
import body from '@rill/body'
import apiCtrls from '../api'
import appCtrls from './controllers'
import views from './views'

export default router()
  .use(helmet(global.SECURITY))
  .use(fresh())
  .use(etag())
  .use(compress())
  .get('/polyfill.js', polyfill())
  .get(serve('build/public', { gzip: true, cache: `${ms('30 days')}; immutable` }))
  .use(progress({ spinner: false, color: '#009fe2' }))
  .use(logger())
  .use(expose())
  .use(body())
  .at('/api/*', !process.browser && apiCtrls)
  .at('/app/*', appCtrls)
  .get(views)
  .listen({ port: 8081 })
