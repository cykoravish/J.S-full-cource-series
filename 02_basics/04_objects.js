// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "cyra"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
email: "ravi@gmail.com",
fullname: {
    userfullname: {
        firstname: "ravish",
        lastname: "Bisht"
    }
}
}
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const newObj = {...obj1, ...obj2};
const newObj = Object.assign({}, obj1, obj2);

// console.log(newObj);

const user = [
    {
        name: 'ravish'
    },
    {
        name: 'cyko'
    },
    {
        name: 'cyra'
    },
]
// console.log(user[1].name)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))
                                    

const course = {
    courseName: "js in hindi",
    price: '999',
    courseInstructor: "ravish",
}

// course.courseInstructor
        //  or
const {courseInstructor} = course;
const {courseInstructor: instructor} = course; //we can write courseInstructor as instructor nin short
// console.log(courseInstructor)
// console.log(instructor)
