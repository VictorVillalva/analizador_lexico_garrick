//? IMPORTANTE
//! FALTA CORREGIR QUE LOS LOGS SOPORTEN ESPACIOS EN LA CADENA
//! FALTA CORREGIR QUE LOS CONDICIONALES ACEPTEN : <= Y >=

/*
 start = program;

program = statement+;

statement = writeStatement / funcDeclaration / classDeclaration / ifStatement / foreStatement / funcCalling

writeStatement = "write" "(" str:identifier ")" {
    return 'console.log("' + str + '");';
}

classDeclaration = "Class" str:identifier "(" ")" "{" "}" {
    return 'class ' + str + '{}';
}

funcDeclaration = "func" str:identifier "(" ")" "{" "}" {
    return 'function ' + str + '(){}';
}

ifStatement = "if" "(" left:identifier operator:comparisonOperator right:(identifier / number) ")" "{" "}" {
    return 'if (' + left + ' ' + operator + ' ' + right + ') {}';
}

foreStatement = "fore" "(" left:identifier operator:comparisonOperator right:(identifier / number) ")" "{" "}" {
    return 'while (' + left + ' ' + operator + ' ' + right + ') {}';
}

funcCalling = id:identifier "(" ")" {
    return id + '()';
}

comparisonOperator = "==" / "!=" / "<" / ">" / ">=" / "<=" { return text(); }

identifier = [a-zA-Z]+ { return text(); }
number = [0-9]+ { return text(); }

*/