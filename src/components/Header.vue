<template>
  <div class="bg-dark w-full">
    <div class="container px-52 max-w-main pt-16 text-white">
      <div class="flex items-center justify-between">
        <HeaderLogo />
        <HeaderMenu class="laptop:order-last"/>
        <HeaderContacts class="" />
      </div>
      <div>
        <HeaderFilterResults :cardsLength="cardsLength" :favoriteAmount="favoriteAmount"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/HeaderLogo.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import HeaderContacts from "@/components/HeaderContacts.vue";
import HeaderFilterResults from "@/components/HeaderFilterResults.vue";

export default {
  components: {
    HeaderLogo,
    HeaderMenu,
    HeaderContacts,
    HeaderFilterResults,
  },
  props: {
    cardsLength: {
      type: Number,
    },
    favoriteAmount: {
      type: Number
    }
  },
  name: "Header",
};
</script>

<style lang="sass" scoped></style>
