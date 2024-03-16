start = program ;

program = (moduloDeclaration / classDeclaration / funcDeclaration / ifFunction / foreFunction / variableDeclaration / funcCalling / writingFunc / readingFunc)+ ;
moduloDeclaration = "modulo" identifier dot "util";
classDeclaration = "class" identifier "(" ")" "{" (funcDeclaration / ifFunction / foreFunction / variableDeclaration / funcCalling / writingFunc / readingFunc)* "}" ;
funcDeclaration = "func" identifier "(" ")" "{" (ifFunction / foreFunction / variableDeclaration / funcCalling / writingFunc / readingFunc)* "}" ;
ifFunction = "if" "(" condition ")" "{" (ifFunction / foreFunction / variableDeclaration / funcCalling / writingFunc / readingFunc)* "}" ;
foreFunction = "fore" "(" condition ")" "{" (ifFunction / foreFunction / variableDeclaration / funcCalling / writingFunc / readingFunc)* "}" ;
variableDeclaration = "int" identifier ":" number / "string" identifier ":" string / "bool" identifier ":" boolean / "int" identifier / "string" identifier / "bool" identifier / "int" identifier ":" readingFunc / "string" identifier ":" readingFunc / "bool" identifier ":" readingFunc / identifier ":" number / identifier ":" string / identifier ":" boolean / identifier "+:" number / identifier "+:" string/ identifier "-:" number ;
funcCalling = identifier "(" (identifier)* ")" ;
writingFunc = "write" "(" identifier ")" / "write" "(" string ")" ;
readingFunc = "read" "(" ")" / "read" "(" string ")" ;


condition = identifier operator identifier / identifier operator number;
identifier = [a-zA-Z]+ ;
number = [0-9]+ ;
string = '"' identifier '"'
dot = [.];
boolean = "true" / "false" ;
operator = "==" / "!=" / "<" / ">" / ">=" / "<=" ;