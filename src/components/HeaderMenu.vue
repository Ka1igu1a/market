<template>
  <div>
    <ul class="flex text-l justify-around w-full laptop:hidden">
      <template v-for="item in menuItems" :key="item.id">
        <li
          role="menuitem"
        >
          <a
            :href="isCurrentPage(item.title)"
            class="py-6 px-20 inline-block rounded select-none hover:bg-white hover:text-dark"
            :class="[item.title === activeItem ? 'active': 'disabled']"
            >{{ item.title }}</a
          >
        </li>
      </template>
    </ul>
    <button class="hidden laptop:flex self-stretch">
      <svg class="h-20" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      activeItem: "Gallery",
      menuItems: [
        { title: "Main" },
        { title: "Gallery" },
        { title: "News" },
        { title: "Profile" },
      ],
    };
  },
  methods: {
    isCurrentPage(page) {
      if(this.activeItem === page) {
        return '#'
      } else {
        return 
      }
    }
  }
};
</script>

<style lang="sass" scoped>
li
  &:last-child
    margin: 0
.active
  @apply font-bold bg-white text-dark
.disabled
  @apply cursor-not-allowed
</style>
