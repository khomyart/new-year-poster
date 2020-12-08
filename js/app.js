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
                        return true ? this.currentDate.day == 10 
                        && this.currentDate.month == 12 : false
                    }
                },
                {
                    day: '10, 11, 14-15, 17,18, 25-30 грудня',
                    events: [
                        {
                            time: '15:00',
                            description: 'Новорічні майстер-класи для молодших школярів від дитячої студії розвитку «Маленький Хогвартс»',
                            place: 'Дитяча студія розвитку «Маленький Хогвартс» (вул. Коперника, 8)'
                        }
                    ],
                    isToday: () => {

                    }
                },
                {
                    day: '11 грудня',
                    events: [
                        {
                            time: '15:00',
                            description: 'Турнір з міні-футболу',
                            place: 'Спортивний майданчик (вул. Володимирська, 95а)'
                        },
                        {
                            time: '16:00',
                            description: 'Турнір з шахів з нагоди Дня Святого Миколая',
                            place: 'Клуб «Біла тура»'
                        },
                        {
                            time: '18.00',
                            description: 'Андріївські вечорниці',
                            place: 'Волинський краєзнавчий музей'
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
                            time: '10:00',
                            description: 'XI традиційний турнір з міні-футболу серед ветеранів 40+ «Дружба без кордонів»',
                            place: 'Спорткомплекс ВНУ імені Лесі Українки'
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
                            time: '12:00',
                            description: '«Красна майстерня»: майстер-клас для дітей «Святковий новорічно-різдвяний календар»',
                            place: 'Культурно-мистецький центр «Красне»'
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
                            description: 'Творчий проєкт «Різдвяна майстерня»',
                            place: 'Палац культури міста Луцька (другий корпус)'
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
                            time: '15:00',
                            description: 'Турнір з настільного футболу',
                            place: 'Клуб «Атлет»'
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
                            description: 'Старт благодійного проєкту «Чужих дітей не буває»',
                            place: 'Супермаркети міста'
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
                            time: '16:00',
                            description: 'Відкриття виставки робіт учасників конкурсу малюнків «Місто Святого Миколая»',
                            place: 'Луцька художня школа'
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
                            description: 'Чемпіонат міста Луцька з дзюдо серед навчально-тренувальних груп з нагоди Дня Святого Миколая',
                            place: 'ДЮСШ №2'
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
                            time: '10:00',
                            description: 'Благодійний ярмарок «Хвиля добра»',
                            place: 'Кав’ярня-кондитерія «Старе місто»'
                        },
                        {
                            time: '13:00',
                            description: 'Квест «У пошуках Святого Миколая»',
                            place: 'Початок: від Центру туристичної інформації та послуг'
                        },
                        {
                            time: '14:30',
                            description: 'Міське Свято Миколая для дітей пільгових категорій',
                            place: 'Палац учнівської молоді'
                        },
                        {
                            time: '15:00',
                            description: 'Культурно-мистецька акція «Луцьк – місто Янголів»',
                            place: 'Художній музей'
                        },
                        {
                            time: '15:00',
                            description: 'Відкриття виставки робіт переможців конкурсу «Місто Святого Миколая»',
                            place: 'Арт-галерея «Луцьк»'
                        },
                        {
                            time: '16:00',
                            description: 'Турнір з шашок з нагоди Дня Святого Миколая',
                            place: 'Клуб «Біла тура»'
                        },
                        {
                            time: '18:00',
                            description: 'Відкритий чемпіонат з плавання «Новорічні призи Луцької міської ради»',
                            place: 'СДЮСШОР плавання'
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