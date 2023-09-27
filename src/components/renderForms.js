const renderFormEdit = () => {
    const inputs = document.querySelector('.inputs');
    inputs.innerHTML='';
    inputs.removeAttribute('id');


    const form = document.createElement('form');
    form.setAttribute('action', '""');
    form.setAttribute('post', '""');
    form.setAttribute('id', 'formEdit'); //
    inputs.appendChild(form);
    //Title
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titleEdit');
    titleLabel.textContent='Title';
    form.appendChild(titleLabel);
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'titleEdit');
    titleInput.setAttribute('id', 'titleEdit');
    titleInput.setAttribute('maxlength', '21');
    titleInput.setAttribute('required', '');
    form.appendChild(titleInput);
    //Description
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'descriptionEdit');
    descriptionLabel.textContent='Description';
    form.appendChild(descriptionLabel);
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('name', 'descriptionEdit');
    descriptionInput.setAttribute('id', 'descriptionEdit');
    descriptionInput.setAttribute('cols', '30');
    descriptionInput.setAttribute('rows', '10');
    descriptionInput.setAttribute('maxlength', '100');
    form.appendChild(descriptionInput);
    //DIV FOR ELEMENTS BELOW
    const div = document.createElement('div');
    div.setAttribute('class', 'formEditBottom');
    form.appendChild(div);
    //Due Date
    const subDiv1 = document.createElement('div');
    div.appendChild(subDiv1);
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'dueDateEdit');
    dueDateLabel.textContent='Due date';
    subDiv1.appendChild(dueDateLabel);
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'dueDateEdit');
    dueDateInput.setAttribute('id', 'dueDateEdit');
    subDiv1.appendChild(dueDateInput);
    //Priority
    const subDiv2 = document.createElement('div');
    div.appendChild(subDiv2);
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priorityEdit');
    priorityLabel.textContent='Priority';
    subDiv2.appendChild(priorityLabel);
    const priorityInput = document.createElement('select');
    priorityInput.setAttribute('name', 'priorityEdit');
    priorityInput.setAttribute('id', 'priorityEdit');
    subDiv2.appendChild(priorityInput);
    priorityInput.innerHTML='<option value="High">High</option><option value="Medium" selected>Medium</option><option value="Low">Low</option>';
    //Status
    const subDiv3 = document.createElement('div');
    div.appendChild(subDiv3);
    const statusLabel = document.createElement('label');
    statusLabel.setAttribute('for', 'statusEdit');
    statusLabel.textContent='Status';
    subDiv3.appendChild(statusLabel);
    const statusInput = document.createElement('select');
    statusInput.setAttribute('name', 'statusEdit');
    statusInput.setAttribute('id', 'statusEdit');
    statusInput.setAttribute('required', '');
    subDiv3.appendChild(statusInput);
    statusInput.innerHTML='<option value="Not Done">Not Done</option><option value="Done">Done</option>';
    //Submit button
    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('class', 'editTaskForm');
    submit.textContent='Edit';
    form.appendChild(submit);
};


const renderFormTask = () => {
    const inputs = document.querySelector('.inputs');
    inputs.innerHTML='';
    inputs.removeAttribute('id');

    const form = document.createElement('form');
    form.setAttribute('action', '""');
    form.setAttribute('post', '""');
    form.setAttribute('id', 'formTask'); //
    inputs.appendChild(form);
    //Title
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent='Title';
    form.appendChild(titleLabel);
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('maxlength', '40');
    titleInput.setAttribute('required', '');
    form.appendChild(titleInput);
    //Description
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent='Description';
    form.appendChild(descriptionLabel);
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('cols', '30');
    descriptionInput.setAttribute('rows', '10');
    descriptionInput.setAttribute('maxlength', '100');
    form.appendChild(descriptionInput);
    //DIV FOR ELEMENTS BELOW
    const div = document.createElement('div');
    div.setAttribute('class', 'formTaskBottom');
    form.appendChild(div);
    //Due Date
    const subDiv1 = document.createElement('div');
    div.appendChild(subDiv1);
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'dueDate');
    dueDateLabel.textContent='Due date';
    subDiv1.appendChild(dueDateLabel);
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'dueDate');
    dueDateInput.setAttribute('id', 'dueDate');
    subDiv1.appendChild(dueDateInput);
    //Priority
    const subDiv2 = document.createElement('div');
    div.appendChild(subDiv2);
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent='Priority';
    subDiv2.appendChild(priorityLabel);
    const priorityInput = document.createElement('select');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('id', 'priority');
    subDiv2.appendChild(priorityInput);
    priorityInput.innerHTML='<option value="High">High</option><option value="Medium" selected>Medium</option><option value="Low">Low</option>';
    //Submit button
    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('class', 'addTaskForm');
    submit.textContent='Add';
    form.appendChild(submit);
};

const renderFormFolder = () => {
    const inputs = document.querySelector('.inputs');
    inputs.innerHTML='';
    inputs.setAttribute('id', 'inputFolder');

    const form = document.createElement('form');
    form.setAttribute('action', '""');
    form.setAttribute('post', '""');
    form.setAttribute('id', 'formFolder'); //
    inputs.appendChild(form);
    //Folder's name
    const folderLabel = document.createElement('label');
    folderLabel.setAttribute('for', 'folderName');
    folderLabel.textContent="Folder's Name";
    form.appendChild(folderLabel);
    const folderInput = document.createElement('input');
    folderInput.setAttribute('type', 'text');
    folderInput.setAttribute('name', 'folderName');
    folderInput.setAttribute('id', 'folderName');
    folderInput.setAttribute('maxlength', '21');
    folderInput.setAttribute('required', '');
    form.appendChild(folderInput);
    //Submit button
    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('class', 'addFolderBtn');
    submit.textContent='Add';
    form.appendChild(submit);
};

export {renderFormEdit, renderFormFolder, renderFormTask}