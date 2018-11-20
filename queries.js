'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));

// 1. Get all restaurants
// Write a query that returns all of the restaurants, with all of the fields.
  
// knex('restaurants')
//   .then(console.log);

// 2. Get Italian restaurants
// Write a query that returns all of the Italian restaurants, with all of the fields
  
// knex('restaurants')
//   .where('cuisine', 'Italian')
//   .then(console.log);

// 3. Get 10 Italian restaurants, subset of fields
// Write a query that gets 10 Italian restaurants, returning only the id and name fields.
  
// knex('restaurants')
//   .select('id', 'name')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .returning(['id', 'name']) //why does it matter?
//   .then(console.log);

// 4. Count of Thai restaurants
// Write a query that returns the number of Thai restaurants.
  
// knex('restaurants')
//   .count()
//   .where('cuisine', 'Thai')
//   .then(console.log);

// 5. Count of restaurants
// Write a query that returns the total number of restaurants.
  
// knex('restaurants')
//   .count()
//   .then(console.log);

// 6. Count of Thai restaurants in zip code
// Write a query that returns the number of Thai restaurants in the 11372 zip code.
  
// knex('restaurants')
//   .count()
//   .where('cuisine', 'Thai')
//   .whereIn('address_zipcode', [11372])
//   .then(console.log);

// 7. Italian restaurants in one of several zip codes
// Write a query that returns the id and name of five Italian where the restaurants is in the 10012, 10013, or 10014 zip codes. The initial results (before limiting to five) should be alphabetically sorted.
  
// knex('restaurants')
//   .select('id', 'name')
//   .where('cuisine', 'Italian')
//   .whereIn('address_zipcode', ['10012', '10013', '10014'])
//   .orderBy('name', 'asc') //defaults to ascending 
//   .limit(5)
//   .then(console.log);

// 8. Create a restaurant
// Create a restaurant with the following properties:

// name: 'Byte Cafe',
// borough: 'Brooklyn',
// cuisine: 'coffee',
// address_building_number: '123',
// address_street: 'Atlantic Avenue',
// address_zipcode: '11231'

// knex('restaurants')
//   .insert({ 
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'  
//   })
//   .returning(['id', 'name'])
//   .then(console.log);


// 9. Create a restaurant and return id and name
// Create a restaurant with values of your choosing, and return the id and name.
  
// knex('restaurants')
//   .insert({ 
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'  
//   })
//   .returning(['id', 'name'])
//   .then(console.log);

// 10. Create three restaurants and return id and name
// Create three restaurants using a single command, with values of your choosing, returning the id and name of each restaurant.
  
// knex('restaurants')
//   .insert([{ 
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'  
//   }, { 
//     name: 'Bit Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '231',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'  
//   },
//   { 
//     name: 'Bits Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '321',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'  
//   }
//   ])
//   .returning(['id', 'name'])
//   .then(console.log);

// 11. Update a record
// Update the record whose value for nyc_restaurant_id is '30191841'. Change the name from 'Dj Reynolds Pub And Restaurant' to 'DJ Reynolds Pub and Restaurant'.
  
// knex('restaurants')
//   .where({ nyc_restaurant_id: 30191841 })
//   .update({
//     'name': 'DJ Reynolds Pub and Restaurant'
//   })
//   .returning(['id', 'name'])
//   .then(console.log);

// 12. Delete by id
// Delete the grade whose id is 10.

// knex('grades')
//   .where('id', '10')
//   .del()
//   .then(console.log);

// 13. A blocked delete
// Try deleting the restaurant with id of 22. You should get a foreign key constraints error?

// knex('restaurants')
//   .where('id', '22')
//   .del()
//   .then(console.log);

/* 
  Unhandled rejection error: update or delete on table "restaurants" violates foreign key constraint "grades_restaurant_id_fkey" on table "grades"
*/