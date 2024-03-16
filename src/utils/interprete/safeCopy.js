//? IMPORTANTE
//! FALTA CORREGIR QUE LOS LOGS SOPORTEN ESPACIOS EN LA CADENA
//! FALTA CORREGIR QUE LOS CONDICIONALES ACEPTEN : <= Y >=
//! FALTA AGREGAR QUE SE ENTRELACEN LAS FUNCIONES Y QUE SE GENERE BONITO EL JS

/*

start = program;

program = statement+;

statement = writeStatement / funcDeclaration / classDeclaration / ifStatement / foreStatement / funcCalling / variableDeclaration / variableAssignation

writeStatement = "write" '("' str:identifier '")' {
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

variableDeclaration =
  "int" id:identifier ":" value:number { return 'let ' + id + ' = ' + value; } /
  "string" id:identifier ":" value:string { return 'let ' + id + ' = ' + value; } /
  "bool" id:identifier ":" value:boolean { return 'let ' + id + ' = ' + value; } /
  "int" id:identifier { return 'let ' + id; } /
  "string" id:identifier { return 'let ' + id; } /
  "bool" id:identifier { return 'let ' + id; } /
  "int" id:identifier ":" value:readingFunc { return 'let ' + id + ' = ' + value; } /
  "string" id:identifier ":" value:readingFunc { return 'let ' + id + ' = ' + value; } /
  "bool" id:identifier ":" value:readingFunc { return 'let ' + id + ' = ' + value; }

variableAssignation =
  id:identifier ":" value:number { return id + ' = ' + value; } /
  id:identifier ":" value:string { return id + ' = ' + value; } /
  id:identifier ":" value:boolean { return id + ' = ' + value; }

comparisonOperator = "==" / "!=" / "<" / ">" / ">=" / "<=" { return text(); }

identifier = [a-zA-Z]+ { return text(); }
number = [0-9]+ { return text(); }
string = '"' id:identifier '"' { return '"' + id + '"'; }
boolean = "true" / "false" { return text(); }
readingFunc = identifier { return identifier; }


*/