let inquirer = require("inquirer");

inquirer.prompt([{
    name: "Nombre",
    message: "Cual es tu nombre?",
    default: "emanuel"
},{
    name: "Apellido",
    message: "Cual es tu apellido?",
    default: "clementi"
},{
    name: "Edad",
    message: "Cuantos Años Tienes?",
    default: "24"
},{
    type: "rawlist",
    name: "Comida",
    message: "Cual es Tu Comida Favorita?",
    choices: ["Pizza","Empanadas","Hamburguesas","Asado","Milanesas a la Napolitana"]
}])
    .then(answers =>{
        console.log("Respuestas: ",answers)
    })

//npm run preguntas