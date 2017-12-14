<template>
<div class="contact" itemscope itemtype="http://schema.org/LocalBusiness">
  <div class="contact-physical">
    <v-icon>place</v-icon>
    <div itemprop="name">SANTiHANS GmbH</div>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <span itemprop="streetAddress">Mittlere Strasse 60</span>
      <div>
        <span itemprop="postalCode">4056</span>&nbsp;<span itemprop="addressLocality">Basel</span>
      </div>
      <span v-show="showCountry" itemprop="addressCountry">Switzerland</span>
    </div>
  </div>
  <div class="contact-virtual">
    <div v-show="showPhone" class="phone">
      <v-icon>phone</v-icon>
      <span itemprop="telephone">
              <a href="tel:+41798318079">+41 79 831 80 79</a></span>
    </div>
    <div class="email">
      <v-icon>email</v-icon>
      <span itemprop="email">
        <a href="mailto:info@santihans.com">info@santihans.com</a></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    showCountry: {
      type: Boolean,
      default: true
    },
    showPhone: {
      type: Boolean,
      default: true
    }
  }
}
</script>
