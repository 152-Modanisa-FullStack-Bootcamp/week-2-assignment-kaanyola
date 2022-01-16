<template>
  <div class="card" @click="clicked()">
    <img
      id="cover-image"
      :src="hovered ? video.hoverImage : video.coverImage"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      alt=""
    />
    <div class="content">
      <img id="owner-image" :src="video.ownerImage" alt="" />
      <div class="text-content">
        <p class="title">{{ video.title }}</p>
        <p>{{ video.ownerName }}</p>
        <div class="count-publish-date">
          <p>{{ getViewCount }}</p>
          <p>{{ getPublishDateAgo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageVideoCard",
  data() {
    return {
      hovered: false,
    };
  },
  props: ['video'],
  computed: {
      getViewCount(){
          return `${this.video.viewCount} views`
      },
      getPublishDateAgo(){
          return `${this.video.publishDateInMonth} ago`
      }
  },
  methods: { 
      clicked(){
          this.$router.push({
              path: '/watch', query: {id: this.video.id}
          })
      }
  }
};
</script>

<style>
.card {
  height: auto;
  width: 360px;
  margin: 20px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
}

img#cover-image {
  height: 200px;
  width: 360px;
}
img#owner-image {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.content {
  margin: 16px;
  display: flex;
  flex-direction: row;
}

.text-content {
 margin: 0 6px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.text-content * {
  margin: 5px;
}

.count-publish-date{
    margin: 0px;
    display: flex;
}

p{
    color: gray;
    font-weight: 100;
    font-size: 14px;
}

.title{
    color: black;
    font-weight: bold;
    font-size: 19px;
}


</style>