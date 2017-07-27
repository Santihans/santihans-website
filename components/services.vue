<template>
  <section class="services boundaries">
    <h2>Angebot</h2>
    <p>Wir erstellen schlichte, funktionale Webseiten für jeden Kunden individuell. Unser Angebot richtet sich so wohl an Private, Vereine für kleine staische Webseiten, wie auch an Unternhemen mit gehobenen Ansprüchen.</p>

    <h2 class="">Website for extraordinary demands</h2>
    <h2 class="">Stunning websites</h2>

    <p>Alle unsere Webseiten bieten:</p>
    <ul>
      <li>Funktional und modern</li>
      <li>Responsive</li>
      <li>Fast and secure (HTTPS)</li>
      <li>Accessible</li>
    </ul>
    <component-quotes-calculator></component-quotes-calculator>
    <button>Kontakt</button>
  </section>
</template>

<script>
  import quotes from './QuotesCalculator.vue'

  export default {
    name: 'Services',
    components: {
      'component-quotes-calculator': quotes
    }
  }
</script>
