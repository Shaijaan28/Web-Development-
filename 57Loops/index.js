console.log("I am tutorial on loops")

// let a=1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }

let obj ={
    name: "Arsalan",
    roll: "26",
    branhc: "CSE"
}

for(const key in obj){
    const element = obj[key];
    console.log(key,element)
}

for(const c of "Rauf"){
    console.log(c)
}

//while loop
let i=0;
while(i<6){
    console.log(i)
    i++;
}

// do while loop
let a=0;
do{
    console.log(a)
    a++;
} while(a<6);

