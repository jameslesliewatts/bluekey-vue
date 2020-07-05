<template>
  <div>
    <div
      class="text-center single-listing"
      :style="{
        backgroundImage: `url('${listing.Floorplan[0].File[0].Src[0]}')`,
      }"
    >
      <h2 class="listing-address">
        {{ listing.PropertyID[0].Address[0].Address[0] }}
      </h2>
      <p class="listing-price">
        ${{ listing.Floorplan[0].MarketRent[0].$.Max }}/month
      </p>
      <p class="listing-info">
        Learn More
      </p>

      <!-- <div v-if="imageExists" class="text-center"> -->
      <!-- <img :src="listing.Floorplan[0].File[0].Src[0]" class="house-image" /> -->
      <!-- <h1>Image Exists</h1> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["listing"],
  // beforeMount: function imageExists() {
  //   // console.log(this.listing.Floorplan[0].File[0].Src[0]);
  //   try {
  //     if (typeof this.listing.Floorplan[0].File[0].Src[0] != undefined) {
  //       return true;
  //     }
  //   } catch (error) {
  //     return false;
  //   }
  // },
};
</script>
<style>
.single-listing {
  /* border: 2px solid green; */
  padding: 8px;
  margin: 16px auto;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
}
.listing-address,
.listing-price,
.listing-info {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
}
.listing-address {
  text-align: center;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 16px;
}
.listing-price {
  position: absolute;
  bottom: 0;
  left: 16px;
}
.listing-info {
  position: absolute;
  bottom: 0;
  right: 16px;
}
.house-image {
  width: 400px;
}
</style>
