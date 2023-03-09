// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия.
// Каждый элемент масива — объект,содержащий свойства: name, sName, age, occupation, 
// и метод show, который выводит всю информацию о пользователе.Реализовать заполнение 
// массива пользователем.По окончанию заполнения — вывести информацию о сотрудниках.


    
//     4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 9000;
//            • "manager" — 1500;
//            • "programmer" — 10000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.
   


// 1) Open/close modal

const btnOpen = document.querySelector('.openBtn');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__closeBtn');
const modalBody = document.querySelector('.modal__body');
const resultContainer = document.getElementById('result');

btnOpen.addEventListener('click', toggleModalVisible);
modalCloseBtn.addEventListener('click', toggleModalVisible);
modal.addEventListener('click', toggleModalVisible);
modalBody.addEventListener('click', (event)=>{event.stopPropagation()})

function toggleModalVisible(event) {
    modal.classList.toggle('hide');
    event.stopPropagation();
}

// 2) Accept input values and add to new array

const employeesData = [];
const employeeName = document.querySelector('#name');
const employeeSubname = document.querySelector('#subname');
const employeeAge = document.querySelector('#age');
const employeeOccupation = document.querySelector('#occupation');
const enterBtn = document.querySelector('.modal__enterBtn');
const showBtn = document.querySelector('.modal__showBtn');

enterBtn.addEventListener('click', addData);
showBtn.addEventListener('click', toggleModalVisible);
showBtn.addEventListener('click', showResults);

function addData() {
    const newDataObj = new Object();
    
    newDataObj.name = employeeName.value;
    newDataObj.subname = employeeSubname.value;
    newDataObj.age = employeeAge.value;
    newDataObj.occupation = employeeOccupation.value;
    addNewValue();

    function addNewValue() {
        switch (newDataObj.occupation.toLowerCase()) {
            case "director": newDataObj.salary = '9000'; break;
            case "manager": newDataObj.salary = '1500'; break;
            case "programmer": newDataObj.salary = '12000'; break;
            default: newDataObj.salary = '1000';

        }
            console.log(newDataObj);
    }
    newDataObj.show = function () {
        const tbody = document.createElement('tbody');
        const tableRow = document.createElement('tr');
        for (key in newDataObj) {
            if (key == 'show') continue; 

   const td = document.createElement('td');
            td.innerHTML = newDataObj[key];
            tableRow.appendChild(td);
        }
        tbody.appendChild(tableRow);
        resultContainer.appendChild(tbody);
        
        
    }
    
    employeesData.push(newDataObj);
    employeeName.value = '';
    employeeSubname.value = '';
    employeeAge.value = '';
    employeeOccupation.value = '';
    
}

// 3) Show results

function showResults() {
    resultContainer.innerHTML = '';
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    if (employeesData.length == 0) return;

    for (key in employeesData[0]) {
        if (key == 'show') continue;

        const th = document.createElement('th');

        th.innerText = key;
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    resultContainer.appendChild(thead);
    for (let i = 0; i < employeesData.length; i++){
        employeesData[i].show();
    }
}