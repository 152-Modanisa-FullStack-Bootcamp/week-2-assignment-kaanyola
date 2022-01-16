<template>
  <div class="favorite-container">
    <FavoritePageVideoCard
      v-for="video in favoriteVideos"
      :key="video.id"
      :video="video"
    />
  </div>
</template>

<script>
import FavoritePageVideoCard from "../components/FavoritePageVideoCard.vue";

export default {
  name: "FavoritePage",
  components: {
    FavoritePageVideoCard,
  },
  props: ["favoriteVideos"],
};
</script>

<style>
  .favorite-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>