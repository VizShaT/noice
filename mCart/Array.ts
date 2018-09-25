let manufactureres:any[] = [
    {"id" : "Samsung", "checked" : false },
    {"id" : "Motorola", "checked" : false},
    {"id" : "Sony", "checked" : false},
    {"id" : "Nokia", "checked" : false},
]

console.log("Available Products are : ");

for(let i=0; i<manufactureres.length; i++){
    console.log(manufactureres[i].id);
}