<script>
    export default{
        name: "NovoCadastro",
        computed: {
            nome: {
                // get(){
                //     return this.$store.state.usuario.nome
                // },
                set(value){
                    this.$store.commit("UPDATE_USUARIO", {nome: value})
                }
            }
        }
    }
</script>

<template>
    <section class="login_register">
        <h2>AINDA NÃO TEM SUA CONTA? CADASTRE-SE AQUI, É RÁPIDO E FÁCIL ;)</h2>
        <form>
            <input type="text" name="nome" placeholder="Nome do Usuário" v-model="nome">
            <input type="email" name="email" placeholder="E-mail">
            <input type="password" name="password" placeholder="Senha">
            <button>Cadastrar</button>
        </form>
    </section>
</template>

<style>
    .login_register{
        background: #91d8f7;
        width: 500px;
        height: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 2rem 2rem;
        border-radius: 5px;
    }

    .login_register h2{
        position: relative;
        left: 35px;
        font-size: .7rem;
        color: #1c1c1c;
        font-weight: bolder;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    @media(max-width: 995px){
        .login_register h2{
            width: 80%;
        }
    }

    @media(max-width: 600px){
        .login_register{
        width: 100%;
        }
    }
</style>