<template>
  <div class="max-w-main">
    <a href="#" v-if="scroll" class="fixed bottom-0 right-0 mr-36 mb-24">
      <span
        class="
          flex
          items-center
          justify-center
          w-24
          h-24
          bg-blue-primary
          text-white
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12"
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
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      scroll: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="sass" scoped></style>
