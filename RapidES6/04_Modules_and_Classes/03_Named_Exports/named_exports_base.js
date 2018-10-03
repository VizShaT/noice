/*
import { project, showProject } from "./named_exports_module1.js";
project.productId = 8000;
showProject();
console.log(project.productId);

*/
import { showProject, updateFunction } from "./named_exports_module1.js";
showProject();
updateFunction();
showProject();
