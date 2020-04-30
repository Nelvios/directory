<template>
  <div>
    <div :class="{toRight : isHidden, toLeft : !isHidden}">
      <div style="text-align:right;">
        <button :disabled="DISABLED[0]" @click="changeIsAddP">Add Pointer</button>
        <button :disabled="DISABLED[1]" @click="changeIsRemP">Remove Pointer</button>
        <button :disabled="DISABLED[2]" @click="changeIsAddId">Add ID</button>
        <button :disabled="DISABLED[3]" @click="changeIsremId">Remove ID</button>
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
