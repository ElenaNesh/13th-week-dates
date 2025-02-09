let birthday=document.getElementById('bday');
let calcBtn=document.getElementById('calcBtn');
let daysLeft=document.getElementById('daysLeft');
let alert=document.getElementById('alert');


calcBtn.addEventListener('click', 
    function() {
        alert.textContent='';
        daysLeft.textContent='';
        let bday=new Date (birthday.value);
        let today=new Date();

        if (isNaN(bday.getTime())) {
            alert.textContent='Пожалуйста, введите полную дату рождения';
            return;
        } 
        // если bday не число, то ретурн прерывает выполнение функции и возвращает ошибку;
        let nextBday=new Date(today.getFullYear(), bday.getMonth(), bday.getDate());
        if (nextBday.getDate()===today.getDate() && nextBday.getMonth()===today.getMonth()) {
            daysLeft.textContent='Поздравляем с Днем Рождения!';
            return;
            }

        if (nextBday<today) {
            nextBday.setFullYear(today.getFullYear()+1);
            }
        let difTime=Math.ceil((nextBday-today)/(1000*60*60*24));
        let days;
        if (difTime % 10 === 1 && difTime % 100 !== 11) { 
            // если число заканчивается на 1 за исключением 11
            days='день';} 
            else if ([2,3,4].includes(difTime%10)&&![12,13,14].includes(difTime%100)) {
                // %10 рассматривает последнюю цифру, чтобы она была 2, 3 или 4, а %100 рассматривает две последние цифры, т.е. чтоб они не были 12,13 или 14, потому что для 12-14 правильно будет "дней"
                days='дня'} 
            else {
                days='дней'
                };
        daysLeft.textContent=`До следующего дня рождения осталось ${difTime} ${days}`;
            })
            
            
