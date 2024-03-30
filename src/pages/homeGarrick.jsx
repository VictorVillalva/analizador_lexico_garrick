import '../assets/styles/homeGarrick.css'
import { useState } from 'react'
import { lexicalParseValidator } from "../utils/lexical/lexical_parser.js";
import { useTokenAndLexemaState } from "../utils/lexical/lexical_parser.js";
import { syntaxParserValidator } from "../utils/systax/syntax_parser.js";
import { translate } from '../utils/interprete/interpreter'


const homeGarrick = () => {
    const [string, setString] = useState("");
    const {token, lexama, setToken, setLexema, handleClear} = useTokenAndLexemaState();

    const handlerStringChange = (e) =>{
        setString(e.target.value)
    }

    const handlerCompile = () => {
        let lexicalValidate = lexicalParseValidator(string,setToken,setLexema);
        if(lexicalValidate) {
            let syntaxValidate = syntaxParserValidator(string.replace(/\s/g, ""));
            if (syntaxValidate) {
                translate(string.replace(/\s/g, ""))
            }
        }
    }

    const limpiarContenido = () => {
        const divElemento = document.getElementById('garrick');
        divElemento.innerText = ""; // O divElemento.innerHTML = "";
    };

    const clearDivs = () => {
        limpiarContenido();
        handleClear();
    }

    return(
        <>
        <header>
            <div className="nav">
                <span className='title'>Analizador Léxico</span>
                <p className='subtitle'>Lenguaje de programación <span className='name-language'>Garrick</span></p>
            </div>
        </header>
        <section className="one">
            <div className="container">
                <div className="code-data-garrick">
                    <div className="code-editor">
                        <p className="txt-editor-code">Editor de Codigo</p>
                        <textarea className='show-editor-code' type='text' onChange={handlerStringChange}></textarea>
                        <div className="buttons">
                            <button className="compile" onClick={handlerCompile}>Compilar</button>
                            <button className="clear" onClick={clearDivs}>Limpiar</button>
                        </div>
                    </div>
                    <div className="tokens-lexemas">
                        <div className="tokens">
                            <p className="txt-tokens">Tokens</p>
                            <div className="show-tokens">
                                {token.map((token,index) => (
                                    <p className='toklex' key={index}>{token}</p>
                                ))}
                            </div>
                        </div>
                        <div className="lexemas">
                            <p className="txt-lexemas">Lexemas</p>
                            <div className="show-lexemas">
                                {lexama.map((lexama,index) => (
                                    <p className='toklex' key={index}>{lexama}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="two">
            <div className="container">
                <div className="show-code">
                    <p className="txt-show-code">Salida de Codigo</p>
                    <div className="show-code-garrick" id='garrick'></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default homeGarrick