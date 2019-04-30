var myState = {
  name: "Washington",
  capital: "Olympia",
  population: 7062000,
  nickname: "The Evergreen State"
};
var businesses = [{
    name: "Coding Dojo",
    city: "Bellevue"
  },
  {
    name: "Facebook",
    city: "Mountain View"
  },
  {
    name: "Microsoft",
    city: "Redmond"
  },
  {
    name: "Expedia",
    city: "Bellevue"
  }
];


// 1) Strip the myState object into two arrays, one filled with its keys, the other with its values.

let newKeys = _.allKeys(myState);
console.log(newKeys);

let newVals = _.values(myState);
console.log(newVals);


// 2) Using these two new arrays, put them back together as an object to resemble the original myState object.


// 3) Alert each of the key - value pairs of the myState object.
_.each(myState, function(value, key){ alert(key+': '+value); });

// 4) Return just the names of the businesses from the businesses array.
let busi = _.pluck(businesses, 'name');
console.log(busi);

// 5) Return the object containing “Microsoft”.
let name = _.findWhere(businesses, {name: "Microsoft"})
console.log(name);

// 6) Return all the businesses that are located in Bellevue in a new array.
let bell = _.where(businesses, {city: "Bellevue"})
console.log(bell);

// 7) Sort the businesses based on the city in ascending order and return the array.
let city = _.sortBy(businesses, 'city');
console.log(city);

// 8) Have all the business names be “Coding Dojo” without altering the original array. [hint: use _.map()]
let newB = _.map(businesses, function(businesses){
  return businesses.name = "Dojo";
});
console.log(newB);