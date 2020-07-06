/* eslint-disable max-len */
<template>
  <div>
    <input type="checkbox" id="menu" />
    <label for="menu" onclick></label>

    <nav role="off-canvas">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ForRent' }">For Rent</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Furnished' }">Furnished</router-link>
        </li>
        <li>
          <a href="https://jessicawatts.managebuilding.com/Resident/portal/login" target="_blank">Login</a>
        </li>
      </ul>
    </nav>
    <div class="logo-container">
      <img src="@/assets/images/aspire-logo.png" alt="logo" id="logo" width="200"/>
    </div> 
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo-container {
  height: 100%;
  text-align: center;

  #logo {
    vertical-align: middle;
  }
}
@media screen and (max-width: 44em) {
  $menu_width: 20em;
  $content_offset: 0.5em;
}
</style>
