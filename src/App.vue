<script>
  import LogarConta from "@/components/LogarConta.vue";
  import NovoCadastro from "@/components/NovoCadastro.vue";
  import TheHeader from "@/components/TheHeader.vue";

  export default{
    components: {
      LogarConta,
      NovoCadastro,
      TheHeader    
      },
    name: "App"
  }
</script>

<template>
  <section>
    <TheHeader />
    <main>
      <section class="container_forms">
        <logar-conta></logar-conta>
        <novo-cadastro></novo-cadastro>
      </section>
    </main>
  </section>
</template>

<style>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main{
    max-width: 1200px;
    margin: 30px auto;
  }

  .container_forms{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media(max-width: 700px){
    .container_forms{
      flex-direction: column;
    }
  }


</style>
