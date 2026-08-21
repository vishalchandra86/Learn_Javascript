// const user={
//     username:"Ramesh",
//     price:599,

//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this);
        
//     }

// }
// user.welcomeMessage();
// user.username="shayam";
// user.welcomeMessage();

//================Arrow Function==============================//

// const abc=()=>{
//     let username="suresh"
//  console.log(this);
// }

// abc();
// const addtwo=(num1,num2)=>{
// return num1+num2;
// }
// console.log(addtwo(3,5));
((name)=>{                //immediate invoke function expression IIFE
    console.log(`DB Connected to ${name}`)

})('kamlesh')