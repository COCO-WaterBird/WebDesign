const todos = [
{
    id: 1,
    text: "Take out the Trash",
    isCompleted:true,
},
{
    id: 2,
    text: "Meeting",
    isCompleted:true,
},
{
    id: 3,
    text: "Dentist appt",
    isCompleted:false,
},
];
// console.log(todos);
// console.log(todos[1].text);

const todoJSON = JSON.stringify(todos)
console.log(todoJSON);

// // for
// for(let i=0; i<10; i++){
//     console.log(i);
//     console.log(`For Loop Number:${i}`);
// }

// for
for(let i=0; i<todos.length; i++){
    console.log(i);
    console.log(`For Loop Number:${i}`);
}

for(let tod of todos){
    console.log(tod.id);
}





// while
// let i = 0;
// while(i < 10){
//     console.log(`While Loop Number:${i}`);
// }
