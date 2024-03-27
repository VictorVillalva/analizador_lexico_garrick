
import '../assets/styles/homeGarrick.css'


const homeGarrick = () => {
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
                        <textarea className='show-editor-code' name="" id=""></textarea>
                        <div className="buttons">
                            <button className="compile">Compilar</button>
                            <button className="clear">Limpiar</button>
                        </div>
                    </div>
                    <div className="tokens-lexemas">
                        <div className="tokens">
                            <p className="txt-tokens">Tokens</p>
                            <div className="show-tokens">
                                <p className='toklex'>Aqui muestro los tokens</p>
                            </div>
                        </div>
                        <div className="lexemas">
                            <p className="txt-lexemas">Lexemas</p>
                            <div className="show-lexemas">
                                <p className='toklex'>Aqui muestro lexemas</p>
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
                    <div className="show-code-garrick">Aqui se muestra codigo garrick</div>
                </div>
            </div>
        </section>
        </>
    )
}

export default homeGarrick