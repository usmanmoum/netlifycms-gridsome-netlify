<template>
  <nav class="nav-container">
    <Logo/>
    <ul>
      <li><g-link to="/activities">Activities</g-link>
        <nav>
          <ul>
            <li><g-link to="/activities/education">Education</g-link></li>
            <li><g-link to="/activities/entrepreneurship">Entrepreneurship</g-link></li>
            <li><g-link to="/activities/general">General</g-link></li>
          </ul>
        </nav>
      </li>
      <li><g-link to="/activities">Donate Here</g-link></li>
    </ul>
  </nav> 
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

header {
  background: var(--bg-content-color);
}

.nav-container {
  width: 100%;
  
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
</style>
