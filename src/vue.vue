<template>
  <div class="cls" :style="{ color: 'red' }" width="250" height="100">
    {{ props.name }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

const props = defineProps({
  name: {
    type: String as PropType<'lutz' | 'bukn'>,
    default: 'lutz'
  }
})
</script>

<style scope lang="less">
.cls {
  color: red;
}
</style>
