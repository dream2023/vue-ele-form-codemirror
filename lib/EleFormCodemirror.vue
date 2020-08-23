<template>
  <div class="ele-form-codemirror">
    <vue-codemirror
      :class="desc.class"
      :style="desc.style"
      v-bind="attrs"
      v-model="newValue"
      v-on="desc.on"
      @blur="handleChange(newValue)"
    />
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import { formMixin } from 'vue-ele-form';

export default {
  name: 'codemirror',
  mixins: [formMixin],
  components: {
    'vue-codemirror': codemirror
  },
  data () {
    return {
      defaultAttrs: {
        options: {
          tabSize: 4,
          lineNumbers: true,
          line: true
        }
      }
    };
  }
};
</script>

<style>
.ele-form-codemirror {
  line-height: 1.3;
}
</style>
