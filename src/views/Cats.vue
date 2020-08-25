<template>
  <div>
    <h1>Cats for Adoption</h1>
    <!-- 現在バージョン -->
    <!-- <b-table striped hover :items="cats">
      <template slot="name" slot-scope="data">
        router-link -->
      <b-table striped hover :items="pets">
        <template v-slot:cell(name)="data">
          <router-link :to="`/pets/${species}/${data.index}`">
            {{ data.value }}
          </router-link>
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
  computed: mapState({
    cats: state => state.cats
  })
}
</script>
