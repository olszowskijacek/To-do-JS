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

  const init = () => {
    render();
  };

  init();
}  