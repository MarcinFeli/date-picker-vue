<template>
    <div class="border p-8 rounded-xl">
        <InfoModal/>
        <LanguageSwitch />
        <DatePicker />
        <LineChart />
    </div>
</template>

<script setup>
import DatePicker from '@/components/DatePicker.vue';
import LineChart from '@/components/LineChart.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import InfoModal from '@/components/InfoModal.vue';
</script>

