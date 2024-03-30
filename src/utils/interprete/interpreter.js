import {peg$parse} from "./translate.js";
import Swal from "sweetalert2";
import {peg$SyntaxError} from "../systax/grammar.js";
import { useState } from "react";

export function translate (string){
    try{
        const generateCod = peg$parse(string.replace(/\s/g, ""))
        if (generateCod){
            Swal.fire({
                title: "Código correcto!",
                text: string,
                icon: "success"
            });
            
            const capturedOutput = captureConsoleOutput(() => {
                eval(generateCod);
            });
            mostrarResultado(capturedOutput);
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
            const errorCode = document.getElementById('garrick');
            errorCode.innerText = error
        }
        return false;
    }
}
// Función para capturar la salida de console.log
function captureConsoleOutput(callback) {
    let capturedOutput = '';
    const originalConsoleLog = console.log;
    console.log = function(message) {
        capturedOutput += message + '\n';
    };
    callback();
    console.log = originalConsoleLog;
    return capturedOutput;
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(resultado) {
    const resultadoElemento = document.getElementById('garrick');
    resultadoElemento.innerText = resultado;
}