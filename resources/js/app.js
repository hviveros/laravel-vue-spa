import './bootstrap';

import { createApp } from 'vue'; // 'vue', configurar el alias en vite.config.js

import Publications from './components/PublicationsComponent.vue';

createApp(Publications).mount('#app');