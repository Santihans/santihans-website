<template>
  <div class="contact" itemscope itemtype="http://schema.org/LocalBusiness">
    <div class="contact-physical">
      <icon name="pin" />
      <div itemprop="name">SANTiHANS GmbH</div>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress">Mittlere Strasse 60</span>
        <div>
          <span itemprop="postalCode">4056</span>&nbsp;
          <span itemprop="addressLocality">Basel</span>
        </div>
        <span v-show="showCountry" itemprop="addressCountry">Switzerland</span>
      </div>
    </div>
    <div class="contact-virtual">
      <div v-show="showPhone" class="phone">
        <icon name="calls" />
        <span itemprop="telephone">
          <a href="tel:+41225754056">+41 22 575 40 56</a>
        </span>
      </div>
      <div class="email">
        <icon name="mail" />
        <span itemprop="email">
          <a href="mailto:info@santihans.com">info@santihans.com</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  components: {
    Icon
  },
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
