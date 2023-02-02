const items = [];

//A function to add an item to the array. Each item will be added as an object. Args should be an item and an id.
const addItem = (item, id) => items.push({ item, id });

//A function to remove an item from the array. Args is a valid ID that should be in the array. If the id is not valid, the item should not be removed.
const removeItem = (id) => {
  const removal = items.findIndex((v) => v.id === id);
  return items.splice(removal, 1);
};

//Add a few items to the array
addItem("testing", 0);
addItem("testing2", 1);
addItem("testing3", 2);
console.log("this is the items array befrore being modified:");
items.forEach((v) => console.log(v.item));
//remove an item with the id of 1. In this case it is going to be the second item
removeItem(1);
console.log("This is the items array after being modified:");
items.forEach((v) => console.log(v.item));
