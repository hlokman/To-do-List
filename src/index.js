import './style/style.css';
import { displayController } from './components/eventListeners.JS';

let folders = [];

//to use Web Storage API
function storeProjects() {
    window.localStorage.setItem('user', JSON.stringify(folders))
}

if (localStorage.getItem('user') == null) {
    const project1 = [{folderName: 'Get fit'},{title: 'Make dinner', description: 'To make (healthy) dinner at 19pm', dueDate: '2023-11-12', priority: 'Medium', check: 'Not Done'},
    {title: 'Do sport', description: 'To play football at 7am', dueDate: '2023-11-11', priority: 'Medium', check: 'Done'}];
    const project2 = [{folderName: 'Side projects'}, {title: 'Fix my bike', description: 'Finish the restoration of my old motorcycle', dueDate: '2023-12-01', priority: 'Low', check: 'Not Done'},
    {title: 'Strengthen the foundations of the shack', description: 'The foundations are not strong enough to hold the structure', dueDate: '2024-01-01', priority: 'High', check: 'Not Done'}];
    folders.push(project1);
    folders.push(project2);
} else {
    folders = JSON.parse(window.localStorage.getItem('user'));
}

let activeFolder = folders[0];
displayController();


export {folders, activeFolder, storeProjects}