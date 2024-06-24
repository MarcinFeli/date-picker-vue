<template>
	<div class="mt-4">
		<Line class="min-h-auto" v-if="chartData.labels.length > 0" :data="chartData" :options="chartOptions" />
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useDateStore } from '@/stores/dateStore'
import { Line } from 'vue-chartjs'
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from 'chart.js'
import { useI18n } from 'vue-i18n'
import { differenceInDays } from 'date-fns'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const { t } = useI18n()
const dateStore = useDateStore()

const chartData = computed(() => {
	const startDate = new Date(dateStore.startDate)
	const endDate = new Date(dateStore.endDate)

	const intervalDays = differenceInDays(endDate, startDate)

	let stepSize = 1
	if (intervalDays >= 31 && intervalDays < 90) {
		stepSize = 3
	} else if (intervalDays >= 90 && intervalDays < 365) {
		stepSize = 7
	} else if (intervalDays >= 365) {
		stepSize = 30
	}

	const filteredData = dateStore.generatedData.filter((data, index) => index % stepSize === 0)

	const labels = filteredData.map(data => data.date)
	const datasets = [
		{
			label: t('Data for specified date'),
			backgroundColor: '#1d5ad1',
			borderColor: '#1d5ad1',
			data: filteredData.map(data => data.value),
		},
	]

	return {
		labels,
		datasets,
	}
})

const chartOptions = {
	responsive: true,
	maintainAspectRatio: true,
}

const lineChart = {
	extends: Line,
	props: {
		chartData: {
			type: Object,
			required: true,
		},
		options: {
			type: Object,
			default: () => {},
		},
	},
	mounted() {
		this.renderChart(this.chartData, this.options)
	},
	watch: {
		chartData(newData) {
			this.renderChart(newData, this.options)
		},
	},
}
</script>
