start = program ;

program = moduloDeclaration / classDeclaration / funcDeclaration / ifFunction / foreFunction / variableDeclaration / funcCalling / writingFunc / readingFunc ;
moduloDeclaration = "modulo" identifier dot "util";
classDeclaration = "Class" identifier "(" ")" "{" "}" ;
funcDeclaration = "func" identifier "{" "}" ;
ifFunction = "if" "(" condition ")" "{" "}" ;
foreFunction = "fore" "(" condition ")" "{" "}" ;
variableDeclaration = "int" identifier ":" number / "string" identifier ":" string / "bool" identifier ":" boolean / "int" identifier / "string" identifier / "bool" identifier ;
funcCalling = identifier "(" ")" ;
writingFunc = "write" "(" identifier ")" / "write" "(" string ")" ;
readingFunc = "read" "(" ")" / "read" "(" string ")" ;


condition = identifier operator identifier / identifier operator number;
identifier = [a-zA-Z]+ ;
number = [0-9]+ ;
string = '"' identifier '"'
dot = [.];
boolean = "true" / "false" ;
operator = "==" / "!=" / "<" / ">" / ">=" / "<=" ;