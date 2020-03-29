<template>
  <section class="section">
    <div class="columns is-mobile">
      <card>
        <img :src="cat" />
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },
  async fetch({ store, params }) {
    await store.dispatch('demo/fetchCat')
  },
  computed: {
    cat() {
      return this.$store.state.demo?.cat
    }
  }
}
</script>
