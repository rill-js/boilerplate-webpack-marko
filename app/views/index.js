import router from 'rill'
import page from '@rill/page'
import render from '@rill/marko'
import homePage from './home.marko'
import otherPage from './other.marko'
import notFound from './404.marko'

export default router()
  .get(page
    .html({ lang: 'en' })
    .title('Marko BoilerPlate')
    .link({ rel: 'stylesheet', href: '/index.css' })
    .script({ async: true, src: '/polyfill.js' })
    .script({ async: true, src: '/index.js' })
  )
  .use(({ locals, req }, next) => {
    locals.pathname = req.pathname
    locals.query = req.query
    return next()
  })
  .get('/', render(homePage))
  .get('/other', render(otherPage))
  .get(render(notFound))
