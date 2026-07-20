const user = {
  id: 101,
  profile: {
    name: "Aman",
    address: {
      city: "Tokyo",
    },
  },
};

const {
  profile: { name },
} = user;
console.log(name); // Aman

//assigning default value will prevent from typeError incase address/city is missing
const { profile: { address: { city: cityVlalue } = {} } = {} } = user;
console.log(cityVlalue); //tokyo

//The Colons Change the Game: Remember that profile: and address: act only as navigational paths. They do not create local variables. In the code above, only city becomes a valid variable you can use.

//Always Provide Default Values: If profile or address is missing (undefined), the code throws a fatal TypeError. Guard against crashes by assigning fallback empty objects

const colors = ["red", ["green", "blue", "yellow"]];
const [primary, [secondary, ...otherSubColors]] = colors;

console.log(secondary); // Output: "green"
console.log(otherSubColors); // Output: ["blue", "yellow"]
