<script>
// import { useStore } from 'vuex';

export default{
    name: "LogarConta",
    data(){
        return{
            login: {
                email: "",
                senha: ""
            }
        }
    },  
    methods:{
        logar(){
            this.$router.push("/usuario")
        }
    },
    // setup(){
    //     const store = useStore();

    //     return{
    //         store,
    //         logar: () => store.dispatch("getUsuario", this.login.email)
    //         }
    //     },  
    }
</script>

<template>
    <section class="login">
        <h2>ACESSE SUA CONTA</h2>
        <form>
            <input type="email" name="email" placeholder="E-mail" v-model="login.email">
            <input type="password" name="password" placeholder="Senha" v-model="login.senha">
            <button @click.prevent="logar">Entrar</button>
        </form>
    </section>
</template>


<style>
    .login{
        padding: 2rem;
        width: 600px;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .login h2{
        position: relative;
        left: 40px;
        font-size: .7rem;
        color: #1c1c1c;
        font-weight: bolder;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        margin-bottom: 30px;
        width: 85%;
        height: 2.2rem;
        padding: .8rem;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 1px 1px 1px rgba(0, 58, 92, .4);
        font-size: .8rem;
        color: rgb(70, 70, 70);
        transition: .3s all;
    }
    
     input:hover, input:focus{
        outline: none;
        box-shadow: 0px 2px 3px 1px rgba(0, 58, 92, .5);
    }

    button{
        background: #003a5c;
        color: white;
        width: 85%;
        height: 2.2rem;
        padding: .8rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bolder;
        font-size: .8rem;
        box-shadow: 0px 1px 2px 2px rgba(0, 58, 92, .1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:active{
        box-shadow: 0px 1px 5px 6px rgba(0, 58, 92, .1);
    }

    @media(max-width: 600px){
        .login{
        width: 100%;
    }
    }
</style>