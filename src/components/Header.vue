<template>
  <div id="header">
    <router-link class="favorite-button" :to="{ name: 'favorites', params: {favoriteVideos: this.favoriteVideos}}" tag="button">Favorites</router-link>
  </div>
</template>

<script>
export default {
    props: ['favoriteVideos'],
}
</script>

<style>
#header{
    height: 60px;
    background-color: red;
    display: flex;
    justify-content: end;
}

.favorite-button{
    background-color: white;
    border-radius: 10px;
    width: 150px;
}
</style>