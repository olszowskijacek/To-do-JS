{
  const tasks = [
    {
      description: 'wyrzucić śmieci',
      status: false,
    },
    {
      description: 'zatankować samochód',
      status: true,
    },
  ];

  const addNewTask = (newTaskDescription) => {

    tasks.push({
      description: newTaskDescription,
    });
    render();

  };

  const removeTask = (index) => {
    tasks.splice(index, 1);
    render();
  };

  const render = () => {
    let htmlString = '';

    for (const task of tasks) {
      htmlString += `
            <li 
              ${task.status ? 'style=\'text-decoration: line-through\'' : ''}
            >
            <button class='js-remove'>Usuń</button>
              ${task.description}
            </li>
            
            `;
    }
    document.querySelector('.taskList').innerHTML = htmlString;

    const removeBtns = document.querySelectorAll('.js-remove');
    removeBtns.forEach((removeBtn, index) => {
      removeBtn.addEventListener('click', () => {
        removeTask(index);
      });
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const newTaskDescription = document.querySelector('.js-newTask').value.trim();
    if (newTaskDescription === '') {
      return;
    }
    addNewTask(newTaskDescription);
  };




  const init = () => {
    render();

    const form = document.querySelector('.js-form');
    form.addEventListener('submit', formSubmit);

  };




  init();
}  