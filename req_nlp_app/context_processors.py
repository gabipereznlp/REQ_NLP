import os

def entorno_variable(request):
    return {
        'INVERTIR_TEXTO_API_URL': os.environ.get('INVERTIR_TEXTO_API_URL', '')
    }