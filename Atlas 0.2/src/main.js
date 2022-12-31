import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { scrollAnimate } from './directives/Scrollanimate'

import './assets/main.css'

const app = createApp(App)

app.directive('scrollanimation', scrollAnimate)
app.use(router)



app.mount('#app')
