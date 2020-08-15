<template>
  <Layout>
    <div class="content-box donation">
      <h1>DONATE HERE!</h1>
      <div class="colored-line-left"></div>
      <h4>*Currently supporting Projects:* </h4>
      <strong>Note: Zakat (Z) / Sadaqa (S)</strong><br><br>
      <ul>
        <li><strong>*Orphanage support*(Z)</strong> - Rs.10,000/per month</li>
        <li><strong>*Monthly provision kit support to needy families*(Z)</strong> - Rs.1000/kit for a family
        <li><strong>*Educational support*(S)</strong>  <br>
          <ul>
            <li><strong>School Fees</strong> - Rs.5,000/student  </li>
            <li><strong>Collage Fees</strong> - Ra.7,500/student  </li>
            <li><strong>Tution Arrangements at MiA govt.school</strong>, Ch - Rs.7000/approx  per month per teacher.</li>
            <li><strong>Meekarai village Tution arrangements</strong> - Rs.2,500/month </li>
            <li><strong>Law College Student support</strong> - Rs.3000/ month</li>
          </ul>
        </li>
        <li><strong>*Village Adoption support*(Z)</strong> -Rs 11,000/monthly support.</li>
        <li><strong>*Rural Village Masjid & Madarasa support*</strong> - Rs.6,000/per month</li>
        <li><strong>*Emergency Medical support*(Z)</strong> - Reqd as received will paid directly to hospital after verification.</li>
        <li><strong>*Natural Calamities/Disaster Support*(Z)</strong> - According to the Requirement on support needed fund flow will be generated.</li>
      </ul>
      <br>
      <p>Your generous support help us towards achieving our goal of <strong>“Working together to make better world”</strong></p>

      <p><strong>Sadaqah</strong></p>

      <p>Verily those who give sadaqah, men and women, and lend Allah a goodly loan, it shall be increased manifold, and theirs shall be an honourable good reward – Al-Quran 57:18</p>
      
      <blockquote>
        <h4><strong>Bank: HDFC Bank<br>
        Name: United Professionals Association<br>
        Current Account No.: 5020 000 941 6887<br>
        Branch: Raheja Tower, Chennai<br>
        IFSC Code: HDFC0001364</strong></h4>
      </blockquote>
      <br><br>
      <p>Kindly notify us whether the donated amount is <strong>*Zakath*</strong> or <strong>*Sadaqah*</strong> by a mail to info.uniproteam@gmail.com</p>
    </div>
  </Layout>
</template>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Author,
    PostCard,
    Banner
  },
  metaInfo: {
    title: 'Donation'
  }
}
</script>

<style lang="scss">
  .donation {

    ul {
      margin-left: 20px;

      li {
        list-style-type: decimal;
      }
    }

    blockquote h4 {
      line-height: 1.5;
    }
  }
</style>
