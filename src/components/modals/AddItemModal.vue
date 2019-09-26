<template>
  <modal name="add-item-modal" transition="pop-out" :width="modalWidth" :height="400">
    <div class="box ">
        <div class="modal-header">
      <h2>Add Item</h2>
      </div>
      <div class="modal-body">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Entry title"
          label-for="title"
          description="this is not necessary"
        >
          <b-form-input
            id="title"
            v-model="form.title"
            type="text"
            placeholder="When out of bed"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Journal entry" label-for="content">
          <b-form-input id="content" v-model="form.content" required placeholder="A began by preparing"></b-form-input>
        </b-form-group>

        <b-button size="sm" type="submit" variant="primary">Submit</b-button>
        <b-button size="sm" type="reset" variant="danger">Reset</b-button>
      </b-form>
      </div>
      <div class="modal-footer">

      </div>
    </div>
  </modal>
</template>
<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
        onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    }
};
</script>
<style>
</style>