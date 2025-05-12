const promisOne = new Promise(function(reslove,reject){
    setTimeout(function () {
      console.log("Hello kese hai applog");
      reslove()
    },1000)
})

promisOne.then(function(){
    console.log("Promise Called");
},)

// data conusmtion
const promisTwo = new Promise(function (reslove,reject){
    setTimeout(() => {
        reslove({username : "chai",email:"HuzefaShaikh"})    
    }, 1000);
   
})
promisTwo.then(function(user){
    console.log(user);
})

const promisFour = new Promise(function(reslove,reject){
    setInterval(() => {
        let error = false
        if (!error) {
            reslove({username:"huzefa",password : "123"})
        }
        else {
            reject("Error something went wrong")
        }
    }, 1000);
})

promisFour.then( (user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch( (error) =>{
    console.log(error);
}).finally( () => {
    console.log("promise is completed");
})

const promiseFive = new Promise( (reslove,reject) => {
    setTimeout( () =>{
        let error = false;
        if (!error) {
            reslove({username : "huzefa",pass:"Huzefa@134"})
        }
        else {
            console.log("Somthing went wrong");
        }
    },1000)
}) 

async function consumePromiseFive() {
    try {
        const respose = await promiseFive
        console.log(respose);
    } catch (error) {
        console.log(error);
        
    }
}



// async function getAllUser() {
//    try {
//      const respose = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await respose.json()
//     console.log(data);    
//    } catch (error) {
//     console.log(error);
//    }
// }
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then( (respose)=>{
    return respose.json()
}).then ( (data)=>{
    console.log(data);
    
} )