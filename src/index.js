import './style/style.css';
import { displayController } from './components/eventListeners.JS';
import {  screenUpdate, screenUpdateSee, screenUpdateEdit, invisibleOverlay, visibleOverlay } from './components/screenUpdates';
import { toDoFactory } from './components/factoryFunction';

let folders = [];





if (localStorage.getItem('user') == null) {
    const project1 = [{folderName: 'Get fit'},{title: 'Make dinner', description: 'To make (healthy) dinner at 19pm', dueDate: '2023-11-12', priority: 'Medium', check: 'Not Done'},
    {title: 'Do sport', description: 'To play football at 7am', dueDate: '2023-11-11', priority: 'Medium', check: 'Done'}];
    const project2 = [{folderName: 'Side projects'}, {title: 'Fix my bike', description: 'Finish the restoration of my old motorcycle', dueDate: '2023-12-01', priority: 'Low', check: 'Not Done'},
    {title: 'Strengthen the foundations of the shack', description: 'The foundations are not strong enough to hold the structure', dueDate: '2024-01-01', priority: 'High', check: 'Not Done'}];

    folders.push(project1);
    folders.push(project2);

} 

let activeFolder = folders[0];

displayController();

//console.log(folders[0][0].folderName)
//console.log(activeFolder)
console.log(folders.indexOf(activeFolder))

export {folders, activeFolder}