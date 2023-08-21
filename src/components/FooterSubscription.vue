<template>
  <div>
    <div class="flex h-24 text-s">
      <input
        class="
          placeholder-dark
          pl-12
          pt-8
          pb-9
          rounded-2xl
          focus:outline-none focus:ring-2 focus:ring-blue-primary
          mr-6
        "
        type="email"
        name=""
        id=""
        placeholder="Email"
      />
      <button
        class="text-white font-bold rounded-2xl bg-blue-primary py-8 px-28"
      >
        Подписаться
      </button>
    </div>
    <AppCheckbox class="mt-6" />
  </div>
</template>

<script>
import AppCheckbox from "@/components/AppCheckbox.vue";
export default {
  components: {
    AppCheckbox,
  },
  name: "App",
};
</script>

<style lang="sass" scoped></style>
