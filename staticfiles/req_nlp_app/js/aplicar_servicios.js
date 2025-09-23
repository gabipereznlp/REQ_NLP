function mostrarResultado2() {
    const textarea = document.getElementById("editor-texto");
    const texto = textarea.value;
    const invertir = document.getElementById("invertir-texto").checked;

    console.log("[DEBUG] Texto capturado:", texto);
    console.log("[DEBUG] Checkbox 'invertir-texto' marcado:", invertir);

    if (invertir) {
        const url = `http://127.0.0.1:8001/invertir_texto/?texto=${encodeURIComponent(texto)}`;
        console.log("[DEBUG] URL del fetch:", url);

        fetch(url)
            .then(response => {
                console.log("[DEBUG] Estado del response:", response.status);
                return response.json();
            })
            .then(data => {
                console.log("[DEBUG] Datos recibidos:", data);
                document.getElementById("resultados").innerText = data.respuesta;
            })
            .catch(error => {
                console.error("[ERROR] Fallo al llamar al servicio:", error);
                document.getElementById("resultados").innerText = "Ocurrió un error al procesar.";
            });
    } else {
        console.log("[DEBUG] Checkbox no está marcado. No se hace fetch.");
        document.getElementById("resultados").innerText = "No se seleccionó la opción 'Invertir texto'.";
    }
}

function mostrarResultado() {
    const textarea = document.getElementById("editor-texto");
    const texto = textarea.value;
    const invertir = document.getElementById("invertir-texto").checked;
    const baseUrl = getBaseUrl();

    const url = `${baseUrl}/invertir_texto/?texto=${encodeURIComponent(texto)}`;

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