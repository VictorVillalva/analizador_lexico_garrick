import {useState} from "react";

function Garrick (){
    const [string, setString] = useState();

    const gramatica = {
        "class" : "classKeyWord",
        "modulo": "moduloKeyWord",
        "func":"funcKeyWord",
        "fore":"forKeyWord",
        "while": "whileKeyWord",
        "if": "ifKeyWord",
        "read": "readKeyWord",
        "write": "writeKeyWord",
        "(": "parentesisAperturaSimbolo",
        ")": "parentesisCerraduraSimbolo",
        "{": "corcheteAperturaSimbolo",
        "}": "corcheteCierreSimbolo",
        ":": "asignacionSimbolo",
        "int": "tipoDato",
        "str": "tipoDato",
        "bool": "tipoDato",
        "True": "boolean",
        "False": "boolean",
        "<": "operadorSimbolo",
        ">": "operadorSimbolo",
        "!": "operadorSimbolo",
        "<=": "operadorSimbolo",
        ">=": "operadorSimbolo",
        ";" : "puntoComaSimbolo",
        '"': "comillaSimbolo",

    }

    function analizar() {
        let texto = string;

        // Utilizar expresiones regulares para identificar elementos
        const regex = /\s*([a-zA-Z]+|[0-9]+|"[^"]*"|[^\s])\s*/g;
        const matches = texto.matchAll(regex);

        let lexema = "";
        let token = "";

        for (const match of matches) {
            const element = match[1];
            const isInGramatica = gramatica[element];

            if (isInGramatica) {
                token = isInGramatica;
                lexema = element;
            } else if (/^"[^"]*"$/.test(element)) {
                token = "cadena";
                lexema = element.slice(1, -1); // Eliminar las comillas alrededor de la cadena
            } else if (/[a-z]+[0-9]*/.test(element)) {
                token = "identificador";
                lexema = element;
            } else {
                console.log(element, " is not part of the grammar");
            }

            console.log(`token= ${token}, lexema = ${lexema}`);
        }
    }

    const  handlerStringChange =(e)=>{
        setString(e.target.value)
    }



    return(
        <>
            <div>
                <input onChange={handlerStringChange}/>
                <br/>
                <button onClick={analizar}> Analizar </button>
            </div>

        </>
    )
}


export default Garrick

