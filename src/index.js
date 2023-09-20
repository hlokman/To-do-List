import './style/style.css';
import { compareAsc, format } from 'date-fns';

/**/
format(new Date(2014, 1, 11), 'yyyy-MM-dd');

/*const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
];
console.log(dates[1]);
dates.sort(compareAsc);
console.log(dates);
const test = new Date(2023, 9, 1);
console.log(test);*/


const folderContent = document.querySelector('.folderContent');
const projects = document.querySelector('#projects');
const addTask = document.querySelector('.addTask');
const addFolder = document.querySelector('.addFolder');
const formTask = document.querySelector('#formTask');
const formFolder = document.querySelector('#formFolder');
const checkBtn = document.querySelector('.checkBtn');
const test = document.querySelector('.test');
const formEdit = document.querySelector('#formEdit');
//Form placeholder
const titleEdit = document.querySelector('#titleEdit');
const descriptionEdit = document.querySelector('#descriptionEdit');
const dateEdit = document.querySelector('#dueDateEdit');
const priorityEdit = document.querySelector('#priorityEdit');



//--FACTORY FUNCTION
const toDoFactory = (title, description, dueDate, priority, check /*, folderName*/) => {
    return {title, description, dueDate, priority, check,/* folderName*/}
};

let folders = [[{folderName: 'folder1'},{title: 'make dinner', description: 'To make dinner at 19pm', dueDate: '2023-09-12', priority: 'Medium', check: 'Not Done'},
{title: 'do sport', description: 'To play football at 7am', dueDate: '2023-11-11', priority: 'Medium', check: 'Done'}],
[{folderName: 'folder2'}, {title: '3', description: 'To 3', dueDate: '2023-12-12', priority: 'Low', check: 'Not Done'},
{title: '4', description: 'To 4', dueDate: '2024-01-01', priority: 'High', check: 'Not Done'}]];

/*const test1 = toDoFactory('make dinner', 'To make dinner at 19pm', 'Monday', 'Medium', 'Not Done', 'folder1');
const test2 = toDoFactory('do sport', 'To play football at 7am', 'Monday', 'Medium', 'Not Done', 'folder1');
let folder1  = [test1, test2];
folders.push(folder1);
const test3 = toDoFactory('3', 'To 3', 'Tu', 'Low', 'Not Done', 'folder2');
const test4 = toDoFactory('4', 'To 4', 'Wed', 'High', 'Not Done', 'folder2');
let folder2 = [test3, test4];
folders.push(folder2);*/
console.log(folders);
console.log(folders[0][1].title);

/*"form": {
    "description": "to work out to get fit. ndsffdssfdfsdsfdsdfsdfsdfsd", 
    "due_date": "2023-11-11", 
    "priority": "medium", 
    "title": "Workout"
}, */


