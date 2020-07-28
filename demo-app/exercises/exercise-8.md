Exercise 8

1. Upgrade Car Form to use the `useForm` hook.

2. In the Car Table component, add a new header column with a label of 'Actions'.

3. In the Car View Row component, add a new column. In the new column place a button with a label of "Delete". When the button is clicked, remove the car from the table.

Hint: to remove an object from an array immutably use the array filter method:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

4. Create a new custom hook named `useList`. The `useList` hook should manage a collection (array) of data including providing functions for adding and removing items from the collection. Utilize the the `useList` custom hook in the Color Tool and Car Tool component trees, to manage the array of colors and the array of cars, respectively.

5. Ensure it works!
