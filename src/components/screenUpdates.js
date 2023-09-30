import { folders, activeFolder } from '../index';
import { compareAsc, format } from 'date-fns';


const folderContent = document.querySelector('.folderContent');
const projects = document.querySelector('#projects');
const inputs = document.querySelector('.inputs');
const mask = document.querySelector('.mask');


const screenUpdate = () => {
    if (folders.length == 0) { //FOR THE CASE WHERE THE OBJECT IS EMPTY (all objects removed)
        projects.innerHTML='';
        projects.innerHTML='<div class="warning"> Please add a project</div>';
        folderContent.innerHTML= '<div class="warning2">No Project</div>';
    } else {
        //LIST SIDE -> Shows all the general folders
        projects.innerHTML='';
        folders.forEach((item, index) => {
            if (folders.indexOf(activeFolder) == index) { //to put 'class="activeFolder' to the right div
                projects.innerHTML += `<div id="project" class="activeFolder" data-index-number="${index}"> <button class="folderBtn" data-index-number="${index}">${item[0].folderName}</button> <button class="removeFolderBtn" data-index-number="${index}" id="remove"></button></div>`
            } else {
                projects.innerHTML += `<div id="project" data-index-number="${index}"> <button class="folderBtn" data-index-number="${index}">${item[0].folderName}</button> <button class="removeFolderBtn" data-index-number="${index}" id="remove"></div>`
            }
            
        })
        
        //FOLDER CONTENT SIDE -> Shows for activeFolder
        folderContent.innerHTML='';
        folderContent.innerHTML += `<h1>${activeFolder[0].folderName}</h1>`;
        activeFolder.forEach( (item, index) => {
            /**/
            if (index != 0) {
                //Take into account all the cases (status + priority with CSS)
                let newDueDate = item.dueDate.replace(/-/g, '\/');
                newDueDate = format(new Date(newDueDate), 'PP'); //To get the right format to display
                if (item.check == 'Not Done') {
                    folderContent.innerHTML += `<div data-index-number="${index}"><button class="checkBtn" data-index-number="${index}"><img src="../src/style/round-svgrepo-com.svg" id="notDone"></button><span>${item.title}</span><span> ${newDueDate}</span><span class="${item.priority}"> ${item.priority}</span><button data-index-number="${index}" class="eyeBtn"><img src="../src/style/eye.svg" id="see"></button><button data-index-number="${index}" class="editBtn"><img src="../src/style/edit.svg" id="edit"></button><button data-index-number="${index}" class="removeTaskBtn" id="remove"></button></div>`
                } else if (item.check == 'Done') {
                    folderContent.innerHTML += `<div data-index-number="${index}"><button class="checkBtn" data-index-number="${index}"><img src="../src/style/done-ring-round-svgrepo-com.svg" id="done"></button><span>${item.title}</span><span> ${newDueDate}</span><span class="${item.priority}"> ${item.priority}</span><button data-index-number="${index}"class="eyeBtn"><img src="../src/style/eye.svg" id="see"></button><button data-index-number="${index}" class="editBtn"><img src="../src/style/edit.svg" id="edit"></button><button data-index-number="${index}" class="removeTaskBtn" id="remove"></button></div>`
                } 
            }
        });
        folderContent.innerHTML += '<button class="addTask">Add a task</button>';
    };

};


const screenUpdateSee = (event) => {
    inputs.innerHTML = '';
    inputs.innerHTML += `<div class="testInfo"><h3>Description:</h3><p>${activeFolder[event.target.parentNode.dataset.indexNumber].description}</p></div>` 
    + `<div class="testdueDate"><h3>dueDate:</h3><p>${activeFolder[event.target.parentNode.dataset.indexNumber].dueDate}</p></div>` 
    + `<div class="testpriority"><h3>Priority:</h3><p>${activeFolder[event.target.parentNode.dataset.indexNumber].priority}</p></div>`;
    inputs.style.display = '';
    mask.style.display = '';
    inputs.setAttribute('id', 'details');
};


const screenUpdateEdit = (event) => {
    inputs.style.display = '';
    mask.style.display = '';
    const formEdit = document.querySelector('#formEdit'); //Scope logic + var cannot be created before the form being created
    const titleEdit = document.querySelector('#titleEdit'); 
    const descriptionEdit = document.querySelector('#descriptionEdit');
    const dateEdit = document.querySelector('#dueDateEdit');
    const priorityEdit = document.querySelector('#priorityEdit');
    const statusEdit = document.querySelector('#statusEdit');

    titleEdit.setAttribute('value', `${activeFolder[event.target.parentNode.dataset.indexNumber].title}`);
    titleEdit.setAttribute('data-index-number', `${event.target.parentNode.dataset.indexNumber}`); 
    descriptionEdit.innerHTML = `${activeFolder[event.target.parentNode.dataset.indexNumber].description}`;
    dateEdit.setAttribute('value', `${activeFolder[event.target.parentNode.dataset.indexNumber].dueDate}`);

    if (activeFolder[event.target.parentNode.dataset.indexNumber].priority == 'Low') {
        priorityEdit.innerHTML='<option value="High">High</option><option value="Medium">Medium</option><option value="Low" selected>Low</option>';
    } else if (activeFolder[event.target.parentNode.dataset.indexNumber].priority == 'Medium') {
        priorityEdit.innerHTML='<option value="High">High</option><option value="Medium" selected>Medium</option><option value="Low">Low</option>';
    } else if (activeFolder[event.target.parentNode.dataset.indexNumber].priority == 'High') {
        priorityEdit.innerHTML='<option value="High" selected>High</option><option value="Medium">Medium</option><option value="Low">Low</option>';
    };
    //Same logic than the if() above but with the status
    if (activeFolder[event.target.parentNode.dataset.indexNumber].check == 'Done') {
        statusEdit.innerHTML='<option value="Not Done">Not Done</option><option value="Done" selected>Done</option>';
    } else if (activeFolder[event.target.parentNode.dataset.indexNumber].check == 'Not Done') {
        statusEdit.innerHTML='<option value="Not Done" selected>Not Done</option><option value="Done">Done</option>';
    };
};


const invisibleOverlay = () => {
    inputs.style.display = 'none';
    mask.style.display = 'none';
};


const visibleOverlay = () => {
    inputs.style.display = '';
    mask.style.display = '';
};



export { screenUpdate, screenUpdateSee, screenUpdateEdit, invisibleOverlay, visibleOverlay}