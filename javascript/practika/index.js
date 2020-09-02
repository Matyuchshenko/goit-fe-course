// document.addEventListener('DOMContentLoaded', () => {
//     const modalWindow = document.querySelector('.modal');
//     const hideModal = () => {
//         modalWindow.classList.remove('modal--visible');
//     }
//     const showModal = () => {
//         modalWindow.classList.add('modal--visible');
//     }
//     document.body.addEventListener('click', (e) => {
//         const { target } = e;
//         if (target.classList.contains('modal-trigger')) {
//             showModal();
//             return;
//         }
//         if (target.classList.contains('modal__button--close') || target.classList.contains('modal')) {
//             hideModal();
//             return;
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
  // - Вешаем обработчик события click на button
  // - Забрать value из input
  // - Добавляем по click новую li
  const addTaskButton = document.querySelector(".add-todo__button");
  const taskContentInput = document.querySelector(".add-todo__input");
  const todoList = document.querySelector(".todo-list");
  const completeClickHandler = (e) => {
    const { target } = e;
    const li = target.closest('.todo-list__item');
    li.classList.add('todo-list__item--completed');
    target.remove();
  }
  const removeClickHandler = (e) => {
    const { target } = e;
    const li = target.closest('.todo-list__item');
    li.classList.add('todo-list__item--removed');
    setTimeout(() => {
        li.remove();
    }, 600);
  }
  const createActionButtons = () => {
    const actionButtonsWrapper = document.createElement("div");
    actionButtonsWrapper.className = "todo-list__item-actions";
    const completeButton = document.createElement("button");
    const removeButton = document.createElement("button");
    completeButton.textContent = "OK";
    completeButton.className =
      "todo-list__item-action todo-list__item-action--complete";
    removeButton.textContent = "X";
    removeButton.className =
      "todo-list__item-action todo-list__item-action--delete";
    completeButton.addEventListener('click', completeClickHandler);
    removeButton.addEventListener('click', removeClickHandler);
    actionButtonsWrapper.append(completeButton, removeButton);
    return actionButtonsWrapper;
  };
  const createTodoListItem = (taskDescription) => {
    const newTodoListItem = document.createElement("li");
    newTodoListItem.textContent = taskDescription;
    newTodoListItem.className = "todo-list__item";
    const actionButtons = createActionButtons();
    newTodoListItem.appendChild(actionButtons);
    return newTodoListItem;
  };
  const addTaskButtonClickHandler = (e) => {
    e.preventDefault();
    const { target } = e;
    const { value } = target.previousElementSibling;
    if (value === "") {
      return;
    }
    const newListItem = createTodoListItem(value);
    todoList.appendChild(newListItem);
  };
  addTaskButton.addEventListener("click", addTaskButtonClickHandler);
});
  
  
  


