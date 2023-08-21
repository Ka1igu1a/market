<template>
  <main>
    <div class="container max-w-main">
      <MainFilter @sorting-data="sortData = $event" class="mt-24 mb-12" />
      <MainCards
        @toggleFavorite="toggleFavorite($event)"
        :cards="cards"
        :sortData="sortData"
      />
    </div>
  </main>
</template>

<script>
import MainCards from "@/components/MainCards.vue";
import MainFilter from "@/components/MainFilter.vue";

export default {
  components: {
    MainCards,
    MainFilter,
  },
  name: "App",
  emits: ['update:modelValue', 'getCardsLength'],
  props: {
    modelValue: {
      type: Number,
    }
  },
  data() {
    return {
      sortData: {},
      cards: [
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 23,
          paws: 4,
          price: 12500,
          onSale: false,
          saleAmount: 20,
          favorite: true,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 23,
          paws: 4,
          price: 12500,
          onSale: false,
          saleAmount: 20,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 1,
          paws: 4,
          price: 100000,
          onSale: true,
          saleAmount: 35,
          favorite: true,
          sold: false,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 1,
          paws: 4,
          price: 20000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 5,
          paws: 4,
          price: 10000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 5,
          paws: 4,
          price: 10000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 5,
          paws: 4,
          price: 10000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 5,
          paws: 4,
          price: 10000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 5,
          paws: 4,
          price: 10000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 44,
          paws: 4,
          price: 4000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },

        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 44,
          paws: 4,
          price: 4000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 44,
          paws: 4,
          price: 4000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 44,
          paws: 4,
          price: 4000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 44,
          paws: 4,
          price: 4000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 123,
          paws: 4,
          price: 4000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 123,
          paws: 4,
          price: 4000,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 123,
          paws: 4,
          price: 12030,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 123,
          paws: 4,
          price: 12030,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 123,
          paws: 4,
          price: 12030,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },

        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 123,
          paws: 4,
          price: 12030,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 12,
          paws: 4,
          price: 12030,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 12,
          paws: 4,
          price: 12030,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 12,
          paws: 4,
          price: 12030,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "jason.jpg",
          color: "Белый",
          age: 12,
          paws: 4,
          price: 12030,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 12,
          paws: 4,
          price: 55555,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
        {
          title: "Кот полосатый",
          img: "cat-2.jpg",
          color: "Белый",
          age: 12,
          paws: 4,
          price: 55555,
          onSale: false,
          saleAmount: 30,
          favorite: false,
          sold: true,
        },
      ],
    };
  },
  created() {
    this.$emit("getCardsLength", this.cards.length);
    let favoriteAmountCounter = 0
    for (let card of this.cards){
        if(card.favorite){
          favoriteAmountCounter++
        }
    };
    this.$emit("update:modelValue", favoriteAmountCounter);
  },
  methods: {
    toggleFavorite(value) {
      this.cards[value].favorite = !this.cards[value].favorite;
      let favoriteAmount = this.modelValue
      if(this.cards[value].favorite){
        favoriteAmount++
      } else{
        favoriteAmount--
      }
      this.$emit("update:modelValue", favoriteAmount);
    },
  },
};
</script>

<style lang="sass" scoped></style>
