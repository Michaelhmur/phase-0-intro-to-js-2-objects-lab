const employee = {
    name:"Value2",
    streetAddress:"Value1"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]:value}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
   let clone= {...employee}
    delete clone[key]
    return clone
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}