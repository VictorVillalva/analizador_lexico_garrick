import {peg$parse, peg$SyntaxError} from "./grammar.js";


export function syntaxParserValidator(string) {
    try {
        const ast = peg$parse(string);
        console.log(ast);
        //TODO: AÑADIR VISTA GRAFICA
    } catch (error) {
        if (error instanceof peg$SyntaxError) {
            console.error("Error sintáctico:", error.message);
            //TODO: AÑADIR VISTA GRAFICA
        } else {
            console.error("Error al analizar:", error);
        }
    }
}