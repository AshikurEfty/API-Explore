const user = {id: 1, name: 'Ashik', job: 'Web designer'};
// Jvascript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

// { id: 1, name: 'Ashik', job: 'Web designer' }
// {"id":1,"name":"Ashik","job":"Web designer"}

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet vuter goli',
        city: 'ranbir',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);