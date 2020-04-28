<template>
  <div class="seats" :class="{toRight : isHidden}" @click="getPosition" ref="seatsElement">
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
      const x = event.clientX
      const y = event.clientY
      const w = this.$refs.seatsElement.clientWidth
      const h = this.$refs.seatsElement.clientHeight
      const pos = this.$refs.seatsElement.getBoundingClientRect()

      const tempId = this.seats[this.seats.length - 1].id + 1
      const tempName = 'A' + ((parseInt(this.seats[this.seats.length - 1].name.replace(/\D/g, '')) + 1).toString())

      const seat = {
        id: tempId,
        name: tempName,
        x: ((x - pos.left) / w) * 100,
        y: ((y - pos.top) / h) * 100,
        isVacant: true,
        isCubicle: true,
        empId: null
      }
      this.$store.dispatch('postSeat', seat)
    },
    pointerOptions (index) {
      const seat = this.seats.find(({ id }) => id === index)
      const indexSeat = this.seats.indexOf(seat)
      if (
        !this.buttonState.isRemPCondition &&
        !this.buttonState.isAddIdCondition &&
        !this.buttonState.isRemIdCondition
      ) {
        if (seat.empId) {
          this.$store.dispatch('getById', seat.empId)
          this.$store.commit('showSidePanel')
        }
      }

      if (this.buttonState.isRemPCondition) {
        this.$store.dispatch('deleteSeat', indexSeat)
      } else if (this.buttonState.isAddIdCondition) {
        if (seat.empId != null) {
        } else {
          const AskId = prompt('Please enter an employee ID:')
          if (AskId === '' || AskId === null) {
            alert('Please Input The Correct ID')
          } else {
            this.$store.dispatch('checkExistance', AskId).then(res => {
              if (!this.employeeExistance) {
                alert('Employee NIP not exist')
              } else {
                const temp = { index: indexSeat, empId: AskId }
                this.$store.dispatch('addEmpId', temp)
              }
            })
          }
        }
      } else if (this.buttonState.isRemIdCondition) {
        seat.empId = null
        const temp = { index: indexSeat, seatData: seat }
        this.$store.dispatch('deleteId', temp)
      }
    }
  },
  computed: {
    ...mapGetters({
      seats: 'retrieveSeats',
      buttonState: 'fetchAllButton',
      employeeExistance: 'getEmployeeExistance',
      isHidden: 'isHidden'
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
