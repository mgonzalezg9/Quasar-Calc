<template>
  <q-page padding>
    <calculator title="Calculator" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Calculator from 'src/components/Calculator/index.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { Calculator },
});
</script>
