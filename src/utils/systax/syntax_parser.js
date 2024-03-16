import {peg$parse, peg$SyntaxError} from "./grammar.js";
import Swal from 'sweetalert2'


export function syntaxParserValidator(string) {
    try {
        const ast = peg$parse(string);
        if(ast){
            Swal.fire({
                title: "sintaxis correcta!",
                text: string,
                icon: "success"
            });
        }


    } catch (error) {
        if (error instanceof peg$SyntaxError) {
            console.error("Error sintáctico:", error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                footer: '<a>Revise que la gramatica sea la correcta</a>'
            });


        } else {
            console.error("Error al analizar:", error);
        }
    }
}
