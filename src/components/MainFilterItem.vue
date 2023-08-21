<template>
  <div
    @focus="handleFocus"
    @focusout="handleFocusOut"
    tabindex="0"
    class="select-none cursor-pointer"
  >
    <span class="flex items-center">
      <slot />
      <span class="">
        <!-- UP Arrow -->
        <svg
          v-show="isVilible"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <!-- Down Arrow -->
        <svg
          v-show="!isVilible"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </span>

    <div
      v-show="isVilible"
      class="absolute shadow-xl rounded border border-dark mt-2 bg-white "
    >
      <ul class="">
        <li
          @click="
            $emit('sorting-data', {
              sortBy: item.sortBy,
              type: item.type,
            })
          "
          v-for="item in sortItems"
          :key="item.id"
          class="flex items-center text-s py-6 px-10 hover:bg-dark hover:text-white"
        >
          <span v-html="item.img" class="w-8 h-8 mr-3"></span>
          {{ item.title }} 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    sortItems: {
      type: Array,
    },
  },
  data() {
    return {
      isVilible: false,
    };
  },
  methods: {
    handleFocus() {
      this.isVilible = true;
    },
    handleFocusOut() {
      this.isVilible = false;
    },
  },
};
</script>

<style lang="sass" scoped>
svg
  width: 30px
</style>
