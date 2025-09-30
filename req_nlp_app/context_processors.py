import os

def entorno_variable(request):
    return {
        'API_INVERTIR_TEXTO_URL': os.environ.get('API_INVERTIR_TEXTO_URL', ''),
        'API_VOZ_PASIVA_URL': os.environ.get('API_VOZ_PASIVA_URL', ''), 
        'API_WORD_REPETITION_URL': os.environ.get('API_WORD_REPETITION_URL', '')
    }