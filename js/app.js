const app = Vue.createApp({
    data() {
        return {
            currentDate: {},
            todayEvents: [],
            events: [
                {
                    day: '9 грудня',
                    events: [
                        {
                            time: '15:00',
                            description: 'Турнір з тенісу настільного ',
                            place: 'Клуб «Атлет»'
                        },
                    ],
                    isToday: () => {
                        return true ? this.currentDate.day == 9 
                        && this.currentDate.month == 12 : false
                    }
                },
                {
                    day: '10 грудня',
                    events: [
                        {
                            time: '16:00',
                            description: 'Майстер-клас «Листівка Святому Миколаю»',
                            place: 'Будинок культури мікрорайону Вересневе'
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '10, 11, 14-15, 17,18, 25-30 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '11 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '12-13 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '14 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '14 грудня - 13 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '16 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '16-18 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '17 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '17 - 19 грудня ',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '18 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '18 грудня - 19 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '18 - 20 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '18, 23 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '19 грудня – 24 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '19 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '19 грудня – 20 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '21 – 22 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '21 – 28 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '22 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '22 грудня – 7 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '23 - 24 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '24 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '24 - 27 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '25 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '25 грудня – 19 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '27 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '28 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '28 - 29 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '29 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '30 грудня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: 'Cічень',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '3 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '4 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '5 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '7 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '6-12 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '8 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '8-9 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '9 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '10 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '14 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '15 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '17 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '18 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '19 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '22 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '23 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '23 - 24 січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: 'Протягом грудня, січня',
                    events: [
                        {
                            time: '',
                            description: '',
                            place: ''
                        }
                    ],
                    isToday: () => {
false
                    }
                },                
            ]
        }
    },
    watch: {
        currentDate: function(val, oldVal) {
            if (val.day != oldVal.day) {
                this.todayEvents = [];
                this.events.forEach(element => {
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