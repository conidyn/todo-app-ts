import uuidv4 from "uuidv4"

export const todoMock = [
  { todo: "Loading", isCompleted: true, id: uuidv4() },
  { todo: "Hello World", isCompleted: false, id: uuidv4() },
  {
    todo: "Thanks for watching",
    isCompleted: false,
    id: uuidv4(),
  },
  { todo: "See you 🙋‍♂️", isCompleted: true, id: uuidv4() },
];
