<template>
  <div>
    <div
      class="airbnb-embed-frame"
      data-id="29725991"
      data-view="home"
      style="width:450px;height:300px;margin:auto"
    >
      <a
        href="https://www.airbnb.com/rooms/29725991?s=66&amp;unique_share_id=906a6333-ec43-470d-8077-cda186d987cc&amp;source=embed_widget"
      >View On Airbnb</a>
      <a
        href="https://www.airbnb.com/rooms/29725991?s=66&amp;unique_share_id=906a6333-ec43-470d-8077-cda186d987cc&amp;source=embed_widget"
        rel="nofollow"
      >Charming, Capitol View Apartment B</a>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const embedScript = document.createElement("script");
    embedScript.setAttribute(
      "src",
      "https://www.airbnb.com/embeddable/airbnb_jssdk"
    );
    document.head.appendChild(embedScript);
  }
};
</script>
