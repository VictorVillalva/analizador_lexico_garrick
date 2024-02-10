import {useState} from "react";
import '../assets/styles/garrick.css'
import {lexicalParseValidator} from "../utils/lexical/lexical_parser.js";
import { useTokenAndLexemaState} from "../utils/lexical/lexical_parser.js";
import {syntaxParserValidator} from "../utils/systax/syntax_parser.js";


function Garrick (){
    const [string, setString] = useState("");
    const { token, lexama,setToken,setLexema, handleClear } = useTokenAndLexemaState();

    const  handlerStringChange =(e)=>{
        setString(e.target.value)
    }

    const handleAnalizar = () => {
        lexicalParseValidator(string,setToken,setLexema);
        syntaxParserValidator(string.replace(/\s/g, ""))
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
                        <button onClick={handleAnalizar}>Analizar</button>
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

