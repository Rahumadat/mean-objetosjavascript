let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

    for ( let i = 0 ; i < students.length ; i++) {
        console.log("name:" + students[i].name + ",cohort: " + students[i].cohort);
    }
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

console.log("employees");
    for (let x = 0; x < users.employees.length ; x++) {
        let suma = users.employees[x].last_name.length + users.employees[x].first_name.length; 
        console.log(users.employees[x].last_name + ", " + users.employees[x].first_name + " - " + (suma));
    }   
    console.log("managers");
    for (let x = 0; x < users.managers.length ; x++) {
        let suma = users.managers[x].last_name.length + users.managers[x].first_name.length;
        console.log(users.managers[x].last_name + ", " + users.managers[x].first_name + " - " + (suma));
    }

