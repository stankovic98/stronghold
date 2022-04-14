<template>
  <div class="lectures">
    <div class="lecture" v-for="video in videos" :key="video.url">
      <iframe
        type="video/webm"
        :src="video.url"
        frameborder="0"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      videos: [
        {
          name: "Secret to Marys Will",
          url: "https://invidio.xamh.de/embed/X7o7cO9UtlA",
        },
        {
          name: "Secret to Marys Will",
          url: "https://invidio.xamh.de/embed/X7o7cO9UtlA",
        },
        {
          name: "Secret to Marys Will",
          url: "https://invidio.xamh.de/embed/X7o7cO9UtlA",
        },
        {
          name: "Secret to Marys Will",
          url: "https://invidio.xamh.de/embed/X7o7cO9UtlA",
        },
        {
          name: "Secret to Marys Will",
          url: "https://invidio.xamh.de/embed/X7o7cO9UtlA",
        },
        {
          name: "Secret to Marys Will",
          url: "https://invidio.xamh.de/embed/X7o7cO9UtlA",
        },
        {
          name: "Secret to Marys Will",
          url: "https://invidio.xamh.de/embed/X7o7cO9UtlA",
        },
      ],
    };
  },
};
</script>

<style scoped>
.lectures {
  padding: 3rem;
  display: grid;
  grid-gap: 2rem;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-auto-rows: minmax(300px, 1fr);
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
