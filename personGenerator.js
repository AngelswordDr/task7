const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    maleJobsJson: `{
        "count": 10,
        "list": {     
            "id_1": "Врач-Гинеколог",
            "id_2": "Летчик",
            "id_3": "Повар",
            "id_4": "Космонавт",
            "id_5": "Пожарный",
            "id_6": "Шахтер",
            "id_7": "Нефтяник",
            "id_8": "Мясник",
            "id_9": "Слесарь",
            "id_10": "Автомеханик"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ира",
            "id_2": "Екатерина",
            "id_3": "Елизавета",
            "id_4": "Ольга",
            "id_5": "Кристина",
            "id_6": "Снежана",
            "id_7": "Анастасия",
            "id_8": "Ульяна",
            "id_9": "Алиса",
            "id_10": "Антонина"
        }
    }`,
    femaleJobsJson: `{
        "count": 10,
        "list": {     
            "id_1": "Аналитик данных",
            "id_2": "UX/UI-дизайнер",
            "id_3": "SMM-специалист",
            "id_4": "Тестировщик ПО",
            "id_5": "Интернет-маркетолог",
            "id_6": "Веб-дизайнер",
            "id_7": "Парикмахер-стилист",
            "id_8": "Специалист технологий индустрии красоты",
            "id_9": "Менеджер маркетплейсов",
            "id_10": "Стилист"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Владимирович",
            "id_2": "Александрович",
            "id_3": "Николаевич",
            "id_4": "Сергеевич",
            "id_5": "Алексеевич",
            "id_6": "Дмитриевич",
            "id_7": "Андреевич",
            "id_8": "Михайлович",
            "id_9": "Юрьевич",
            "id_10": "Иванович"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];        
    },

    randomPatronymic: function (gender) {
        if (gender) {
            return this.randomValue(this.patronymicJson);
        } else {
            return " ";
        }
    },

    randomJob: function (gender) {
        if (gender) {
            return this.randomValue(this.maleJobsJson);
        } else {
            return this.randomValue(this.femaleJobsJson);
        }
    },

    randomDay: function (month) {
        if (month === 'февраля') {
            return Math.floor(Math.random() * 27 + 1);
        }
        if (month === 'апреля' || month === 'июня' || month === 'сентября' || month === 'ноября') {
            return Math.floor(Math.random() * 29 + 1);
        }
            else {
            return Math.floor(Math.random() * 30 + 1);
        }
    },

    randomFirstName: function(gender) {
        if (gender) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomYear: () =>  Math.floor(Math.random() * 34 + 1970),

    femaleSurname: function (surname) {
        return surname + "a";
    },

    randomSurname: function(gender) {
        if (gender) {
            return this.randomValue(this.surnameJson);
        } else {
            const surname = this.randomValue(this.surnameJson);
            return this.femaleSurname(surname);
        }
    },

    randomGender: function() {
        const randomIntGender = Math.round(Math.random());
        if (randomIntGender === 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },


    getPerson: function () {
        this.person = {};
        this.person.birthDay = this.randomDay(this.person.birthMonth);
        this.person.birthMonth = this.randomValue(this.monthJson);
        this.person.birthYear = this.randomYear();
        this.person.gender = this.randomGender();
        this.person.firstName = (this.person.gender === 'Мужчина') ? this.randomFirstName(true) : this.randomFirstName(false);
        this.person.surnameName = (this.person.gender === 'Мужчина') ? this.randomSurname(true) : this.randomSurname(false);
        this.person.patronymicName = (this.person.gender === 'Мужчина') ? this.randomPatronymic(true) : this.randomPatronymic(false);
        this.person.jobName = (this.person.gender === 'Мужчина') ? this.randomJob(true) : this.randomJob(false);
        return this.person;
    }
};