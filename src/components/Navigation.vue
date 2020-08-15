<template>
  <nav class="nav-container">
    <Logo/>
    <button class="hamburger" @click="doSomething">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </button>
    <ul :class="{open: open}">
      <li><g-link to="/education">Education</g-link></li>
      <li><g-link to="/entrepreneurship">Entrepreneurship</g-link></li>
      <li><g-link to="/general">General</g-link></li>
      <li><g-link to="/donation">Donate Here</g-link></li>
    </ul>
  </nav> 
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    doSomething() {
      this.open = !this.open;
    }
  }
}
</script>

<style lang="scss">

header {
  background: var(--bg-content-color);
  box-shadow: 1px 1px 5px 0 var(--border-color);
}

.hamburger {
  float: right;
  display: none;
}

.nav-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .logo {
    float: left;
    margin-top: 10px;

    img {
      max-height: 56px;
    }
  }

  ul {
    float: right;

    li {
      float: left;
      padding: var(--header-links-space);
      position: relative;
      font-size: var(--light-medium-font-size);

      ul {
        display: none;
        float: none;
        position: absolute;
        top: auto;
        left: 0;
        margin-top: var(--header-links-space);
        background: var(--bg-content-color);

        li {
          padding: 10px;
          float: none;

          &:hover {
            background: var(--link-color);

            a {
              color: var(--bg-content-color);
            }
          }
        }
      }

      &:hover ul {
        display: block;
      }
    }
  }
}

// Make  things smaller for mobile
@media screen and (max-width: 650px) {
  .hamburger {
    display: block;
  } 

  .nav-container {

    ul {
      display: none;
      background: var(--bg-content-color);
      padding: 20px;
      position: absolute;
      top: 73px;
      right: 0;
      z-index: 1;
      box-shadow: 1px 1px 5px 0 var(--border-color);

      li {
        float: none;
      }

      &.open {
        display: block;
      } 
    }


  }

}
</style>
