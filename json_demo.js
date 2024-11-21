
const example={
    "employees":[
    {"firstname":"varghese","lastname":"roy"},
    {"firstname":"john","lastname":"doe"}
]
};

example.employees.forEach(employee=>
{
    console.log(employee.firstname,employee.lastname);
}
);
