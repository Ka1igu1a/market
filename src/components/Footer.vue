<template>
  <div class="bg-dark w-full">
    <div class="flex justify-around max-w-main py-32 px-52 m-auto laptop:px-24">
      <FooterDescription />
      <FooterSubscription />
    </div>
  </div>
</template>

<script>
import FooterDescription from "@/components/FooterDescription.vue";
import FooterSubscription from "@/components/FooterSubscription.vue";

export default {
  components: {
    FooterDescription,
    FooterSubscription,
  },
  name: "App",
};
</script>

<style lang="sass" scoped></style>
