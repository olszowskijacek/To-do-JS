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

  const render = () => {
    let htmlString = '';

    for (const task of tasks) {
      htmlString += `
            <li 
              ${task.status ? 'style=\'text-decoration: line-through\'' : ''}
            >
              ${task.description}
            </li>
            `;
    }
    document.querySelector('.taskList').innerHTML = htmlString;
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const newTaskDescription = document.querySelector('.js-newTask').value.trim();
    if (newTaskDescription === '') {
      return;
    }
    addNewTask(newTaskDescription);
  };


  const addNewTask = (newTaskDescription) => {

    tasks.push({
      description: newTaskDescription,
    });
    render();

  };



  const init = () => {
    render();

    const form = document.querySelector('.js-form');
    form.addEventListener('submit', formSubmit);
  };




  init();
}  