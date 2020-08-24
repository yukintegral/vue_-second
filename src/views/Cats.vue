<template>
  <div>
    <h1>Cats for Adoption</h1>
    <!-- 現在バージョン -->
    <b-table :fields="fields" :items="cats">
      <template v-slot:cell(name)="data">
          <router-Link :to="`/pets/${data.value}`">
          {{ data.value }}</router-Link>
        </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },

  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
