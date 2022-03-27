<template>
  <q-btn
    class="full-width text-h6"
    :text-color="numeric ? 'grey-8' : 'white'"
    :color="numeric ? 'grey-2' : 'indigo'"
    @click="handleClick"
  >
    <slot>{{ fallbackContent }}</slot>
  </q-btn>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'click'): void }>();
defineProps<{
  numeric?: boolean;
}>();

const fallbackContent = '-';
function handleClick() {
  emit('click');
}
</script>

<style lang="scss" scoped>
</style>
