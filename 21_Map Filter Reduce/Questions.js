const users = [{ firstName: "akshay", lastName: "saini", age: 26 },
{ firstName: "donald", lastName: "trump", age: 75 },
{ firstName: "elon", lastName: "musk", age: 30 },
{ firstName: "deepika", lastName: "padukone", age: 26 }
];

//Find fullName
const fullNames = users.map(obj => obj.firstName + " " + obj.lastName);
console.log(fullNames);

//{Age:Number of persons}
const resObj = users.reduce((obj, ele) => {

    if (obj[ele.age])
        obj[ele.age] = ++obj[ele.age];

    else
        obj[ele.age] = 1;

    return obj;
}, obj = {});
console.log(resObj);

//First name of people with age<30
const output = users.filter(obj => obj.age < 30).map(obj => obj.firstName);
console.log(output);

//Using reduce
const out = users.reduce((arr, ele) => {

    if (ele.age < 30)
        arr.push(ele.firstName);

    return arr;
}, arr = []);
console.log(out);