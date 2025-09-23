# Compila la imagen de Docker
docker build  -t gabiperez/req-nlp-app:latest .

# Publica la imagen en Docker Hub  (estar logueado)
docker push gabiperez/req-nlp-app:latest

# Ejecuta el contenedor de la aplicación
oc apply -f k8s/webapp.yaml

echo "https://toolkit-req-nlp.okd.lifia.info.unlp.edu.ar/"