let BACKEND_URL = null;

async function cargarConfiguracion() {
    try {
        const response = await fetch("/config/");
        const config = await response.json();
        BACKEND_URL = config.backend_url;
        console.log("[DEBUG] BACKEND_URL cargada:", BACKEND_URL);
    } catch (error) {
        console.error("[ERROR] No se pudo cargar la configuración:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarConfiguracion);


function getBaseUrl() {
    if (BACKEND_URL) return BACKEND_URL;

    const isDevTunnel = window.location.hostname.includes("devtunnels.ms");
    return isDevTunnel 
        ? "https://m2060nsc-8001.brs.devtunnels.ms"
        : "http://127.0.0.1:8001";
}
