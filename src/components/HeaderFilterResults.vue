<template>
  <div class="flex justify-between items-center">
    <div class="text-3xl font-bold pt-16 pb-24 ">
      Найдено <span class="text-blue-primary">{{ cardsLength }} котов </span>
    </div>
    <div class="text-3xl flex items-center">
      {{favoriteAmount}}
      <span class="text-red-sale ml-4">
        <svg
          class="w-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardsLength: {
      type: Number,
    },
    favoriteAmount: {
      type: Number,
      default: 0,
    }
  },
  name: "App",
};
</script>

<style lang="sass" scoped></style>
