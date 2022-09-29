// Array Functions
// 1. forEach - executes a function for each element in the array
// 2. map - creates a new array with the results of calling a function for every array element
// 3. filter - creates a new array with every element that passes the test implemented by the provided function
// 4. reduce - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
// 5. sort - sorts the elements of an array in place and returns the sorted array
// 6. reverse - reverses the order of the elements in an array -- the first array element becomes the last, and the last array element becomes the first
// 7. concat - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
// 8. slice - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified
// 9. splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// 10. indexOf - returns the first index at which a given element can be found in the array, or -1 if it is not present
// 11. lastIndexOf - returns the last index at which a given element can be found in the array, or -1 if it is not present
// 12. find - returns the value of the first element in the provided array that satisfies the provided testing function 
// 13. findIndex - returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test
// 14. includes - determines whether an array includes a certain value among its entries, returning true or false as appropriate
// 15. push     - adds one or more elements to the end of an array and returns the new length of the array
// 16. pop     - removes the last element from an array and returns that element
// 17. shift    - removes the first element from an array and returns that removed element
// 18. unshift - adds one or more elements to the beginning of an array and returns the new length of the array
// 19. join - joins all elements of an array into a string
// 20. split - splits a String object into an array of strings by separating the string into substrings
// 21. toString - returns a string representing the specified array and its elements
// 22. isArray - determines whether the passed value is an Array
// 23. fill - fills all the elements of an array from a start index to an end index with a static value
// 24. copyWithin - shallow copies part of an array to another location in the same array and returns it, without modifying its size
// 25. entries - returns a new Array Iterator object that contains the key/value pairs for each index in the array
// 26. every - tests whether all elements in the array pass the test implemented by the provided function
// 27. some - tests whether some element in the array passes the test implemented by the provided function
// 28. flat - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// 29. flatMap - first maps each element using a mapping function, then flattens the result into a new array
// 30. keys - returns a new Array Iterator that contains the keys for each index in the array
// 31. values - returns a new Array Iterator object that contains the values for each index in the array

const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});
console.log(numbers); // [1, 2, 3]
console.log(doubleNumArray); // [2, 4, 6]
