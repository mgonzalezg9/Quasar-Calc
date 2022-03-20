<template>
  <div class="row justify-center">
    <div class="col-12 col-md-8">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ title }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h5 text-grey-5 text-right">asdf</div>
          <div class="text-h3 text-right">res</div>
        </q-card-section>

        <q-card-section class="row">
          <calculator-button v-for="i in 10" :key="i" class="col-3">{{
            i
          }}</calculator-button>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
import CalculatorButton from './Button.vue';

export default defineComponent({
  name: 'CalculatorPage',
  components: {
    CalculatorButton,
  },
  props: {
    title: {
      type: String,
      default: 'Calculator',
    },
  },
});
</script>


