<template>
    <div>

        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 
                        v-text="publication.title"
                        class="fw-light"
                    ></h1>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">

                    <small> 
                    <p
                        v-text="publication.id"
                        class="text-muted"
                    ></p>
                    </small>

                    <p 
                        v-text="publication.excerpt"
                    ></p>
                    <div
                        v-html="publication.body"
                    ></div>

                    <hr>

                    <h3>Otras publicaciones</h3>
                    <!-- Componente de publicaciones -->
                    <publications />
                    
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default{
        props: ['slug'],
        data(){
            return {
                publication: {},
            };
        },
        created(){
            //Conectar al servidor y llena las variables
            let url = 'http://localhost/laravel_vue/public/api/publication/' + this.slug;

            axios.get(url)
            .then(response => {
                this.publication = response.data
            })
        }
    }
</script>