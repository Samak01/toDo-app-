let time = document.querySelector('.date');
const btn_tack = document.getElementById('btn-tack');
const add_new_tack = document.querySelector('#add-new-tack');
const tack = document.querySelector('#tack');
const tacksList = document.querySelector('.tacks-list');
const done_tack = document.querySelector('#done');
const deleteTack = document.querySelector('.delete');
const title_list = document.querySelector('.title_list');
const parentNode = document.querySelector(".list-to-do");
const emptyList = document.querySelector('.empty_list');

function firstFormat(value){
    if(value < 10){
        value = '0' + value; 
    }
    return value;
}

function dateTime(){
    let date = new Date();

    let day = firstFormat(date.getDate());
    let month = firstFormat(date.getMonth());
    let year = firstFormat(date.getFullYear());
    // let hour = firstFormat(date.getHours());
    // let minut = firstFormat(date.getMinutes());
    // let second = firstFormat(date.getSeconds());

    return 'Today: ' + day + '.' + month+ '.' +  year; 
}

time.innerHTML = dateTime();
btn_tack.addEventListener('click', addTack);

// if(localStorage.getItem('tackHTML')){
//     tacksList.innerHTML = localStorage.getItem('tackHTML');
// }

function addTack(event){
    event.preventDefault();
    const inputValue = add_new_tack.value;
    const tackHTML = `
        <li class="list-to-do">
            <section class="task" id="tack">${inputValue}</section>
            <div class="donet">
                <button class="done" data-action="done">-</button>
                <button class="delete" data-action = "delete">X</button>
            </div>
        </li>
    `;

        if(inputValue === ''){
            return false;
        }
        else{
            tacksList.insertAdjacentHTML('beforeend', tackHTML);
        }

        
        if(tacksList.children.length > 1){
            emptyList.classList.add('none');
        }else{
            emptyList.classList.remove('none');
        }

    add_new_tack.value = '';
    add_new_tack.focus();

    saveHTMLtoLS();
}



//done and delete tacks
tacksList.onclick = function(event){
    if(event.target.dataset.action === "done"){
        const parentNode = event.target.closest(".list-to-do");
        const tackTitle = parentNode.querySelector('#tack');
        tackTitle.classList.toggle('action');
    }
    else if(event.target.dataset.action === "delete"){
        const parentNode = event.target.closest(".list-to-do");
        parentNode.remove();
        
    };

    if(tacksList.children.length === 0){
        title_list.classList.remove('none');
    }

    
    if(tacksList.children.length > 1){
        emptyList.classList.add('none');
    }else{
        emptyList.classList.remove('none');
    }

    
}