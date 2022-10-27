let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

    function listado(element) {
        for ( let i = 0 ; i < element.length ; i++) {
            console.log("name:" + element[i].name + ",cohort: " + element[i].cohort);
        }
    }

    listado(students);

/***************************************** */
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function contar(element) {
console.log("employees");
    for (let x = 0; x < element.employees.length ; x++) {
        let suma = element.employees[x].last_name.length + element.employees[x].first_name.length; 
        console.log(element.employees[x].last_name + ", " + element.employees[x].first_name + " - " + (suma));
    }   
    console.log("managers");
    for (let x = 0; x < users.managers.length ; x++) {
        let suma = element.managers[x].last_name.length + element.managers[x].first_name.length;
        console.log(element.managers[x].last_name + ", " + element.managers[x].first_name + " - " + (suma));
    }
}

contar (users);