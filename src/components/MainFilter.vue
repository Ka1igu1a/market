<template>
  <div
    @click="$emit('sorting-data', sortingData)"
    class="flex text-l items-center tablet:flex-col tablet:items-start"
  >
    <span class="font-bold">Сортировать по:</span>

    <div class="flex pl-24 tablet:pl-0 tablet:pt-2">
      <MainFilterItem
        @sorting-data="sortingData = $event"
        :sortItems="priceSortItems"
        class="mr-24"
      >
        Цене
      </MainFilterItem>

      <MainFilterItem
        @sorting-data="sortingData = $event"
        :sortItems="ageSortItems"
      >
        Возрасту
      </MainFilterItem>
    </div>
  </div>
</template>

<script>
import MainFilterItem from "@/components/MainFilterItem.vue";
export default {
  components: {
    MainFilterItem,
  },
  name: "App",
  data() {
    return {
      sortingData: {},
      priceSortItems: [
        {
          sortBy: "price",
          type: "decr",
          img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" /></svg>',
          title: "Дороже",
        },
        {
          sortBy: "price",
          type: "incr",
          img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>',
          title: "Дешевле",
        },
      ],
      ageSortItems: [
        {
          sortBy: "age",
          type: "decr",
          img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>',
          title: "Старше",
        },
        {
          sortBy: "age",
          type: "incr",
          img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" /></svg>',
          title: "Младше",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
