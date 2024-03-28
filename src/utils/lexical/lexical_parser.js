import {useState} from "react";
import Swal from "sweetalert2";

export function useTokenAndLexemaState() {
    const [token, setToken] = useState([]);
    const [lexama, setLexema] = useState([]);

    const handleClear = () => {
        setLexema([]);
        setToken([]);
        
    };

    return { token, lexama, setToken, setLexema, handleClear };
}


const gramatica = {
    "class" : "class-keyword",
    "modulo": "modulo-keyword",
    "func":"func-keyword",
    "fore":"fore-keyword",
    "while": "while-keyword",
    "if": "if-keyword",
    "read": "read-keyword",
    "write": "write-keyword",
    "(": "parentesis-aperturaSimbolo",
    ")": "parentesis-cerraduraSimbolo",
    "{": "corchete-aperturaSimbolo",
    "}": "corchete-cierreSimbolo",
    "+":"operador-simbolo",
    "-":"operador-simbolo",
    ":": "asignacion-simbolo",
    "int": "tipo-Dato",
    "str": "tipo-Dato",
    "bool": "tipo-Dato",
    "True": "boolean",
    "False": "boolean",
    "<": "operador-simbolo",
    ">": "operador-simbolo",
    "!": "operador-simbolo",
    "<=": "operador-Simbolo",
    ">=": "operador-Simbolo",
    "=" : "operador-Simbolo",
    ",": "coma-simbolo",
    ";" : "puntoComa-simbolo",
    ".": "punto-simbolo",
    '"': "comilla-simbolo",

}

export function lexicalParseValidator(string, setToken, setLexema) {
    let texto = string;
    // Utilizar expresiones regulares para identificar elementos
    const regex = /\s*([a-zA-Z]+|[0-9]+|"[^"]*"|[^\s])\s*/g;
    const matches = texto.matchAll(regex);
    let lexema = "";
    let token = "";

    let tokens = []
    let lexemas = []

    for (const match of matches) {
        const element = match[1];
        const isInGramatica = gramatica[element];

        if (isInGramatica) {
            token = isInGramatica;
            lexema = element;
        } else if (/^"[^"]*"$/.test(element)) {
            token = "cadena";
            lexema = element.slice(1, -1);
        } else if (/[a-z]+[0-9]*/.test(element)) {
            token = "identificador";
            lexema = element;
        } else if(/[0-9]+/.test(element)){
            token = "numero";
            lexema = element;
        }else {
            console.log(element, " is not part of the grammar");
            token = "ERROR"
            lexema = element
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "error de lexico encontrado",
                footer: '<a>Revise que no se presenten errores ortograficos</a>'
            });
            return false

        }

        console.log(` |Token= ${token}, lexema = ${lexema}`);
        tokens.push(`| Token = ${token}`);
        lexemas.push(`| Lexema = ${lexema}`);

    }
    setToken(tokens);
    setLexema(lexemas);
    return true
}

export const handleClear = () =>{
    setLexema([])
    setToken([])
}
