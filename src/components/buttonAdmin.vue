<template>
  <div>
    <div :class="{toRight : isHidden, toLeft : !isHidden}">
      <div style="text-align:right;">
        <v-btn :disabled="DISABLED[0]" @click="changeIsAddP">Add Pointer</v-btn>
        <v-btn :disabled="DISABLED[1]" @click="changeIsRemP">Remove Pointer</v-btn>
        <v-btn :disabled="DISABLED[2]" @click="changeIsAddId">Add ID</v-btn>
        <v-btn :disabled="DISABLED[3]" @click="changeIsremId">Remove ID</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'changeIsAddP',
      'changeIsRemP',
      'changeIsAddId',
      'changeIsremId'
    ])
  },
  computed: {
    ...mapGetters({
      DISABLED: 'disabledChanged',
      isHidden: 'isHidden'
    })
  }
}
</script>

<style scoped>
button {
  font-size: 20px;
  padding: 10px 20px;
  margin: 5px;
}
</style>
