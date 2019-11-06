<template>
<div>
  <div class="home">
  </div>
  <div class="footer">
    <hr/>
    <div class="d-flex margins-creator">
      <b-button variant="danger" class="mr-auto">cancel</b-button>
      <b-button variant="primary">next</b-button>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
<style>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
.margins-creator {
  margin: 0 15px 15px 15px
}
</style>
