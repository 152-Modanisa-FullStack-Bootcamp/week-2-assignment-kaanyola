<template>
  <div id="home-page">
    <Header :favoriteVideos="favoriteVideos"></Header>
    <div class="cards-container">
      <HomePageVideoCard
        v-for="video in videos"
        :key="video.id"
        :video="video"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
import HomePageVideoCard from "../components/HomePageVideoCard.vue";

export default {
  name: "HomePage",
  components: {
    HomePageVideoCard,
    Header,
  },
  data() {
    return {
      videos: null,
    };
  },
  computed: {
    favoriteVideos() {
      if (this.videos) {
        return this.videos.filter((video) => video.favorite);
      }
      else{
        return []
      }
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"
      )
      .then((response) => (this.videos = response.data));
  },
};
</script>

<style>
#home-page {
  height: auto;
}

.cards-container {
  height: auto;
  max-width: 2000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>