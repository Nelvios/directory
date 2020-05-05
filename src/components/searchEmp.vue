<template>
  <v-row>
    <v-col cols="4">
      <v-select
        v-model="select"
        :items="items"
        label="Search By"
      ></v-select>
    </v-col>
    <v-col cols="4">
      <v-text-field label="Input Full Name" v-if="select === 'Full Name'"></v-text-field>
      <v-text-field label="Input Initial" v-if="select === 'Initial'"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      select: null,
      items: ['Full Name', 'Initial']
    }
  }
}
</script>

<style scoped>
v-select{
  width: 400px;
}
</style>
