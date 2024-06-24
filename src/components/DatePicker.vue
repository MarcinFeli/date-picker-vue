<template>
	<div>
		<div class="flex gap-8 text-center">
			<div class="flex flex-col">
				<label>{{ $t('Select start date') }}:</label>
				<input
					class="block w-full py-[10px] px-[16px] rounded-[8px] text-neutral_store-800 border"
					type="date"
					@input="updateStartDate"/>
				<span class="text-xs mt-1" v-if="!isValidStartDate && startDate !== ''">{{ $t('Invalid start date') }}</span>
			</div>
			<div class="flex flex-col">
				<label>{{ $t('Select end date') }}</label>
				<input class="block w-full py-[10px] px-[16px] rounded-[8px] text-neutral_store-800 border" type="date" @input="updateEndDate" />
				<span class="text-xs mt-1" v-if="!isValidEndDate && endDate !== ''">{{ $t('Invalid end date') }}</span>
				<span class="text-xs mt-1" v-else-if="endBeforeStart && endDate !== ''">{{ $t('Podaj późniejszą datę ') }}</span>
			</div>
		</div>
		<p class="text-center mt-8">{{ $t('Days between dates') }}: {{ daysBetween }}</p>
	</div>
</template>

<script setup>
import { useDateStore } from '@/stores/dateStore'
import { computed, ref } from 'vue'
import { isDate, isValid, parseISO, getYear } from 'date-fns'

const dateStore = useDateStore()

const startDate = ref('')
const endDate = ref('')

const MIN_YEAR = 1900

const updateStartDate = event => {
	startDate.value = event.target.value
	if (isValidStartDate.value) {
		dateStore.setStartDate(startDate.value)
	} else {
		dateStore.setStartDate('')
	}
}

const updateEndDate = event => {
	endDate.value = event.target.value
	if (isValidEndDate.value) {
		dateStore.setEndDate(endDate.value)
	} else {
		dateStore.setEndDate('')
	}
}

const isValidStartDate = computed(() => {
	const date = parseISO(startDate.value)
	return isValid(date) && isDate(date) && getYear(date) >= MIN_YEAR
})

const isValidEndDate = computed(() => {
	const date = parseISO(endDate.value)
	return isValid(date) && isDate(date) && getYear(date) >= MIN_YEAR
})

const endBeforeStart = computed(() => {
	const start = parseISO(startDate.value)
	const end = parseISO(endDate.value)
	return isValid(start) && isValid(end) && end < start
})

const daysBetween = computed(() => dateStore.daysBetween)
</script>
