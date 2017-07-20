import router from 'rill'
import * as profileCtrl from './profile'

export default router().get('/profile/view', profileCtrl.view)
