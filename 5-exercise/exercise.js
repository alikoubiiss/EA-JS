
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
      console.log("--- Processed Users ---");
      // 1. Filter even IDs
    const pares = users.filter((user) => user.id % 2 === 0);
    console.log(pares);
      // 2. Map to clean objects {id, name, city}
    const info = pares.map((user) => ({
        id: user.id,
        name: user.name,
        city: user.address.city,
    }));
    console.log(info);
      // 3. Add Guest User at the start using Spread (...)

    const GuestUser = {id: 0, name: "Guest User", city:"Barcelona"};
    const insertar = [GuestUser, ...info];
    console.log(insertar);
    
      
      console.log("--- Statistics ---");
      // 4. Reduce to count total characters in names
      const total = pares.reduce((total , user) => total + user.username.length , 0);
      console.log(total);
  })
  .catch(error => console.error("Fetch failed:", error));