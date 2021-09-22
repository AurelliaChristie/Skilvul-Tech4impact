/// Question - 01
/// You are asked to analyze the codes below
/// - what will console.log return?
/// - what is the reason that the console.log won't return the value of "name" variable?

/// Answer
/// - console.log will return "Mariah"
/// - The return won't be "John" since "name" in the printFirstName function is a parameter, is not the global variable "name" which contains "John Watson".
///   Then, in the console.log, the user inputs the argument of "Mariah Carey" which will be the "name" parameter in the printFirstName function. 
///   Therefore, the result will be "Mariah", instead of "John".

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));


/// Question - 02
/// You are asked to analyze the codes below
/// - what will happen if we run the codes?
/// - what is the reason of the output?
///   - from the POV of salaryWithVar
///   - from the POV of salaryWithConst

/// Answer
/// - The outputs will be '15000000' for the first console.log and 'ReferenceError: salaryWithConst is not defined' for the second one.
/// - The reasons: this is the implementation of JavaScript Hoisting, which is JavaScript's default behavior of moving declarations to the top.
///     - salaryWithVar will return 15000000 since it is declared using var. Variable declared with var will be hoisted and initialized, therefore it can be used before it has been declared.
///     - salaryWithConst will return ReferenceError since it is declared using const. Variable declared with const are hoisted but not initialized, therefore it can't be used before it has been declared.

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
