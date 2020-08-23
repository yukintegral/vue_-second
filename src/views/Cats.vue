<template>
  <div>
    <h1>Cats for Adoption</h1>
    <!-- <b-table striped hover :items="cats"> -->
        <!-- A custom formatted column -->
        <!-- <template slot="name" slot-scope="data"> -->


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
import cats from '@/data/cats'

export default {
  data() {
    return {
      cats
    }
  }
}
</script>
