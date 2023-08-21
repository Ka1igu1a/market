/* eslint-disable */
<template>
  <Header :cardsLength="cardsLength" :favoriteAmount="favoriteAmount"/>
  <Main 
    @getCardsLength="this.cardsLength = $event" 
    v-model="favoriteAmount"
    />
  <AppButtonUpPage />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import AppButtonUpPage from "@/components/AppButtonUpPage.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Main,
    Footer,
    AppButtonUpPage,
  },
  name: "App",
  data() {
    return {
      cardsLength: 0,
      favoriteAmount: 0,
    };
  },
};
</script>

<style lang="sass" scoped></style>
