/*
export let project = { projectId : 99 };

export function showProject(){
    console.log(project.projectId);
}
*/

export function showProject() { console.log("In original") };
export function updateFunction(){
    showProject = function() { console.log("In updated") } ;
};