<template>
  <q-btn
    class="full-width text-h6"
    text-color="white"
    color="indigo"
    @click="handleClick"
  >
    <slot>{{ fallbackContent }}</slot>
  </q-btn>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'click'): void }>();

const fallbackContent = '-';
function handleClick() {
  emit('click');
}
</script>

<style lang="scss" scoped>
</style>
