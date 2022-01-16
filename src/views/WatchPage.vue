<template>
  <div class="watch">
    <p>
      {{ $route.query.id }}
    </p>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
};
</script>

<style>
.watch {
  display: flex;
  justify-content: center;
}

.watch p{
  font-size: 100px;
}
</style>