//
// import {peg$parse} from "./translate.js";
// import Swal from "sweetalert2";
// import {peg$SyntaxError} from "../systax/grammar.js";
//
// export function translate (string){
//     try{
//         const generateCod = peg$parse(string.replace(/\s/g, ""))
//         if (generateCod){
//             Swal.fire({
//                 title: "codigo correcto!",
//                 text: string,
//                 icon: "success"
//             });
//             const blob = new Blob([generateCod], { type: 'text/javascript' });
//             const url = URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.href = url;
//             a.download = 'Garrick-v1.js';
//             a.click();
//             URL.revokeObjectURL(url);
//         }
//
//
//     }catch (error) {
//         if (error instanceof peg$SyntaxError) {
//             console.error("Error sintáctico:", error.message);
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: error.message,
//                 footer: '<a>Revise que la gramatica sea la correcta</a>'
//             });
//             return false
//
//
//         } else {
//             console.error("Error al analizar:", error);
//             return false
//         }
//     }
// }


import {peg$parse} from "./translate.js";
import Swal from "sweetalert2";
import {peg$SyntaxError} from "../systax/grammar.js";

export function translate (string){
    try{
        const generateCod = peg$parse(string.replace(/\s/g, ""))
        if (generateCod){
            Swal.fire({
                title: "Código correcto!",
                text: string,
                icon: "success"
            });

            // Abrir una nueva ventana y escribir el código generado en ella
            const newWindow = window.open();
            newWindow.document.write('<html><head><title>Garrick-v1.js</title></head><body><script>');
            newWindow.document.write(generateCod);
            newWindow.document.write('</script></body></html>');
        }

    } catch (error) {
        if (error instanceof peg$SyntaxError) {
            console.error("Error sintáctico:", error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                footer: '<a>Revise que la gramática sea la correcta</a>'
            });
        } else {
            console.error("Error al analizar:", error);
        }
        return false;
    }
}
