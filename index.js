// Code your solutions in this file




 
function writeCards(name,event){

    for(let i =0 ;i<name.length;i++){
        console.log(`Thank you ${name} for the wonderful ${event} gift`)
        debugger;
    }

    return name,event;

}


console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));