<template>
<div>
  <h3>Interaktive Offerte</h3>
  <form id="quotes" action="" method="post">

    <fieldset>
      <legend>E-Commerce</legend>
      <input type="checkbox" id="offer-shop" name="shop" value="shop">
      <label for="offer-shop">Shopify integration</label>
    </fieldset>

    <fieldset>
      <legend>Content Management System (CMS)</legend>
      <input type="checkbox" id="offer-cms" name="cms" value="cms">
      <label for="offer-cms">Inhalte selbst verwalten. (via Prismic.io)</label>
    </fieldset>

    <fieldset>
      <legend>Sprachen</legend>
      <div>
        <input type="radio" name="language" id="offer-language-1" value="1" checked>
        <label for="offer-language-1">1 Sprache</label>
      </div>
      <div>
        <input type="radio" name="language" id="offer-language-2" value="2">
        <label for="offer-language-2">2 Sprachen</label>
      </div>
      <div>
        <input type="radio" name="language" id="offer-language-more" value="more">
        <label for="offer-language-more">3 und mehr Sprachen</label>
      </div>
    </fieldset>

    <fieldset>
      <legend>Search Engine Optimisation (SEO)</legend>
      <input type="checkbox" id="offer-seo" name="seo" value="seo">
      <label for="offer-seo">Suchmaschinenoptmierung</label>
    </fieldset>

    <fieldset>
      <legend>Advanced Browser Support</legend>
      <div>
        <input type="radio" name="language" id="offer-browser" value="1" checked>
        <label for="offer-browser">Browser in neuster Version (Chrome, Firefox, Safari, Microsoft Edge)</label>
      </div>
      <div>
        <input type="radio" name="language" id="offer-browser-ie9" value="ie9">
        <label for="offer-browser-ie9">Zusätzlicher Support für Microsoft Internet Explorer 9</label>
      </div>
      <div>
        <input type="radio" name="language" id="offer-browser-ie8" value="ie8">
        <label for="offer-browser-ie8">Zusätzlicher Support für Microsoft Internet Explorer 8</label>
      </div>
    </fieldset>
  </form>
</div>
</template>

<script>
  export default {
    name: 'QuotesCalculator'
  }
</script>
