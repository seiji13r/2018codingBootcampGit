if (!process.argv[3]) {
    console.log("Missing Argument");
    return false;
  } else {
    var command = process.argv[2];
    var a = parseFloat(process.argv[3]);
    var b = parseFloat(process.argv[4]);
  }
  
  switch (command) {
    case "add":
      console.log(a + b);
      break;
    case "subtract":
    case "sub":
    case "-":
      console.log(a - b);
      break;
    case "multiply":
    case "mul":
      console.log(a * b);
      break;
    case "divide":
    case "div":
      console.log(a / b);
      break;
    case "remainder":
      console.log(a % b);
      break;
    case "exp":
      console.log(a ** b);
      break;
    case "algebra":
      solveAlgebra(process.argv[3]);
      break;
    default:
      console.log("Invalid operation");
  }
  
  function solveAlgebra(exp) {
    //ax + b = c
    let args = exp.split("=");
    let c = parseFloat(args[1]);
    let args2 = args[0].split("+");
    let b = parseFloat(args2[1]);
    let a = parseFloat(args2[0].replace("x", ""));
  
    console.log((c - b) / a);
  }