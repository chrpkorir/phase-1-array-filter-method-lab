// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

}

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.toLowerCase().slice(0, name.length) === name.toLowerCase())
    // slice(0, name.length) - it extracts substring from begining od drivers name upto
    // the lenth of the name
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name) // compares name of each driver object to the provided name

}