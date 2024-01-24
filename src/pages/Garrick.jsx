import {useState} from "react";
import '../assets/styles/garrick.css'

function Garrick (){
    const [string, setString] = useState();
    const [token, setToken] = useState([]);
    const [lexama, setLexema] = useState([]);


    const gramatica = {
        "class" : "class-Keyword",
        "modulo": "modulo-Keyword",
        "func":"func-Keyword",
        "fore":"for-Keyword",
        "while": "while-Keyword",
        "if": "if-Keyword",
        "read": "read-Keyword",
        "write": "write-Keyword",
        "(": "parentesis-AperturaSimbolo",
        ")": "parentesis-CerraduraSimbolo",
        "{": "corchete-AperturaSimbolo",
        "}": "corchete-CierreSimbolo",
        ":": "asignacion-Simbolo",
        "int": "tipo-Dato",
        "str": "tipo-Dato",
        "bool": "tipo-Dato",
        "True": "boolean",
        "False": "boolean",
        "<": "operador-Simbolo",
        ">": "operador-Simbolo",
        "!": "operador-Simbolo",
        "<=": "operador-Simbolo",
        ">=": "operador-Simbolo",
        "=" : "operador-Simbolo",
        ",": "coma-Simbolo",
        ";" : "puntoComa-Simbolo",
        ".": "punto-Simbolo",
        '"': "comilla-Simbolo",

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

            }

            console.log(` |Token= ${token}, lexema = ${lexema}`);
            tokens.push(`| Token = ${token}`);
            lexemas.push(`| Lexema = ${lexema}`);

        }
        setToken(tokens);
        setLexema(lexemas);
    }

    const handleClear = () =>{
        setLexema([])
        setToken([])
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
                        <textarea type="text" onChange={handlerStringChange}/>
                        <button onClick={analizar}>Analizar</button>
                        <button className='limpiar' onClick={handleClear} >Limpiar</button>
                    </div>
                    <div className="datos">
                        <div className="tipo">
                            <p className="tipo_txt"> | Tokens</p>
                            <div className="tokens" id='tok'>
                                {token.map((token, index) => (
                                    <p  key={index}>{token}</p>
                                ))}
                            </div>
                        </div>
                        <div className="tipo">
                            <p className="tipo_txt"> | Lexemas</p>
                            <div className="lexemas" id='lex'>
                                {lexama.map((lexama, index) => (
                                    <p  key={index}>{lexama}</p>
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

