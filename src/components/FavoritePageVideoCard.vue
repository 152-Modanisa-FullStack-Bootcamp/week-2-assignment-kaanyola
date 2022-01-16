<template>
  <div class="card-favorite" @click="clicked()">
    <img
      id="cover-image"
      :src="hovered ? video.hoverImage : video.coverImage"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      alt=""
    />
    <div class="content-favorite">
      <p class="title">{{ video.title }}</p>
      <div class="count-publish-date">
        <p>{{ getViewCount }}</p>
        <p>{{ getPublishDateAgo }}</p>
      </div>
      <div class="text-content-container">
        <img id="owner-image" :src="video.ownerImage" alt="" />
        <p class="owner-name">{{ video.ownerName }}</p>
      </div>
      <p>{{ video.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoritePageVideoCard",
  data() {
    return {
      hovered: false,
    };
  },
  props: ["video"],
  computed: {
    getViewCount() {
      return `${this.video.viewCount} views `;
    },
    getPublishDateAgo() {
      return `${this.video.publishDateInMonth} month ago`;
    },
  },
  methods: {
    clicked() {
      this.$router.push({
        path: "/watch",
        query: { id: this.video.id },
      });
    },
  },
};
</script>

<style>
.card-favorite {
  margin: 20px;
  width: 1500px;
  display: flex;
  flex-direction: row;
}

.content-favorite {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.text-content-container {
  display: flex;
}
p.owner-name {
  margin-top: 10px;
}
</style>