import {useState} from "react";
import '../assets/styles/garrick.css'
import {lexicalParseValidator} from "../utils/lexical/lexical_parser.js";
import { useTokenAndLexemaState} from "../utils/lexical/lexical_parser.js";
import {syntaxParserValidator} from "../utils/systax/syntax_parser.js";
import {translate} from "../utils/interprete/interpreter.js";


function Garrick (){
    const [string, setString] = useState("");
    const { token, lexama,setToken,setLexema, handleClear } = useTokenAndLexemaState();

    const  handlerStringChange =(e)=>{
        setString(e.target.value)
    }


    const handleAnalizar = () => {
        let lexicalValidate = lexicalParseValidator(string,setToken,setLexema);
        if(lexicalValidate){
            let syntaxValidate =syntaxParserValidator(string.replace(/\s/g, ""))
            if (syntaxValidate){
                translate(string.replace(/\s/g, ""))
            }
        }
    }


    return(
        <>
            <section className="one">
                <header>
                    <h1 className="title">Analizador Lexico</h1>
                    <p className='txt_garrick'>Lenguaje de Programación <span className="garrick-name">Garrick</span></p>
                </header>
            </section>
            <section className="two">
                <div className="container">
                    <div className="garrick-gramatic">
                        <p>Editor de Codigo</p>
                        <textarea className="code-editor" type="text" onChange={handlerStringChange}></textarea>
                        <div className="buttons-actions">
                            <button onClick={handleAnalizar}>Analizar</button>
                            <button className="limpiar" onClick={handleClear} >Limpiar</button>
                        </div>
                    </div>
                    <div className="show-data">
                        <p>Tokens</p>
                        <div className="show-tokens">
                            {token.map((token, index) => (<p  key={index}>{token}</p> ))}
                        </div>
                        <p>Lexemas</p>
                        <div className="show-lexemas">
                            {lexama.map((lexama, index) => ( <p  key={index}>{lexama}</p> ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="dos">
                <div className="ingreso_datos">
                    <div className='ingreso_caracteres'>
                        
                        <textarea type="text" onChange={handlerStringChange} className="code-garrick"/>
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
                    <div className="code-garrick-result" id="garrick"></div>
                </div>
            </section> */}
        </>
    )
}


export default Garrick

