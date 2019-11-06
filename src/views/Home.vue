<template>
  <div>
    <div class="margins-content">
      <h1>License Agreement</h1>
      <b-form-textarea
        id="textarea"
        v-model="licenseText"
        placeholder="Enter something..."
        rows="14"
        max-rows="14"
        readonly
      ></b-form-textarea>
    </div>
    <div class="footer">
      <hr />
      <div class="d-flex margins-buttons">
        <b-button variant="danger" class="mr-auto">cancel</b-button>
        <b-button variant="primary" v-on:click="$router.push('folder')">next</b-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/styles/installer.css'

export default {
  name: 'home',
  data: function () {
    return {
      licenseText: `Copyright (c) 2010-2015 Illumina, Inc.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIEDi
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
`
    }
  }
}
</script>
<style>

</style>
