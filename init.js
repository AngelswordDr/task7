
document.getElementById('btnGenerate').addEventListener('click', function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surnameName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    if (document.getElementById('patronymicField').classList.contains('hidden')) {
        document.getElementById('patronymicField').classList.remove('hidden');
    }
    if (!(initPerson.patronymicName === " ")) {
        document.getElementById('patronymicOutput').innerText = initPerson.patronymicName;
    } else {
        document.getElementById('patronymicField').classList.add('hidden');
    }
    document.getElementById('jobOutput').innerText = initPerson.jobName;
});

document.getElementById('btnReset').addEventListener('click', function() {
    document.getElementById('firstNameOutput').innerText = 'Генерация имени';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthDayOutput').innerText = 'Генерация дня рождения';
    document.getElementById('birthMonthOutput').innerText = 'Генерация месяца рождения';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('patronymicOutput').innerText = 'Генерация отчества';
    document.getElementById('jobOutput').innerText = 'Генерация професии';
})