//--DISPLAY CONTROLLER (?)
const displayController = (() => {
    let activeFolder = folders[0];
    let getActiveFolder = () => activeFolder;

    //----------screen update
    const screenUpdate = () => {
        folderContent.innerHTML += `<h1>${activeFolder[0].folderName}</h1>`;
        activeFolder.forEach( (item, index) => {
            if (index != 0) {
                if (item.check == 'Not Done') {
                    folderContent.innerHTML += `<div data-index-number="${index}"><button class="checkBtn" data-index-number="${index}"><img src="../src/style/round-svgrepo-com.svg" id="notDone"></button><span>${item.title}</span><span> ${item.dueDate}</span><span> ${item.priority}</span><button data-index-number="${index}" class="eyeBtn"><img src="../src/style/eye.svg" id="see"></button><button data-index-number="${index}" class="editBtn"><img src="../src/style/edit.svg" id="edit"></button><button data-index-number="${index}"><img src="../src/style/cross.svg" id="remove"></button></div>`
                } else if (item.check == 'Done') {
                    folderContent.innerHTML += `<div data-index-number="${index}"><button class="checkBtn" data-index-number="${index}"><img src="../src/style/done-ring-round-svgrepo-com.svg" id="done"></button><span>${item.title}</span><span> ${item.dueDate}</span><span> ${item.priority}</span><button data-index-number="${index}"class="eyeBtn"><img src="../src/style/eye.svg" id="see"></button><button data-index-number="${index}" class="editBtn"><img src="../src/style/edit.svg" id="edit"></button><button data-index-number="${index}"><img src="../src/style/cross.svg" id="remove"></button></div>`
                }
            }
        });
        folderContent.innerHTML += '<button class="addTask">Add</button>';
        console.log(activeFolder);

    };
    screenUpdate();

    //------------eventListener to change the check status + remove trigger + edit trigger
    folderContent.addEventListener('click', (e) => {
        //console.log(e.target.parentNode.dataset.indexNumber)
        if (e.target.id == 'notDone') {
            activeFolder[e.target.parentNode.dataset.indexNumber].check = 'Done';
            folderContent.innerHTML='';
            screenUpdate()
        } else if (e.target.id == 'done') {
            activeFolder[e.target.parentNode.dataset.indexNumber].check = 'Not Done';
            folderContent.innerHTML='';
            screenUpdate()
        }
        //console.log(e.target.innerHTML='<img src="../src/style/done-ring-round-svgrepo-com.svg" id="done">';)

        if (e.target.id == 'see') {
            console.log('see trigger');
            console.log(e.target.parentNode.dataset.indexNumber);
            test.innerHTML = '';
            test.innerHTML += `<div class="testInfo"><h3>Description:</h3><p>${activeFolder[e.target.parentNode.dataset.indexNumber].description}</p></div>` 
            + `<div class="testdueDate"><h3>dueDate:</h3><p>${activeFolder[e.target.parentNode.dataset.indexNumber].dueDate}</p></div>` 
            + `<div class="testpriority"><h3>Priority:</h3><p>${activeFolder[e.target.parentNode.dataset.indexNumber].priority}</p></div>`;
        }

        if (e.target.id == 'edit') {
            //MAYBE MAKE A DIFFERENT FORM THE TASK'S ONE APPEAR TO AVOID ADDING AN ELEMENT WHILE EDITING (WITH DIFFERENT SUBMIT LOGIC) (ONGOING)
            console.log('edit trigger');
            console.log(e.target.parentNode.dataset.indexNumber);
            titleEdit.setAttribute('value', `${activeFolder[e.target.parentNode.dataset.indexNumber].title}`);
            descriptionEdit.innerHTML = `${activeFolder[e.target.parentNode.dataset.indexNumber].description}`;
            dateEdit.setAttribute('value', `${activeFolder[e.target.parentNode.dataset.indexNumber].dueDate}`);
            //formPriority.setAttribute('value', `${activeFolder[e.target.parentNode.dataset.indexNumber].priority}`);
            //!!! MAKE SURE TO ERASE ATTRIBUTES AND PUT EVERYTHING BACK TO PREVIOUS STATE BECAUSE WE CHANGE THE ATTRIBUTES OR INNERHTML
            if (activeFolder[e.target.parentNode.dataset.indexNumber].priority == 'Low') {
                priorityEdit.innerHTML='<option value="high">High</option><option value="medium">Medium</option><option value="low" selected>Low</option>';
            } else if (activeFolder[e.target.parentNode.dataset.indexNumber].priority == 'Medium') {
                priorityEdit.innerHTML='<option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option>';
            } else if (activeFolder[e.target.parentNode.dataset.indexNumber].priority == 'High') {
                priorityEdit.innerHTML='<option value="high" selected>High</option><option value="medium">Medium</option><option value="low">Low</option>';
            }
        }

        if (e.target.id == 'remove') {
            activeFolder.splice((e.target.parentNode.dataset.indexNumber), 1);
            folderContent.innerHTML='';
            screenUpdate();
            console.log(activeFolder);
        }
    })

    //----eventListener to change activeFolder when folder clicked on lists
    projects.addEventListener('click', (e) => {
        if (e.target.dataset.indexNumber) {
            activeFolder = folders[e.target.dataset.indexNumber];
            folderContent.innerHTML='';
            screenUpdate();
            console.log(activeFolder);
        }
    });

    //----Folder's Form logic
    formFolder.addEventListener('submit', (e) => {
        e.preventDefault();
        //console.log(e.currentTarget.folderName.value);
        const newFolder = [{folderName: e.currentTarget.folderName.value}];
        folders.push(newFolder);
        projects.innerHTML += `<div class="${e.currentTarget.folderName.value}"> <button class="folderBtn" data-index-number="${folders.length - 1}">${e.currentTarget.folderName.value}</button> </div>`
        console.log(activeFolder);



    })

    //------Task's Form logic
    //console.log(displayController.getActiveFolder())
    formTask.addEventListener('submit', (e) => {
        e.preventDefault();
        //console.log(e.currentTarget.title.value);
        const newTask = toDoFactory((e.currentTarget.title.value), (e.currentTarget.description.value), (e.currentTarget.dueDate.value), (e.currentTarget.priority.value), 'Not Done'/*, undefined*/);
        activeFolder.push(newTask);
        folderContent.innerHTML='';
        screenUpdate();
        formTask.reset();
    })

    return {}

})()


//-ADD ELEMENTS
const addElement = (() => {
})()
















/*projects.addEventListener('click', (e) => {
    //console.log(e.target.dataset.indexNumber)
    if (e.target.dataset.indexNumber) {
        folderContent.innerHTML='';
        folderContent.innerHTML += `<h1>${e.target.innerHTML}</h1>`;

        /*folder1.forEach( item => {
            folderContent.innerHTML += `<div><span>O</span><span>${item.title}</span><span> ${item.dueDate}</span><span> ${item.priority}</span><span>O</span><span>O</span></div>`
        });*//*

        folderContent.innerHTML += '<button class="addTask">Add</button>'
    } 
});*/







/*const folderCreate = (name) => {
    const obj = {};
    obj[name] = name
    return {obj}
};*/




/*const test1 = toDoFactory('make dinner', 'To make dinner at 19pm', 'Monday', 'Medium', 'Not Done');
const test2 = toDoFactory('do sport', 'To play football at 7am', 'Monday', 'Medium', 'Not Done');
const test3 = toDoFactory('3', 'To play football at 7am', 'Monday', 'Medium', 'Not Done');
const test4 = toDoFactory('4', 'To play football at 7am', 'Monday', 'Medium', 'Not Done');
let folder1 = [test1, test2, test3, test4]
console.log(folder1);*/


//console.log(typeof(folder1[0].title)) 
//console.log('do sport'.split(' ').join('_'))
//console.log('do_sport'.split('_').join(' '))