import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import { displayTodo } from "./displayItems";
import { Items } from "./todo-items";
import { updateProject } from "./projects";

updateProject("default", new Items("beep", "boop", "2022-02-06", "high", "complete"));
displayTodo();