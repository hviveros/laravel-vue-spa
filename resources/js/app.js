import './bootstrap';

import { createApp } from 'vue'; // 'vue', configurar el alias en vite.config.js


// app -> Plantilla raíz, contendrá la navegación y el contenido
import App              from './components/AppComponent.vue';
import Publications     from './components/PublicationsComponent.vue';
import router           from './routes';
import InfiniteLoading  from 'v3-infinite-loading';

const app = createApp(App);

app.component('Publications', Publications);
app.component('InfiniteLoading', InfiniteLoading);

app.use(router);
app.mount('#app');