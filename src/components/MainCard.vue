<template>
  <div class="card">
    <!-- Image -->
    <div :style="{ backgroundImage: 'url(' + imgPath + ')' }" class="card-img">
      <!-- Wrapper -->
      <div
        :class="[onSale ? 'justify-between' : 'justify-end']"
        class="flex pt-12 px-16"
      >
        <!-- Sale -->
        <div
          v-show="onSale"
          class="
            inline-block
            place-self-center
            text-m text-white
            rounded-3xl
            bg-red-sale
            py-4
            px-8
          "
        >
          -<slot name="saleAmount"></slot>%
        </div>
        <!-- Favorite -->
        <span
          @click="$emit('toggleFavorite')"
          :class="[isFavorite ? 'text-red-sale' : 'text-white50']"
          class="cursor-pointer"
        >
          <!-- Heart -->
          <svg
            class="card-favorite"
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

    <!-- Description -->
    <div class="p-12 bg-grey text-dark">
      <!-- Title -->
      <span class="inline-block text-xl font-bold mb-8">
        <slot name="title"></slot>
      </span>
      <!-- Specifications -->
      <div
        class="
          flex
          items-center
          justify-between
          border-l-2 border-blue-primary
          text-xs
          mb-8
        "
      >
        <span class="ml-6">
          Окрас:<br />
          <span class="text-m font-bold">
            <slot name="petColor"></slot>
          </span>
        </span>
        <span>
          Возраст:<br />
          <span class="text-m font-bold whitespace-nowrap">
            <slot name="age"></slot> мес.
          </span>
        </span>
        <span class="whitespace-nowrap">
          Кол-во лап:<br />
          <span class="text-m font-bold">
            <slot name="paws"></slot>
          </span>
        </span>
      </div>
      <!-- Price -->
      <span class="text-xl font-bold"> <slot name="price"></slot> руб. </span>
    </div>
    <!-- Button -->
    <button
      :disabled="isSold"
      class="
        w-full
        rounded-b-2xl
        text-m
        font-bold
        text-white
        bg-blue-primary
        py-8
      "
    >
      {{ isSold ? "Продан" : "Купить" }}
    </button>
  </div>
</template>

<script>
export default {
  emits: ['toggleFavorite'],
  props: {
    cardData: {
      type: Object,
    },
    isSold: {
      type: Boolean,
      require: false,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      require: false,
      default: false,
    },
    onSale: {
      type: Boolean,
      require: false,
      default: false,
    },
    imgPath: {
      type: String,
      require: false,
    },
  },
  name: "App",
};
</script>

<style lang="sass" scoped>
.card
  @apply w-full h-full
  max-width: 38rem
  &-img
    height: 26rem
    background-position: center
    background-repeat: no-repeat
  &-favorite
    width: 4.6rem
    height: 4.6rem

button[disabled]
  @apply bg-dark cursor-not-allowed
</style>
