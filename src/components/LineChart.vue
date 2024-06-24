<template>
    <div>
      <Line v-if="chartData.labels.length > 0" :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useDateStore } from '@/stores/dateStore';
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);
  
  const dateStore = useDateStore();
  
  const chartData = computed(() => ({
    labels: dateStore.generatedData.map(data => data.date),
    datasets: [
      {
        label: 'Random Data',
        backgroundColor: '#f87979',
        borderColor: '#f87979',
        data: dateStore.generatedData.map(data => data.value)
      }
    ]
  }));
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  
  const lineChart = {
    extends: Line,
    props: {
      chartData: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        default: () => {}
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.options);
    },
    watch: {
      chartData(newData) {
        this.renderChart(newData, this.options);
      }
    }
  };
  
  </script>
  
  <style>
  /* Add styles if needed */
  </style>
  