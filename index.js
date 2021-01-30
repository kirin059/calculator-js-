"use strict";

const clickBtn = document.querySelectorAll("input");
const operatorBtn = document.getElementsByClassName("operator"); // 연산 버튼(+, -, *, /, =)  //배열로 저장
const numBtn = document.getElementsByClassName("number"); // 숫자 버튼(0~9)

const previous = document.querySelector(".previous");
const current = document.querySelector(".current");

// 함수 1. 숫자 버튼 + 연산버튼을 누른다(계산식)  >>  current input에 입력이 된다(전체식이 나열되게)
// 함수 2. 숫자 버튼 + 연산버튼을 누른다(계산식)  >>  del 을 누르면 오른쪽부터 하나씩 지워진다
// 함수 3. 숫자 버튼 + 연산버튼을 누른다(계산식)  >>  if (AC) : 다지워진다 / if (=) : 계산된다
// 함수 4. (=) onclick >> current input 내용이 previous로 가고, current에는 연산값이 나온다
// 함수 4. AC 함수 (initCalculation)
// 함수 5. 계산 함수 (initCalculation)

// 버튼 입력 기능
function handleNumber() {
    // 숫자 입력 기능
    for (let i = 0; i < numBtn.length; i++) {
        numBtn[i].addEventListener("click", (e) => {
            // console.log(e.target.value);
            // document.querySelector(".current").value += e.target.value;
            current.value = (current.value += e.target.value).toLocaleString();
        });
    }

    // 연산 기능 버튼(+, -, *, /, =)
    for (let i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener("click", (e) => {
            // console.log(e.target.value);
            current.value += e.target.value;
        });
    }
}
handleNumber();

// 계산(=) 기능
function resultCalculation() {
    const calBtn = document.querySelector(".result");

    calBtn.addEventListener("click", (e) => {
        console.log(e.target.value);
        previous.value = current.value;
        current.value = eval(current.value).toLocaleString();
    });
}
resultCalculation();

// 초기화(AC) 기능
function initCalculation() {
    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", (e) => {
        previous.value = "";
        current.value = "";
    });
}
initCalculation();

// 삭제(del) 기능

function delCalculation() {
    const delBtn = document.querySelector(".del");
    delBtn.addEventListener("click", () => {
        console.log(delBtn);
        current.value = current.value.slice(handleNumber.length, -1);
    });
}
delCalculation();
