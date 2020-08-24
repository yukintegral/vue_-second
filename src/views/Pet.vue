<template>
  <div>
  <h1>{{ animal.name }}{{ this.$route.params.species }}</h1>
  <p>Age: {{ animal.age }} yeaers old</p>
  <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      animal: {}
    }
  },

  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  methods: {
    pet() {
      const animal = this[this.$route.params.species][$route.params.id]
      this.animal = animal
    }
  }
}
</script>
