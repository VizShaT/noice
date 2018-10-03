// file base.js
import { projectId } from "./module.js";
projectId = 88;
console.log(projectId);

// module.js
export let projectId = 8000;

// Above will give -  Runtime Error: projectId is read-only

// ---------------------------------------------------------

// file base.js
import { project } from "./module.js";
project.projectId = 8000;
console.log(projectId);

// module.js
export let project = {
    projectId = 99;
};

// Above will give 8000
// Object 'project' is read only but its properties can be modify 

// ---------------------------------------------------------

// file named_export_base.js

import { project, showProject } from "./named_exports_module1.js";
project.productId = 8000;
showProject();
console.log(project.productId);

// file named_exports_module1.js
export let project = { projectId : 99 };

export function showProject(){
    console.log(project.projectId);
}

// its give 99 and 8000 but in video it show it will be 8000, 8000

// ---------------------------------------------------------

// file named_export_base.js
import { showProject, updateFunction } from "./named_exports_module1.js";
showProject();
updateFunction();
showProject();

// file named_exports_module1.js
export function showProject() { console.log("In original") };
export function updateFunction(){
    showProject = function() { console.log("In updated") } ;
};

// Output:
// In original
// In updated