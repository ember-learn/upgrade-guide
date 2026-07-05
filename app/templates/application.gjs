import pageTitle from 'ember-page-title/helpers/page-title';
import EsHeader from 'ember-styleguide/components/es-header';
import EsFooter from 'ember-styleguide/components/es-footer';
<template>
  {{pageTitle "Upgrade Guide - Ember.js"}}

  <EsHeader />

  <main>
    {{outlet}}
  </main>

  <EsFooter />
</template>
