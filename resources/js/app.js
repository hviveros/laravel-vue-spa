import './bootstrap';

import { createApp } from 'vue'; // 'vue', configurar el alias en vite.config.js

// app -> Plantilla raíz, contendrá la navegación y el contenido
import App              from './components/AppComponent.vue';
import Publications     from './components/PublicationsComponent.vue';
import InfiniteLoading  from 'v3-infinite-loading';
import { router }       from './routes';

const app = createApp({});

app.use(router);
app.component('Publications', Publications);
app.component('InfiniteLoading', InfiniteLoading);
app.mount('#app', App);