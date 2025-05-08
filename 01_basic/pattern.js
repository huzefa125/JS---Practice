let n = 5
for (let i = 0; i <= 5; i++) {
    let pattern = "";
    console.log("",i); // This will print the value of i each time, which you may not want

    for (let j = i; j <= i; j++) {
        pattern =+ "*"; // This is incorrect, should be += instead of =+
    }

    console.log(pattern);
}
