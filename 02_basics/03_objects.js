// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Alok",
    "full name": "Alok Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Ayodhya",
    email: "Alok@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])