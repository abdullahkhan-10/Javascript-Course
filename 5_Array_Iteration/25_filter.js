// ++++++++++++++++++++++++++++++++++++++ JavaScript Array filter() ++++++++++++++++++++++++++++++++++++++++++++++++

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// General syntax
array.filter( (currentValue, index, arr) =>{
    // code here 

});


// +++++++++++++++++++ method 1 +++++++++++++++++++++++++
const myArray = [1,2,3,4,5,6,7,8,9,10]

const filterNum = myArray.filter( (num) =>{
    return num > 4
})

console.log(filterNum);  
console.log(myArray);        // original array is not change 
// Note. // a new array will be form with variable name filterNum and will have all the number more than 4, mean those numbers who have pass the condition mention in call back function.


// +++++++++++++++++++ method 2 +++++++++++++++++++++++++
const filterArray = []

myArray.filter( (num) =>{
    if (num > 4) {
        filterArray.push(num);
    }
})
console.log(filterArray);

// +++++++++++++++++++++++++++++++++++++++++ Practice Mini Project ++++++++++++++++++++++++++++++++++
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// user want all the books from history
let user = books.filter( (obj) =>{
    return obj.genre === "History"
})
console.log(user);

// user want book publish after 1985 and from non-fiction genere
let anotherUser = books.filter( (obj) =>{
    return obj.publish >= 1985 && obj.genre === "Non-Fiction"
});
console.log(anotherUser);

// user want fiction books whose edition is above 2005
let anotherUser1 = books.filter( (obj) =>{
    return obj.genre === "Fiction" && obj.edition >= 2005
})
console.log(anotherUser1);