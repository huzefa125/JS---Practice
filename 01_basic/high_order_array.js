arr = ["12",12,34,"sd"]
for (const i of arr) {
    // console.log(i);
}

const greeting = "Hello my name is huzefa"
for (const i of greeting) {
    // console.log(`value is ${i}`);
    
}


// map

const india = new Map()
india.set("india","inr")
india.set("usa","dollar")
india.set("uae","riyal")
india.set("india","inr")
// console.log(india);

for (const [key,value] of india) {
    // console.log(key,value);
    
}

const myObject = {
    js : "javascript",
    c : "C language",
    java : "Java language",
    python : "Python Language"
}

for (const i in myObject) {
        console.log(`${i} for object is ${myObject[i]}`);
    }


const arrs = ["huro","df","er","ef"]
arrs.forEach(function (val) {
    // console.log(val);
})

arrs.forEach( (items) => {
    // console.log(items);
} )

function printme(items) {
    // console.log("Hello world");
    // console.log(items);
}
arrs.forEach(printme)

const myCoding = [
    {
        languagename : "Javascript",
        languagefile : "js"
    },
    {
        languagename : "Pythom",
        languagefile : "py"
    },
    {
        languagename : "Java",
        languagefile : "java"
    },
    {
        languagename : "c",
        languagefile : "c"
    },
]
myCoding.forEach( (items) => {
    console.log(items.languagefile);
    
} )