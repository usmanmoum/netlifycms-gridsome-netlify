
<template>
  <section class="banner-wrapper">
  	<section class="banner">
  		<h2>United Professionals Association</h2>
  		<h4 class="sub-title">Guided by Scholars. Driven by Professionals.</h4>
		  <div class="details"> This is a test </div>
		</section>
	</section>
</template>


<style lang="scss">
  .banner-wrapper {
    background: url('/images/uploads/united-pro.jpeg') top center;
    padding: 10%;
    text-align: center;
    color: var(--banner-font-color);
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: center;

    .banner {
      margin: 0 auto;
    }

    h2 {
      font-size: var(--banner-font-size);
      color: var(--banner-font-color);
    }

    h4 {
      color: var(--banner-font-color);
    }
  }
</style>