// Write your solution in this file!
const employee = {
    Greg: '1006 Denny',
    Sarah: '178 15th Ave',
    Gabe: '1422 E Aloha',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee}
    newemployee[key] = value;
    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    const oldemployee = {...employee}
    delete oldemployee[key];
    return oldemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}