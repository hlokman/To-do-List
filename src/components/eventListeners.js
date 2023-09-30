import {renderFormEdit, renderFormFolder, renderFormTask} from './renderForms';
import { screenUpdate, screenUpdateSee, screenUpdateEdit, invisibleOverlay, visibleOverlay } from './screenUpdates';
import { toDoFactory } from './factoryFunction';
import { folders, activeFolder, storeProjects } from '../index';


const folderContent = document.querySelector('.folderContent');
const projects = document.querySelector('#projects');
const lists = document.querySelector('#lists');
const mask = document.querySelector('.mask');


//--DISPLAY CONTROLLER
const displayController = () => {

    //screen update
    screenUpdate();

    //------------eventListener to change the check status + remove trigger + edit trigger
    folderContent.addEventListener('click', (e) => {
        if (e.target.id == 'notDone') {
            activeFolder[e.target.parentNode.dataset.indexNumber].check = 'Done';
            storeProjects();
            screenUpdate();
        } else if (e.target.id == 'done') {
            activeFolder[e.target.parentNode.dataset.indexNumber].check = 'Not Done';
            storeProjects();
            screenUpdate();
        }

        if (e.target.id == 'see') {
            console.log('see trigger');
            console.log(e.target.parentNode.dataset.indexNumber);
            screenUpdateSee(e);
        }

        if (e.target.id == 'edit') {
            renderFormEdit(); //render
            screenUpdateEdit(e);

            //EDIT LOGIC
            formEdit.addEventListener('submit', (e) => {
                e.preventDefault();
                const editTask = toDoFactory((e.currentTarget.titleEdit.value), (e.currentTarget.descriptionEdit.value), (e.currentTarget.dueDateEdit.value), (e.currentTarget.priorityEdit.value), (e.currentTarget.statusEdit.value));
                activeFolder.splice((e.currentTarget.titleEdit.dataset.indexNumber), 1, editTask);
                storeProjects()
                screenUpdate();
                invisibleOverlay();
            })
        }

        if (e.target.id == 'remove') {
            activeFolder.splice((e.target.parentNode.dataset.indexNumber), 1);
            storeProjects()
            screenUpdate();
            console.log(activeFolder);
        }

        //TASK LOGIC
        if (e.target.className == 'addTask') {
            renderFormTask();
            visibleOverlay();
            const formTask = document.querySelector('#formTask'); //Scope logic + var cannot be created before the form being created

            //Task's Form logic
            formTask.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log(e.currentTarget.title.value);
                const newTask = toDoFactory((e.currentTarget.title.value), (e.currentTarget.description.value), (e.currentTarget.dueDate.value), (e.currentTarget.priority.value), 'Not Done'/*, undefined*/);
                activeFolder.push(newTask);
                storeProjects();
                screenUpdate();
                formTask.reset();
                invisibleOverlay();
            })
        }
    });



    //------------eventListener to change activeFolder when folder clicked on lists + remove logic
    projects.addEventListener('click', (e) => {
        if (e.target.id == 'project' || e.target.className == 'folderBtn') {
            activeFolder = folders[e.target.dataset.indexNumber];
            screenUpdate();

            console.log(activeFolder);
        };

        if (e.target.id == 'remove') {
            console.log(e.target);
            folders.splice(e.target.dataset.indexNumber, 1);
            activeFolder = folders[0];
            storeProjects();
            screenUpdate();
            console.log(activeFolder);
        }
    });


    //------------eventListener to add 
    //FOLDER LOGIC
    lists.addEventListener('click', (e) => {
        if (e.target.className == 'addFolder') {
            renderFormFolder();
            visibleOverlay();
            const formFolder = document.querySelector('#formFolder'); //Scope logic + var cannot be created before the form being created

            //----Folder's Form logic
            formFolder.addEventListener('submit', (e) => {
                if (folders.length == 0) { //FOR THE CASE WHERE THE OBJECT IS EMPTY BEFORE ADDING FOLDER
                    e.preventDefault();
                    //console.log(e.currentTarget.folderName.value);
                    const newFolder = [{folderName: e.currentTarget.folderName.value}];
                    folders.push(newFolder);
                    activeFolder = folders[0];
                    storeProjects();
                    //Might include below code into screenUpdate or other function that create the DOM
                    screenUpdate();
                    console.log(activeFolder);
                    invisibleOverlay();
                } else {
                    e.preventDefault();
                    const newFolder = [{folderName: e.currentTarget.folderName.value}];
                    folders.push(newFolder);
                    storeProjects();
                    //Might include below code into screenUpdate or other function that create the DOM
                    screenUpdate();
                    console.log(activeFolder);
                    invisibleOverlay();
                }

            })
        };
    });


    //------------ eventListener to quit the overlay
    mask.addEventListener('click', (e) => {
        invisibleOverlay();
    });


};


export {displayController}
