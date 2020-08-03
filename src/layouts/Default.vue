<template>
  <div id="app">

    <header class="header">
      <Navigation/>
    </header>

    <Banner v-if="isHome"/>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. Unipro</span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import Navigation from '~/components/Navigation.vue'
import Banner from '~/components/Banner.vue'

export default {
  props: {
    isHome: { default: false }
  },
  components: {
    Logo,
    ToggleTheme,
    Navigation,
    Banner
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;  

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;
  background: var(--bg-content-color);

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
