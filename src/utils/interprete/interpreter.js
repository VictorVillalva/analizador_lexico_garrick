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
            
            const contentInQuotes = generateCod.match(/"(.*?)"/); // Expresión regular para encontrar contenido entre comillas
            if (contentInQuotes) {
                console.log(contentInQuotes[1]); // Imprimir solo el contenido entre comillas
            }
            // Abrir una nueva ventana y escribir el código generado en ella
            // const newWindow = window.open();
            // newWindow.document.write('<html><head><title>Garrick-v1.js</title></head><body><script>');
            // newWindow.document.write(generateCod);
            // newWindow.document.write('</script></body></html>');
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
