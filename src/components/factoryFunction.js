//--FACTORY FUNCTION
const toDoFactory = (title, description, dueDate, priority, check) => {
  return { title, description, dueDate, priority, check };
};

export { toDoFactory };
