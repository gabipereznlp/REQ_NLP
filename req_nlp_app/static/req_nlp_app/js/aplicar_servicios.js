async function mostrarResultado() {
    const textarea = document.getElementById("editor-texto");
    const texto = textarea.value;
    const invertir = document.getElementById("invertir-texto").checked;
    const voz_pasiva = document.getElementById("voz-pasiva").checked;
    const word_repetition = document.getElementById("word-repetition").checked;

    const url_invertir_texto = `${API_INVERTIR_TEXTO_URL}/invertir_texto/?texto=${encodeURIComponent(texto)}`;
    const resultados = [];
    const promesas = [];

    if (invertir) {
        const p = fetch(url_invertir_texto)
            .then(response => response.json())
            .then(data => resultados.push("Texto Invertido: " + data.respuesta))
            .catch(error => resultados.push("Error al invertir: " + error));
        promesas.push(p);
    }

    if (voz_pasiva) {
        const p = fetch(`${API_VOZ_PASIVA_URL}/convertir`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ texto: texto })
        })
        .then(response => response.json())
        .then(data => resultados.push("Voz activa: " + data.activa))
        .catch(err => resultados.push("Error en voz pasiva: " + err));
        promesas.push(p);
    }
    if (word_repetition) {
        const p = fetch(`${API_WORD_REPETITION_URL}/repeticiones`,
             {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({
            texto: texto,
            sin_palabras_frecuentes: true,
            con_sustantivos_en_singular: false
            })
        })
        .then(response => response.json())
        .then(data => {
            const repeticiones = Object.entries(data)
                .map(([palabra, cantidad]) => `${palabra}: ${cantidad}`)
                .join(", ");
            resultados.push("Repeticiones: " + repeticiones);
        })
        .catch(err => resultados.push("Error en Repeticion de palabras: " + err));
        promesas.push(p);
    }

    if (promesas.length === 0) {
        resultados.push("No se seleccionó ninguna opción.");
    }

    await Promise.all(promesas);
    document.getElementById("resultados").innerText = resultados.join("\n");
}