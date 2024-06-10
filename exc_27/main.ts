//define variable

let alien_color = "black";

// Using Else-If statements;
//version 01:

if(alien_color === "black"){
    console.log("(Version:01)you shot down black alien you have earned 5 points.");
}
else if(alien_color === "blue"){
    console.log("you shot down yellow alien you have earned 10 points.");
}
else if(alien_color === "purple"){
    console.log("you shot down purple alien you have earned 15 points.");
}
//version 02: 

let alien_color2 = "orange";

if (alien_color2 === "black"){
    console.log("you shot down black alien you have earned 5 points.");
}
else if(alien_color2 === "orange"){
    console.log("(Version:02)you shot down orange alien you have earned 10 points.");
}
else if(alien_color2 === "purple"){
    console.log("you shot down purple alien you have earned 15 points.");
}
//version 03:

let alien_color3 = "pink";

if (alien_color3 === "yellow"){
    console.log("you shot down pink alien you have earned 5 points.");
}
else if(alien_color3 === "gray"){
    console.log("you shot down purple alien you have earned 10 points.");
}
else if(alien_color3 === "pink"){
    console.log("(Version:03)you shot down purple alien you have earned 15 points.");
}
