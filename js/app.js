const app = Vue.createApp({
    data() {
        return {
            currentComponent: 'default-welcoming-screen',
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
                    day: '10, 11, 14-15, 17, 18, 25-30 грудня',
                    events: [
                        {
                            time: '15:00',
                            description: 'Новорічні майстер-класи для молодших школярів від дитячої студії розвитку «Маленький Хогвартс»',
                            place: 'Дитяча студія розвитку «Маленький Хогвартс» (вул. Коперника, 8)'
                        }
                    ],
                    isToday: () => {
                        return true ? (this.currentDate.day == 10 
                                    || this.currentDate.day == 11
                                    || (this.currentDate.day >= 14 && this.currentDate.day <= 15)
                                    || this.currentDate.day == 17
                                    || this.currentDate.day == 18
                                    || (this.currentDate.day >= 25 && this.currentDate.day <= 30))
                        && this.currentDate.month == 12 : false
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
                            time: '18:00',
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
                        return true ? (this.currentDate.day >= 12 && this.currentDate.day <= 13)
                            && this.currentDate.month == 12 : false
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
                        return true ? (this.currentDate.day >= 14 && this.currentDate.month == 12)
                                    || (this.currentDate.day <= 13 && this.currentDate.month == 1) : false
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
                        return true ? (this.currentDate.day >= 16 && this.currentDate.day <= 18)
                            && this.currentDate.month == 12 : false
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
                        return true ? (this.currentDate.day >= 17 && this.currentDate.day <= 19)
                            && this.currentDate.month == 12 : false
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
                            time: '17:00',
                            description: 'Відкритий чемпіонат з плавання «Новорічні призи Луцької міської ради»',
                            place: 'СДЮСШОР плавання'
                        },
                        {
                            time: '',
                            description: 'Відкритий чемпіонат КДЮСШ № 1 із стрільби з пневматичної зброї до Дня Святого Миколая',
                            place: 'КДЮСШ № 1'
                        },
                        {
                            time: '',
                            description: 'Чемпіонат міста Луцька з волейболу з нагоди Дня Святого Миколая',
                            place: 'КДЮСШ № 1'
                        },
                        {
                            time: '',
                            description: 'Книжково-ілюстративна онлайн-експозиція «Свято Миколая»',
                            place: 'fb-сторінка Прилуцького будинку культури'
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
                            description: 'Виставка робіт переможців конкурсу «Місто Святого Миколая»',
                            place: 'Арт-галерея «Луцьк»'
                        }
                    ],
                    isToday: () => {
                        return true ? (this.currentDate.day >= 18 && this.currentDate.month == 12)
                                    || (this.currentDate.day <= 19 && this.currentDate.month == 1) : false
                    }
                },
                {
                    day: '18 - 20 грудня',
                    events: [
                        {
                            time: '16:00',
                            description: 'Привітання дітей Жидичинського, Княгининівського, Заборольського, Прилуцького старостинського округів  «Казкова подорож Святого Миколая»',
                            place: ''
                        },
                        {
                            time: '17:00',
                            description: 'Привітання дітей Жидичинського, Княгининівського, Заборольського, Прилуцького старостинського округів  «Казкова подорож Святого Миколая»',
                            place: ''
                        },
                        {
                            time: '18:00',
                            description: 'Привітання дітей Жидичинського, Княгининівського, Заборольського, Прилуцького старостинського округів  «Казкова подорож Святого Миколая»',
                            place: ''
                        },
                        {
                            time: '19:00',
                            description: 'Привітання дітей Жидичинського, Княгининівського, Заборольського, Прилуцького старостинського округів  «Казкова подорож Святого Миколая»',
                            place: ''
                        },
                        {
                            time: '20:00',
                            description: 'Привітання дітей Жидичинського, Княгининівського, Заборольського, Прилуцького старостинського округів  «Казкова подорож Святого Миколая»',
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
                            description: 'Майстерки з виготовлення різдвяної атрибутики із залученням дітей, молоді та активістів громадських організацій міста Луцька',
                            place: 'Волинська обласна бібліотека для юнацтва'
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
                            description: 'Мистецький проєкт «Вулиця Різдвяних янголів»',
                            place: 'вул. Лесі Українки'
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
                            description: 'День Святого Миколая для дітей-сиріт та дітей, позбавлених батьківського піклування',
                            place: 'Волинський обласний спеціалізований будинок дитини'
                        },
                        {
                            time: '10:00',
                            description: 'Акція «Миколай пам’ятає про всіх»',
                            place: 'майданчик біля пам’ятника Святому Миколаю'
                        },
                        {
                            time: '10:00',
                            description: 'Відкритий чемпіонат з плавання «Новорічні призи Луцької міської ради»',
                            place: 'СДЮСШОР плавання'
                        },
                        {
                            time: '11:00',
                            description: 'Відеосеанс з пісочної анімації «Миколаю, Миколаю, всі на тебе ми чекаєм»',
                            place: 'Будинок культури мікрорайону Вересневе'
                        },
                        {
                            time: '15:00',
                            description: 'Екскурсія «Святий Миколай і Луцьк»',
                            place: 'Початок: від Центру туристичної інформації та послуг'
                        },
                        {
                            time: '16:00',
                            description: 'Дитяче свято «Іде у гості Миколай»',
                            place: 'Луцька музична школа №3'
                        },
                        {
                            time: '16:30',
                            description: 'Урочисте засвічення вогнів головної новорічної ялинки. Передача Вифлеємського вогню громаді',
                            place: 'Театральний майдан'
                        },
                        {
                            time: '16:30',
                            description: 'Засвічення вогнів новорічних ялинок',
                            place: 'Площа Героїв Майдану, села: Прилуцьке, Забороль, Княгининок'
                        },
                        {
                            time: '17:00',
                            description: 'Концерт «Свято Миколая»',
                            place: 'Луцька музична школа №2'
                        },
                        {
                            time: '',
                            description: 'Загальноміський захід «На гостини до Святого Миколая»',
                            place: 'Свято-Миколаївський Жидичинський монастир'
                        },
                        {
                            time: '',
                            description: 'Відеоперегляд малюнків учнів Луцької художньої школи «На Святого Миколая, в небі іскорка палає»',
                            place: 'fb-сторінка  Клубу «Сучасник»'
                        },
                        {
                            time: '',
                            description: 'Онлайн інтерактив  для дітей «Хуртовина загадок»',
                            place: 'fb-сторінка  Палацу культури міста Луцька'
                        },
                        {
                            time: '',
                            description: 'Мистецька онлайн година «Миколай мандрує світом»',
                            place: 'fb-сторінка Культурно-мистецького центру «Красне»'
                        },
                        {
                            time: '',
                            description: 'Флешмоб «Засвіти ялинку вдома»',
                            place: 'Соціальні мережі'
                        },
                        {
                            time: '',
                            description: 'Чемпіонат м. Луцька з волейболу з нагоди Дня Святого Миколая',
                            place: 'КДЮСШ № 1'
                        },
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
                            description: 'Відкритий кубок м. Луцька з баскетболу «Миколайчик-2020»',
                            place: 'КДЮСШ № 1'
                        },
                        {
                            time: '',
                            description: 'Чемпіонат з гімнастики художньої серед навчально-тренувальних груп до Дня Святого Миколая',
                            place: 'ДЮСШ № 2'
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
                            time: '15:00',
                            description: 'Святкові майстер-класи для дітей',
                            place: 'Арт-локація «Творчий Калейдоскоп» (вул. Винниченка, 67а)'
                        },
                        {
                            time: '',
                            description: 'Новорічне свято «Ялинка на воді»',
                            place: 'КДЮСШ № 1'
                        },
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
                            description: 'Новорічні заходи',
                            place: 'Заклади освіти громади'
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
                            time: '14:30',
                            description: 'Міське новорічне свято для дітей пільгових категорій',
                            place: 'Палац учнівської молоді'
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
                            description: 'Міжнародний онлайн марафон «Бабусине Різдво», конкурс представлення традицій святкування Різдва Христового у різних країнах світу та регіонах України',
                            place: 'Соціальні мережі'
                        },

                    ],
                    isToday: () => {
false
                    }
                },
                {
                    day: '23 грудня',
                    events: [
                        {
                            time: '14:30',
                            description: 'Міське новорічне свято для дітей, батьки яких є учасниками бойових дій з числа учасників АТО/ООС',
                            place: 'Палац учнівської молоді'
                        },
                        {
                            time: '',
                            description: 'Новорічний чемпіонат з настільного тенісу серед навчально-тренувальних груп',
                            place: 'ДЮСШ № 2'
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
                            time: '11:00',
                            description: 'Майстер-клас з виготовлення ялинкових прикрас',
                            place: 'Палац культури міста Луцька'
                        },
                        {
                            time: '14:30',
                            description: 'Міське новорічне свято для обдарованих дітей',
                            place: 'Палац учнівської молоді'
                        },
                        {
                            time: '16:00',
                            description: 'Мистецька акція «Зроби новорічну прикрасу своїми руками»',
                            place: 'Будинок культури мікрорайону Вересневе'
                        },
                        {
                            time: '',
                            description: 'Фотоконкурс «Моя_ялинка»',
                            place: 'Соціальні мережі'
                        },
                        {
                            time: '',
                            description: 'Новорічний чемпіонат з настільного тенісу серед навчально-тренувальних груп',
                            place: 'ДЮСШ № 2'
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
                            description: 'ІІІ відкритий чемпіонат КДЮСШ № 1 з боротьби вільної',
                            place: 'КДЮСШ № 1'
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
                            description: 'Відеопроєкт «Європейське Різдво»',
                            place: 'Соціальні мережі'
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
                            description: 'Фотоконкурс «#тутЄсвято»',
                            place: 'Соціальні мережі'
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
                            time: '12:00',
                            description: '«Красна майстерня»: хенд-мейд для дітей «Карнавальні маски»',
                            place: 'Культурно-мистецький центр «Красне»'
                        },
                        {
                            time: '16:00',
                            description: 'Мистецький колаж «Новорічні сни»',
                            place: 'fb-сторінка  Палацу культури міста Луцька'
                        },
                        {
                            time: '',
                            description: 'Майстер-клас з виготовлення новорічної іграшки за технікою «канзаши»',
                            place: 'fb-сторінка Клубу «Сучасник»'
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
                            time: '12:00',
                            description: 'Музично-інтерактивний імпровіз «Новий рік на поріг»',
                            place: 'Культурно-мистецький центр «Красне»'
                        },
                        {
                            time: '',
                            description: 'Онлайн інтерактив для дітей «Хуртовина загадок»',
                            place: 'fb-сторінка  Палацу культури міста Луцька'
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
                            time: '12:00',
                            description: 'Музично-інтерактивний імпровіз «Новий рік на поріг»',
                            place: 'Культурно-мистецький центр «Красне»'
                        },
                        {
                            time: '15:00',
                            description: 'Новорічний концерт гурту «Волиняни»',
                            place: 'Луцька музична школа №3'
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
                            description: 'Виставка робіт учнів Луцької художньої школи на різдвяну тематику',
                            place: 'Луцька художня школа'
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
                            time: '12:00',
                            description: 'Музично-інтерактивний імпровіз «Новий рік на поріг»',
                            place: 'Культурно-мистецький центр «Красне»'
                        },
                        {
                            time: '14:00',
                            description: 'Дитячий ранок «Новий рiк на порiг»',
                            place: 'Теремнівський будинок культури'
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
                            time: '11:00',
                            description: 'Онлайн майстер-клас з виготовлення різдвяних сувенірів',
                            place: 'fb-сторінка  Палацу культури міста Луцька'
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
                            time: '16:00',
                            description: 'Онлайн майстер-клас з пісочної анімації «Різдвяні візерунки»',
                            place: 'fb-сторінка  Палацу культури міста Луцька'
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
                            description: 'Онлайн-фестиваль вертепів «З Різдвом Христовим!»',
                            place: 'Соціальні мережі'
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
                            description: 'Відеопроєкт «Українське Різдво»',
                            place: 'Соціальні мережі'
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
                            time: '15:00',
                            description: 'Екскурсія «Різдвяний Луцьк»',
                            place: 'Початок: від Центру туристичної інформації та послуг'
                        },
                        {
                            time: '',
                            description: 'Відеоперегляд  малюнків учнів Луцької художньої школи «Славим Тебе, Небесний Царю»',
                            place: 'fb-сторінка  Клубу «Сучасник»'
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
                            time: '18:00',
                            description: 'Фінал благодійного проєкту «Чужих дітей не буває»',
                            place: 'Готель «Світязь»'
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
                            description: 'Різдвяні онлайн-віншування',
                            place: 'fb-сторінка Прилуцького  будинку культури'
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
                            time: '12:00 - 21:00',
                            description: 'Фестиваль «Різдво у Луцьку»',
                            place: 'Театральний майдан, Палац культури міста Луцька, вул. Лесі Українки'
                        },
                        {
                            time: '12:00',
                            description: '«Красна майстерня»: майстер-клас для дітей з аплікації «Зимові візерунки»',
                            place: 'Культурно-мистецький центр «Красне»'
                        },
                        {
                            time: '17:00',
                            description: 'Громадська акція «Спільна коляда»',
                            place: 'Театральний майдан'
                        },
                        {
                            time: '17:00',
                            description: 'Різдвяні вечорниці',
                            place: 'Луцька музична школа №3'
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
                            time: '18:00',
                            description: 'Новорічно-різдвяний концерт «І сталось диво...»',
                            place: 'Палац культури міста Луцька'
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
                            description: 'Відеосюжет «Зима в об’єктиві»',
                            place: 'fb-сторінка  Клубу «Сучасник»'
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
                            time: '15:00',
                            description: 'Концерт «Новорічний коктейль» за участі народного аматорського духового оркестру',
                            place: 'Палац культури міста Луцька'
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
                            description: 'Відеопроєкт «Круговерть» учасників школи брейк-дансу «IRON CITI»',
                            place: 'fb-сторінка  Клубу «Сучасник»'
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
                            description: 'Фестиваль колядок та щедрівок «Різдвяні піснеспіви»',
                            place: 'Театральний майдан, вул. Лесі Українки'
                        },
                        {
                            time: '11:00',
                            description: 'Свято Водохреща   «Там на річці, на Йордані»',
                            place: 'Мікрорайон Теремно'
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
                            time: '17:00',
                            description: 'Святковий концерт «Неповторна мить Різдва»',
                            place: 'Луцька музична школа №1 імені Фридерика Шопена'
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
                            time: '10:00',
                            description: 'Всеукраїнський фестиваль-конкурс спортивного бального танцю «Різдвяні зірочки 2021»',
                            place: 'Палац культури міста Луцька'
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
                            description: 'Благодійний турнір з художньої гімнастики пам’яті Миколи Романюка',
                            place: 'ДЮСШ №3'
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
                            description: '«Новорічне свято спорту». Підведення підсумків за 2020 рік для мешканців мікрорайонів міста',
                            place: 'приміщення ЛМЦФЗН «Спорт для всіх» у мікрорайонах міста'
                        },
                        {
                            time: '',
                            description: `Різдвяний ярмарок виробів майстрів народних ремесел. Новорічні інсталяції, фотозони`,
                            place: 'Театральний майдан'
                        },
                        {
                            time: '',
                            description: 'Всеукраїнська акція «Спортивна зима» для дітей (естафети, катання на ковзанах)',
                            place: 'приміщення ЛМЦФЗН «Спорт для всіх»'
                        },
                        {
                            time: '',
                            description: 'Онлайн фотоконкурс «Святковий Луцьк, який ви любите»',
                            place: 'Соціальні мережі'
                        },
                        {
                            time: '',
                            description: 'Новорічно-різдвяні заходи',
                            place: 'у бібліотеках громади'
                        }
                    ],
                    isToday: () => {
                        return true ? this.currentDate.month == 1
                                || this.currentDate.month == 12 : false
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
    methods: {
        changeComponent(changeTo) {
            let audio = new Audio('/sfx/bells.mp3');
            audio.play();
            this.currentComponent = changeTo
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

app.component('default-welcoming-screen', {
    template: `
    <div class="root-welcoming-window">
        <div class="welcoming-window-text-decor">
        <img src="/img/text-separator.png" style="width: 100%;" alt="">
    </div>
    <div class="welcoming-window-text">
        <span class="welcoming-window-text-header">
            Ласкаво просимо!
        </span>
        <br>
        <br>
        <br>
        <span class="welcoming-window-text-regular">
            Свято починається з 9 грудня і триває до 24 січня!
            <br>
            Прогорніть нижче, щоб дізнатися деталі
        </span>
    </div>
    <div class="welcoming-window-button-holder">
        <div class="welcoming-window-button" v-on:click="$emit('change-component', 'greetings-welcoming-screen')">
            <img src="/img/bells_button.png" style="width: 100%;" alt="">
        </div>
    </div>
    </div>
    `,
    emits: ["change-component"]
})

app.component('greetings-welcoming-screen', {
    template: `
    <div class="root-welcoming-window">
    <div class="greeting-welcoming-window-text-decor">
    <img src="/img/text-separator_lamps.png" style="width: 100%;" alt="">
</div>
<div class="greeting-welcoming-window-text d-flex flex-column align-items-center col-11 col-md-7 ">
    <div class="greeting-welcoming-window-text-header">
        &emsp;Мої найщиріші вітання з нагоди новорічно-різдвяних свят!
        Зичу здоров’я, миру, добробуту, Божого благословення і багато святкових радостей!
    </div>
    <div class="greeting-welcoming-window-text-footer mt-4 d-flex flex-row align-items-center justify-content-between">
        <div>
            <div class="greeting-welcoming-window-button-holder">
                <div class="greeting-welcoming-window-button" v-on:click="$emit('change-component', 'default-welcoming-screen')">
                    <img src="/img/bells_button.png" style="width: 100%;" alt="">
                </div>
            </div>
        </div>
        <div>
            <p>
                Луцький міський голова
            </p>
            <p>
                Ігор Поліщук
            </p>
        </div>
    </div>
    </div>
</div>
    `,
    emits: ["change-component"]
})

app.mount('#app');