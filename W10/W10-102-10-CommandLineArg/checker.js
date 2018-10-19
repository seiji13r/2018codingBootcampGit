// console.log(process.argv)

if(process.argv[3]){
    let first = process.argv[2];
    let second = process.argv[3];
    if(first===second){
        // console.log("The two inputs are equal");
        console.log(true);
    } else {
        // console.log("The two inputs are not equal");
        console.log(false);
    }

} else {
    console.log("Missing one argument in the input.")
        console.log(false);
}