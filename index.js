// Code your solution in this file! 

// should return a new array containing the first two drivers from the passed-in array

const returnFirstTwoDrivers = function(drivers){
    //return [drivers[0], drivers[1]] 
    return drivers.slice(0,2)
} 

// should return an array of the last two drivers 

const returnLastTwoDrivers = function(drivers) {
      return drivers.slice(drivers.length - 2)
} 

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(multiplier) { 
    return function(fare) {
       return fare * multiplier
    }
} 

const fareDoubler = createFareMultiplier(2)
   
const fareTripler = createFareMultiplier(3) 

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
  }