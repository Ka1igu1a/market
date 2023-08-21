<template>
  <div
    class="
      grid
      gap-6
      grid-cols-3
      place-items-center
      laptop:grid-cols-2
      tablet:grid-cols-1 tablet:justify-items-center
    "
  >
    <MainCard
      v-for="(card, index) in getSortedCards.slice(0, cardsVisible)"
      :key="card.id"
      :isSold="card.sold"
      :onSale="card.onSale"
      :imgPath="getImgPath(card)"
      :isFavorite="card.favorite"
      @toggleFavorite="$emit('toggleFavorite', index)"
    >
      <template #saleAmount>
        {{ card.saleAmount }}
      </template>
      <template #title>
        {{ card.title }}
      </template>
      <template #petColor>
        {{ card.color }}
      </template>
      <template #age>
        {{ card.age }}
      </template>
      <template #paws>
        {{ card.paws }}
      </template>
      <template #price>
        {{ card.price }}
      </template>
    </MainCard>
  </div>

  <!-- Get more cards -->
  <div class="flex justify-center mt-28 mb-32">
    <button
      v-if="cardsVisible < cards.length"
      @click="cardsVisible += cardsToAdd"
      class="btn-more w-full rounded-2xl text-dark text-m font-bold border py-8"
    >
      Показать еще
    </button>
  </div>
</template>

<script>
import MainCard from "@/components/MainCard.vue";

export default {
  components: {
    MainCard,
  },
  emits: ['toggleFavorite'],
  props: {
    cards: {
      type: Array,
      require: true,
      default() {
        return [
          {
            title: "default",
            img: "",
            color: "default",
            age: 0,
            paws: 0,
            price: 0,
            onSale: false,
            saleAmount: 0,
            favorite: false,
            sold: false,
          },
        ];
      },
    },
    sortData: {
      type: Object,
    },
  },

  name: "App",
  data() {
    return {
      cardsVisible: 0,
      cardsToAdd: 5,
    };
  },
  mounted() {
    //Get Total Amount of Visible cards
    this.getCardsVisible();
  },

  methods: {
    getImgPath(card) {
      if (card.img !== "") {
        return require(`../assets/${card.img}`);
      } else {
        const res = require("../assets/placeholder.png");
        return res;
      }
    },
    getCardsVisible() {
      const cardsLength = this.cards.length;
      if (cardsLength < 3) {
        this.cardsVisible = cardsLength;
      } else {
        this.cardsVisible = 3;
      }
    },
  },
  computed: {
    getCardsBlockAmount() {
      const res = [];
      const length = Math.ceil(this.cards.length / 3);
      for (var i = 0; i < length; i++) {
        res.push(i);
      }
      return res;
    },
    getShowMoreAmount() {
      const invisibleBlocks =
        this.getCardsBlockAmount.length - this.blocksVisible;
      const invisibleCards = invisibleBlocks * 3;

      if (invisibleCards > 9) {
        return 9;
      } else if (invisibleCards <= 3) {
        return invisibleBlocks;
      } else {
        return invisibleCards;
      }
    },
    getSortedCards() {
      if (Object.keys(this.sortData).length !== 0) {
        const res = this.cards;
        const { sortBy, type } = this.sortData;

        return res.sort((a, b) => {
          const price = [a.price, b.price];
          const age = [a.age, b.age];
          let first = "";
          let second = "";

          if (sortBy === "price") {
            first = price[0];
            second = price[1];
          } else if (sortBy === "age") {
            first = age[0];
            second = age[1];
          }

          if (type === "decr") {
            if (first < second) {
              return 1;
            }
            if (first > second) {
              return -1;
            }
          } else if (type === "incr") {
            if (first > second) {
              return 1;
            }
            if (first < second) {
              return -1;
            }
          }

          return 0;
        });
      } else if (this.cards.length > 0 || this.cards != undefined) {
        return this.cards;
      }
      return [];
    },
  },
};
</script>

<style lang="sass" scoped>
.btn
  &-more
    min-width: 20rem
    max-width: 38rem
</style>
