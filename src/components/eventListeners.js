import {renderFormEdit, renderFormFolder, renderFormTask} from './renderForms';
import { updates } from './screenUpdates';
import { toDoFactory } from './factoryFunction';


const folderContent = document.querySelector('.folderContent');
const projects = document.querySelector('#projects');
const lists = document.querySelector('#lists');


/**/
/*format(new Date(2014, 1, 11), 'yyyy-MM-dd');
console.log(new Date(2023, 9, 12));*/

let folders = [[{folderName: 'Get fit'},{title: 'Make dinner', description: 'To make (healthy) dinner at 19pm', dueDate: '2023-11-12', priority: 'Medium', check: 'Not Done'},
{title: 'Do sport', description: 'To play football at 7am', dueDate: '2023-11-11', priority: 'Medium', check: 'Done'}],
[{folderName: 'Side projects'}, {title: 'Fix my bike', description: 'Finish the restoration of my old motorcycle', dueDate: '2023-12-01', priority: 'Low', check: 'Not Done'},
{title: 'Strengthen the foundations of the shack', description: 'The foundations are not strong enough to hold the structure', dueDate: '2024-01-01', priority: 'High', check: 'Not Done'}]];

let activeFolder = folders[0];
let getActiveFolder = () => activeFolder;
/*console.log(folders);
console.log(folders[0][1].title);*/


//--DISPLAY CONTROLLER (?)
const displayController = (() => {


    //----------screen update
    updates.screenUpdate();


    //------------eventListener to change the check status + remove trigger + edit trigger
    folderContent.addEventListener('click', (e) => {
        //console.log(e.target.parentNode.dataset.indexNumber)
        if (e.target.id == 'notDone') {
            activeFolder[e.target.parentNode.dataset.indexNumber].check = 'Done';
            updates.screenUpdate();
        } else if (e.target.id == 'done') {
            activeFolder[e.target.parentNode.dataset.indexNumber].check = 'Not Done';
            updates.screenUpdate();
        }

        if (e.target.id == 'see') {
            console.log('see trigger');
            console.log(e.target.parentNode.dataset.indexNumber);
            updates.screenUpdateSee(e);

        }

        if (e.target.id == 'edit') {
            renderFormEdit();
            updates.screenUpdateEdit(e);

            //EDIT LOGIC
            formEdit.addEventListener('submit', (e) => {
                e.preventDefault();
                //console.log(e.currentTarget.titleEdit.dataset.indexNumber)
                const editTask = toDoFactory((e.currentTarget.titleEdit.value), (e.currentTarget.descriptionEdit.value), (e.currentTarget.dueDateEdit.value), (e.currentTarget.priorityEdit.value), (e.currentTarget.statusEdit.value));
                activeFolder.splice((e.currentTarget.titleEdit.dataset.indexNumber), 1, editTask);
                updates.screenUpdate();
                updates.invisibleOverlay();

            })
        }

        if (e.target.id == 'remove') {
            activeFolder.splice((e.target.parentNode.dataset.indexNumber), 1);
            updates.screenUpdate();
            console.log(activeFolder);
        }

        //TASK LOGIC
        if (e.target.className == 'addTask') {
            renderFormTask();
            updates.visibleOverlay();
            const formTask = document.querySelector('#formTask'); //Scope logic + var cannot be created before the form being created

            //------Task's Form logic
            formTask.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log(e.currentTarget.title.value);
                const newTask = toDoFactory((e.currentTarget.title.value), (e.currentTarget.description.value), (e.currentTarget.dueDate.value), (e.currentTarget.priority.value), 'Not Done'/*, undefined*/);
                activeFolder.push(newTask);
                updates.screenUpdate();
                formTask.reset();
                updates.invisibleOverlay();
            })
        }
    });



    //----eventListener to change activeFolder when folder clicked on lists + remove logic
    projects.addEventListener('click', (e) => {
        if (e.target.id == 'project' || e.target.className == 'folderBtn') {
            activeFolder = folders[e.target.dataset.indexNumber];
            updates.screenUpdate();
            
            console.log(activeFolder);
        };

        if (e.target.id == 'remove') {
            console.log(e.target);
            folders.splice(e.target.dataset.indexNumber, 1);
            activeFolder = folders[0];
            updates.screenUpdate();
            console.log(activeFolder);
        }
    });


    //----eventListener to add 
    //FOLDER LOGIC
    lists.addEventListener('click', (e) => {
        if (e.target.className == 'addFolder') {
            renderFormFolder();
            updates.visibleOverlay();
            const formFolder = document.querySelector('#formFolder'); //Scope logic + var cannot be created before the form being created

            //----Folder's Form logic
            formFolder.addEventListener('submit', (e) => {
                if (folders.length == 0) { //FOR THE CASE WHERE THE OBJECT IS EMPTY BEFORE ADDING FOLDER
                    e.preventDefault();
                    //console.log(e.currentTarget.folderName.value);
                    const newFolder = [{folderName: e.currentTarget.folderName.value}];
                    folders.push(newFolder);
                    activeFolder = folders[0]
                    //Might include below code into screenUpdate or other function that create the DOM
                    updates.screenUpdate();
                    console.log(activeFolder);
                    updates.invisibleOverlay();
                } else {
                    e.preventDefault();
                    const newFolder = [{folderName: e.currentTarget.folderName.value}];
                    folders.push(newFolder);
                    //Might include below code into screenUpdate or other function that create the DOM
                    updates.screenUpdate();
                    console.log(activeFolder);
                    updates.invisibleOverlay();
                }

            })
        };
    });

    return {/*getActiveFolder*/}
})()

//-ADD ELEMENTS
const addElement = (() => {
})()

/*console.log(displayController.getActiveFolder())*/

export { folders, displayController, activeFolder }
