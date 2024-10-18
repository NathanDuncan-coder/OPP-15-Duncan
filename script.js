// sealing - Prevents properties from being added or removed. 
//Can still be changed

// Freezing - Prevents properties from being added, removed or changed


const rectObj = {
    name: 'rectangle 1',
    width: 10,
    hieght:10,
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

// console.log(descriptors);

reactObj.Color = 'red';
delete rectObg.name;


rectObj.width = 20;

console.log(rectObj);



const circleObj = {
    Name: 'Circle 1',
    radius: 30
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);

circleObj = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';

console.log(descriptors);