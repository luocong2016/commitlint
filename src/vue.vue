<template>
  <div class="cls">{{ props.name }}</div>
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

<style lang="less" scope>
.cls {
  color: red;
}
</style>
