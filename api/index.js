// Entry to server only api.
import router from 'rill'
import controllers from './controllers'

export default router().use(controllers)
