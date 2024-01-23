import {useState} from "react";
import '../assets/styles/garrick.css'

function Garrick (){
    const [string, setString] = useState();
    const [token, setToken] = useState([]);
    const [lexama, setLexema] = useState([]);


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
                lexema = element.slice(1, -1); // Eliminar las comillas alrededor de la cadena
            } else if (/[a-z]+[0-9]*/.test(element)) {
                token = "identificador";
                lexema = element;
            } else {
                console.log(element, " is not part of the grammar");

            }

            console.log(` |Token= ${token}, lexema = ${lexema}`);
            tokens.push(`| Token = ${token}`);
            lexemas.push(`| Lexema = ${lexema}`);

        }
        setToken(tokens);
        setLexema(lexemas);
    }

    const  handlerStringChange =(e)=>{
        setString(e.target.value)
    }



    return(
        <>
            <section className="uno">
                <header>
                    <h1>Analizador Lexico</h1>
                    <p className='txt_garrick'>Garrick</p>
                </header>
            </section>
            <section className="dos">
                <div className="ingreso_datos">
                    <div className='ingreso_caracteres'>
                        <input type="text" onChange={handlerStringChange}/>
                        <button onClick={analizar}>Analizar</button>
                    </div>
                    <div className="datos">
                        <div className="tipo">
                            <p className="tipo_txt"> | Tokens</p>
                            <div className="tokens">
                                {token.map((token, index) => (
                                    <p key={index}>{token}</p>
                                ))}
                            </div>
                        </div>
                        <div className="tipo">
                            <p className="tipo_txt"> | Lexemas</p>
                            <div className="lexemas">
                                {lexama.map((lexama, index) => (
                                    <p key={index}>{lexama}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Garrick

