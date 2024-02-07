import {peg$parse } from '../utils/grammar.js'
function  Garrick2 (){
    const analizar = () => {
        try {
            const str = "write(name)";
            const ast = peg$parse(str);
            console.log(ast);
        } catch (error) {
            console.error("Error al analizar:", error);
        }
    }


    return(
        <>

            <button onClick={analizar}>analizar</button>
        </>
    )


}
export default Garrick2