"use strict";
const date = new Date();

const renderCalendar = () => {
    const monthDays = document.querySelector(".days");

    const todayMonth = new Date();

    // 전체 월(month)
    // const month = date.getMonth(); 로 지정하면 index가 0부터 시작하기 때문에 안맞는다.  따라서 각 월(month)로 배열을 만들어준 뒤, 해당 배열에 date.getMonth()를 적용하면 index가 똑같이 0부터 시작한다
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobor", "November", "December"];
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    if (date.getMonth() === todayMonth.getMonth()) {
        document.querySelector(".date p").innerHTML = date.toDateString();
    } else {
        document.querySelector(".date p").innerHTML = null;
    }
    // document.querySelector(".date p").innerHTML = date.toDateString();

    // 현재 월(2월)에서 +1해주면 3월, 0(하루를 빼주면) 전월(2월)의 마지막 일(28일)  = 현 월의 마지막 일(28일)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // 현재 월(2월)에서, 0(하루를 뺴주면) 전월(1월)의 마지막일(31일) = 전 월의 마지막 일(31일)
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // console.log(prevLastDay);

    // 달력에서 현재 월이 시작되는 index   >> 월요일이면 1 출력(일요일부터 0)
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth()).getDay();
    //console.log(firstDayIndex);

    // 달력에서 해당 월의 마지막 일에 해당하는 요일 index  >> 일요일이면 0 출력
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    // console.log(lastDayIndex); 0이 출력된다면 2월의 마지막일의 요일은 일요일이라는 뜻

    const nextDays = 7 - lastDayIndex - 1; // 일요일(0)일 경우 6이 나온다
    // console.log(nextDays);

    let days = "";

    // 이전 월 마지막 날짜(현재 월이 시작되는 index까지 for문을 돌린다)
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    // 현재 월 >> 1일에서 현재 월의 마지막 일(lastDay)까지 for문 반복
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    // 다음 월 초반 날짜
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
