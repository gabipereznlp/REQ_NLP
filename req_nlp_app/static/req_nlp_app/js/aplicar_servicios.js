function mostrarResultado() {
    const textarea = document.getElementById("editor-texto");
    const texto = textarea.value;
    const invertir = document.getElementById("invertir-texto").checked;
     
    const url = `${INVERTIR_TEXTO_API_URL}/invertir_texto/?texto=${encodeURIComponent(texto)}`;

    if (invertir) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById("resultados").innerText = data.respuesta;
            })
            .catch(error => {
                console.error("[ERROR] Fallo al llamar al servicio:", error);
                document.getElementById("resultados").innerText = "Ocurrió un error al procesar.";
            });
    } else {
        document.getElementById("resultados").innerText = "No se seleccionó la opción 'Invertir texto'.";
    }
}