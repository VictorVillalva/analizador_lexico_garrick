import {useState, useRef} from "react";



function App() {
    const [valor, setValor] = useState("");
    const inputRef = useRef(null);

    const palabrasReservadas = [
        "modulo",
        "util",
    ];

    const handleInputChange = (event) => {
        setValor(event.target.value);

        // Nos aseguramos de que el focus permanezca en el input después de que el valor cambie
        // Esto evita que el input pierda el foco al escribir
        inputRef.current.focus();
    };

    return (
        <div>
            <input
                type="text"
                id="input"
                value={valor}
                ref={inputRef}
                onChange={handleInputChange}
            />

            <button onClick={handleInputChange}>Comprobar</button>

            {/* Mostramos los resultados solo si hay un valor ingresado */}
            {valor && (
                <div>
                    <p>Palabras reservadas: {valor
                        ?.match(/(modulo|util)/g)
                        ?.filter((match) => !palabrasReservadas.includes(match))
                        ?.length}</p>
                    <p>Identificadores: {valor.match(/[a-zA-Z_][a-zA-Z0-9_]*/g)?.length}</p>
                </div>
            )}
        </div>
    );
}


export default App
