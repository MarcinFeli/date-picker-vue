import { defineStore } from 'pinia';
import { differenceInDays, eachDayOfInterval, format } from 'date-fns';

export const useDateStore = defineStore('dateStore', {
  state: () => ({
    startDate: null,
    endDate: null,
    daysBetween: 0,
    generatedData: []
  }),
  actions: {
    setStartDate(date) {
      this.startDate = date;
      this.calculateDaysBetween();
    },
    setEndDate(date) {
      this.endDate = date;
      this.calculateDaysBetween();
    },
    calculateDaysBetween() {
      if (this.startDate && this.endDate && this.startDate <= this.endDate) {
        this.daysBetween = differenceInDays(new Date(this.endDate), new Date(this.startDate));
        this.generateRandomData();
      } else {
        this.daysBetween = 0;
      }
    },
    generateRandomData() {
      if (this.startDate && this.endDate) {
        const interval = eachDayOfInterval({
          start: new Date(this.startDate),
          end: new Date(this.endDate)
        });
        this.generatedData = interval.map(date => ({
          date: format(date, 'yyyy-MM-dd'),
          value: Math.floor(Math.random() * 100)
        }));
      }
    }
  }
});
