<template>
  <section class="section section-components pb-0" id="section-components">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <h2 class="text-center">
            <span>Available Listings</span>
          </h2>
          <div v-for="(listing, index) in listings" :key="index">
            <SingleListing :listing="listing" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SingleListing from "../components/SingleListing";

export default {
  data() {
    return {
      listings: []
    };
  },
  components: {
    SingleListing
  },
  mounted() {
    var parseString = require("xml2js").parseStringPromise;
    var util = require("util");

    axios
      .get(
        "http://jessicawatts.managebuilding.com/Resident/PublicPages/XMLRentals.ashx?listings=all"
      )
      .then(response => {
        parseString(response.data)
          .then(result => {
            this.listings = result.PhysicalProperty.Property;
          })
          .catch(err => console.log(err));
      });
  }
};
</script>
<style></style>
