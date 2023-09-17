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

//--FACTORY FUNCTION
const toDoFactory = (title, description, dueDate, priority, check, folderName) => {
    return {title, description, dueDate, priority, check, folderName}
};

let folders = [[{title: 'make dinner', description: 'To make dinner at 19pm', dueDate: 'Monday', priority: 'Medium', check: 'Not Done', folderName: 'folder1'},
{title: 'do sport', description: 'To play football at 7am', dueDate: 'Monday', priority: 'Medium', check: 'Not Done', folderName: 'folder1'}],
[{title: '3', description: 'To 3', dueDate: 'Tu', priority: 'Low', check: 'Not Done', folderName: 'folder2'},
{title: '4', description: 'To 4', dueDate: 'Wed', priority: 'High', check: 'Not Done', folderName: 'folder2'}]];

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

    const screenUpdate = () => {
        folderContent.innerHTML += `<h1>${activeFolder[0].folderName}</h1>`;
        activeFolder.forEach( item => {
                folderContent.innerHTML += `<div><span>O</span><span>${item.title}</span><span> ${item.dueDate}</span><span> ${item.priority}</span><span>O</span><span>O</span></div>`
        });
        folderContent.innerHTML += '<button class="addTask">Add</button>';
    };
    screenUpdate();
    

    projects.addEventListener('click', (e) => {
        if (e.target.dataset.indexNumber) {
            activeFolder = folders[e.target.dataset.indexNumber];
            folderContent.innerHTML='';
            screenUpdate();
        }
    })

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