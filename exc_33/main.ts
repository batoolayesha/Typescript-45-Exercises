//Creating an Array:

let numbers = [1,2,3,4,5,6,7,8,9];

//Using for Loop:
for(let oneNumber of numbers){
    let ordinalEndings:string

    if(oneNumber === 1){
        ordinalEndings = "st";
    }
    else if(oneNumber === 2){
        ordinalEndings = "nd";
    }
    else if(oneNumber === 3){
        ordinalEndings = "rd";
    }
    else{
        ordinalEndings = "th";
    }
    console.log(`${oneNumber}${ordinalEndings}`);
}