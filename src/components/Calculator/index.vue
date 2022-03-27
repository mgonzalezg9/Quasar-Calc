<template>
  <div class="row justify-center">
    <div class="col-12 col-md-8">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ title }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h3 text-right">{{ expression || 0 }}</div>
          <div class="text-h5 text-grey-5 text-right">{{ result }}</div>
        </q-card-section>

        <q-card-section class="row q-col-gutter-xs">
          <div v-for="i in buttonList" :key="i" class="col-3">
            <calculator-button
              :numeric="isNumber(i)"
              @click="handleButton(i)"
              >{{ i }}</calculator-button
            >
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { evaluate } from 'mathjs';
import { computed, defineComponent, ref } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  name: 'CalculatorPage',
  components: {
    CalculatorButton: Button,
  },
  props: {
    title: {
      type: String,
      default: 'Calculator',
    },
  },
  setup() {
    const expression = ref('');
    const result = computed(() => {
      let res = '';
      try {
        res = evaluate(expression.value);
      } catch (error) {
        return res;
      }
      return res && `= ${res}`;
    });
    const buttonList = [
      '1',
      '2',
      '3',
      '+',
      '4',
      '5',
      '6',
      '-',
      '7',
      '8',
      '9',
      '*',
      'C',
      '0',
      '/',
      '=',
    ];
    const handleButton = (value: string) => {
      switch (value) {
        case 'C':
          // Clears the expression
          expression.value = '';
          break;

        case '=':
          // Saves expression and value in store

          expression.value = '';
          break;

        default:
          expression.value += value;
          break;
      }
    };

    return {
      buttonList,
      expression,
      result,
      handleButton,
      isNumber: (n: string) => !isNaN(parseInt(n, 10)),
    };
  },
});
</script>

