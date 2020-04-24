<template>
  <div class="seats" @click="getPosition" ref="seatsElement">
    <img src="../assets/denah.png" alt="Denah" width="100%" />

    <a
      class="seat"
      v-for="seat in seats"
      :key="seat.id"
      @click="pointerOptions(seat.id)"
      :style="[{'background-color':seat.empId != null ? '#7FFF00' : 'red',
      'left': seat.x + '%',
      'top': seat.y + '%'}]"
    ></a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    getPosition (event) {
      if (!this.buttonState.isAddPCondition) {
        return
      }

      console.log(this.employeeData)

      const x = event.clientX
      const y = event.clientY
      const w = this.$refs.seatsElement.clientWidth
      const h = this.$refs.seatsElement.clientHeight
      const pos = this.$refs.seatsElement.getBoundingClientRect()

      const temp = this.seats[this.seats.length - 1].id + 1

      const seat = {
        id: temp,
        name: 'testName',
        x: ((x - pos.left) / w) * 100,
        y: ((y - pos.top) / h) * 100,
        isVacant: true,
        isCubicle: true,
        empId: '123456789'
      }
      this.$store.commit('addSeat', seat)
    },
    pointerOptions (index) {
      if (
        !this.buttonState.isRemPCondition &&
        !this.buttonState.isAddIdCondition &&
        !this.buttonState.isRemIdCondition
      ) {
        return
      }

      const seat = this.seats.find(({ id }) => id === index)

      if (this.buttonState.isRemPCondition) {
        const temp = this.seats.indexOf(seat)
        this.$store.commit('removePointer', temp)
      } else if (this.buttonState.isAddIdCondition) {
        if (seat.empId != null) {

        } else {
          const AskId = prompt('Please enter an employee ID:')
          if (AskId === '' || AskId === null) {

          } else {
            seat.empId = AskId
          }
        }
      } else if (this.buttonState.isRemIdCondition) {
        seat.empId = null
      }
    }
  },
  computed: {
    ...mapGetters({
      seats: 'retrieveSeats',
      buttonState: 'fetchAllButton',
      employeeData: 'getAllDataEmployee'
    })
  }
}
</script>

<style>
.seats {
  position: relative;
}
.seats.add {
  cursor: crosshair;
}

.seat {
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);

  background-color: red;
  border-radius: 100px;
}
</style>
