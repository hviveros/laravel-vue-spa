<template>
    <div>
        <header data-bs-theme="dark">
            <div class="collapse text-bg-dark" id="navbarHeader">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-md-7 py-4">
                            <h4>SPA con Laravel y Vue</h4>
                            <p class="text-body-secondary">Curso básico para entender esta tecnología</p>
                        </div>
                        <div class="col-sm-4 offset-md-1 py-4">
                            <h4>Navegación</h4>
                            <ul class="list-unstyled">
                                <!-- Propiedades propias de vue-router -->
                                <li><router-link :to="{name:'home'}" class="text-white">Home</router-link></li>
                                <li><router-link :to="{name:'blog'}" class="text-white">Blog</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a href="#" class="navbar-brand d-flex align-items-center">
                        <strong>DevWeb</strong>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>

        <h1>hola</h1>

        <!-- El contenido se va visualizar aquí, aplicamos un poco de transiciones -->
        <router-view />     

    </div>
</template>