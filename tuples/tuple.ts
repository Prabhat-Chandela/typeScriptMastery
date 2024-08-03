// tuple is an array containing specific type value at specific index.
 let user:[string , number , boolean] = ["pc" , 10 , true];

//  below is the example of an array containing rgb values.
let rgb: [number , number , number] = [255 ,255 , 112];

// below are few drawbacks or odd behaviour of tuples , where i can add delete the values using different array methods like push , pop , shift , unshift , etc. 

type User = [number , string];

const newUser : User =[10 , "prabhat"];
newUser.push(20);