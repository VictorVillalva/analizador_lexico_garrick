start = program;

program = statements:statement+ {
    return statements.join('\n');
};

statement = writeStatement / funcDeclaration / classDeclaration / ifStatement / foreStatement / funcCalling / variableDeclaration / variableAssignation

writeStatement = "write" '("' str:identifier '")' {
    return 'console.log("' + str + '");';
}

classDeclaration =
  "class" str:identifier "(" ")" "{" body:classBody "}" {
    return 'class ' + str + ' {\n' + body.join('\n') + '\n}';
  }


classBody = (statement)*;

funcDeclaration = "func" str:identifier "(" ")" "{" body:funcBody "}" {
    return 'function ' + str + "()" + ' {\n' + body.join('\n') + '\n}';
}


funcBody = (funcCalling / writeStatement / ifStatement / foreStatement / variableDeclaration / variableAssignation)*;

ifStatement = "if" "(" left:identifier operator:comparisonOperator right:(identifier / number) ")" "{" body:funcBody "}" {
    return 'if (' + left + ' ' + operator + ' ' + right + ') {\n' + body.join('\n') + '\n}';
}

foreStatement = "fore" "(" left:identifier operator:comparisonOperator right:(identifier / number) ")" "{" body:funcBody "}" {
    return 'while (' + left + ' ' + operator + ' ' + right + ') {\n' + body.join('\n') + '\n}';
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
  id:identifier ":" value:boolean { return id + ' = ' + value; } /
  id:identifier "+:" value:number { return id + ' += ' + value; } /
  id:identifier "+:" value:string { return id + ' += ' + value; } /
  id:identifier "-:" value:number { return id + ' -= ' + value; }

comparisonOperator = "==" / "!=" / "<" / ">" / ">=" / "<=" { return text(); }

identifier = [a-zA-Z]+ { return text(); }
number = [0-9]+ { return text(); }
string = '"' id:identifier '"' { return '"' + id + '"'; }
boolean = "true" / "false" { return text(); }
readingFunc = identifier { return identifier; }
