<template>
    <div class="border p-8 rounded-xl">
        <LanguageSwitch />
        <DatePicker />
        <LineChart />
    </div>
</template>

<script setup>
import DatePicker from '@/components/DatePicker.vue';
import LineChart from '@/components/LineChart.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
</script>

