<template>
  <q-page padding>
    <calculator />
  </q-page>
</template>

<script lang="ts">
import Calculator from 'src/components/Calculator.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { Calculator },
});
</script>
