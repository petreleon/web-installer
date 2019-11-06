<template>
  <div>
    <div class="margins-content">
      <h1>Options</h1>
      <p>folder location:</p>
      <b-input-group prepend="Username" class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button>Choose</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    </div>
    <div class="footer">
      <hr />
      <div class="d-flex margins-buttons">
        <b-button variant="danger" class="mr-auto">cancel</b-button>
        <b-button variant="primary">Install</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/styles/installer.css'
export default {

}
</script>
