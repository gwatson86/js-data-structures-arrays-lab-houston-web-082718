// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(new_driver) {
    drivers.push(new_driver)
}

function destructivelyPrependDriver(new_driver) {
    drivers.unshift(new_driver)
}

function destructivelyRemoveLastDriver() {
    drivers.splice(-1)
}

function destructivelyRemoveFirstDriver() {
    drivers.splice(0, 1)
}

function appendDriver(new_driver) {
    return new_drivers = [...drivers, new_driver]
}

function prependDriver(new_driver) {
    return new_drivers = [new_driver, ...drivers]
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver() {
    return drivers.slice(1)
}