import './bootstrap';

import { createApp } from 'vue'; // 'vue', configurar el alias en vite.config.js

import Publications from './components/PublicationsComponent.vue';
import InfiniteLoading from 'v3-infinite-loading';

const app = createApp({});

app.component('Publications', Publications);
app.component('InfiniteLoading', InfiniteLoading);

app.mount('#app');