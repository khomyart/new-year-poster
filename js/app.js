const app = Vue.createApp({
    data() {
        return {
            currentDate: {},
            todayEvents: [],
            events: [
                {
                    day: '7 грудня',
                    events: [
                        {
                            time: '10:00',
                            description: 'Пізнавально-розважальне свято Пізнавально-розважальне святоПізнавально-розважальне святоПізнавально-розважальне святоПізнавально-розважальне свято',
                            place: 'біля пам\'ятника св.Миколая'
                        },
                        {
                            time: '13:00',
                            description: 'Пізнавально-розважальне свято',
                            place: 'біля пам\'ятника Лесі Українки'
                        }
                    ],
                    isToday: () => {
                        return true ? this.currentDate.day == 7 
                        && this.currentDate.month == 12 : false
                    }
                },
                {
                    day: '15-18 грудня',
                    events: [
                        {
                            time: '09:30',
                            description: 'Пізнавально-розважальне свято',
                            place: 'біля пам\'ятника Лесі Українки'
                        }
                    ],
                    isToday: () => {
                        return true ? this.currentDate.day >= 15 
                        && this.currentDate.day <= 18 
                        && this.currentDate.month == 12 : false
                    }
                },
                {
                    day: '19 грудня',
                    events: [
                        {
                            time: '10:30',
                            description: 'Святкування дня святого Миколая',
                            place: 'біля пам\'ятника Миколая'
                        }
                    ],
                    isToday: () => {
                        return true ? this.currentDate.day == 10 
                        && this.currentDate.month == 12 : false
                    }
                },
            ]
        }
    },
    watch: {
        currentDate: function(val, oldVal) {
            if (val.day != oldVal.day) {
                console.log('data has been changed')
                this.todayEvents = [];
                this.events.forEach(element => {
                    console.log(element.isToday())
                    if (element.isToday() == true) this.todayEvents.push(element);
                });
            }
        }
    },
    beforeMount(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        this.currentDate = {
            day: parseInt(dd),
            month: parseInt(mm)
        }

        dayLoop = setInterval(() => {
            today = new Date();
            dd = String(today.getDate()).padStart(2, '0');
            mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            this.currentDate = {
                day: parseInt(dd),
                month: parseInt(mm)
            }
        }, 5000)
    },
});

app.mount('#app');