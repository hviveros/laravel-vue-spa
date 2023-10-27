<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                
                <!-- ciclo for de Vue -->
                <div class="card my-3" v-for="item in list">
                    <a 
                        v-bind:href="item.slug"
                        v-text="item.title"
                        class="card-header"
                    ></a>
                    <div class="card-body">
                        <p class="text-muted"><small>Id: {{ item.id }}</small></p>
                        <p
                            v-text="item.body"
                            class="cart-text"
                        ></p>
                    </div>
                </div>

                <!-- Componente externo de Vue -->
                <!-- @infinite -> referencia de la librería que escucha un evento v-on -->
                <infinite-loading @infinite="infiniteHandler">
                    <!-- Traducir algunos textos de esta librería -->
                    <template #complete>No más resultados</template>
                    <template #spinner>Cargando...</template>
                </infinite-loading>

            </div>
        </div>
    </div>
</template>

<script>
    export default{
        mounted(){
            console.log('Component mounted.')
        },
        data(){
            return {
                list: [],
                page: 0
            };
        },
        methods: {
            infiniteHandler($state){
                //Conectar al servidor y llena las variables
                this.page++;
                let url = 'http://localhost/laravel_vue/public/api/publications?page=' + this.page;

                axios.get(url)
                .then(response => {
                    let publications = response.data.data
                    
                    if (publications.length) {
                        this.list = this.list.concat(publications);
                        // eventos de la librería
                        $state.loaded();
                    } else {
                        // eventos de la librería
                        $state.complete();
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>










<!-- <template>
    <h2>Hello World, from component Publications with Vue.js 3 -</h2>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style> -->