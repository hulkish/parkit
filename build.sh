docker build -t parkit-app .
docker run -p 80:9000 --name parkit-app-instance parkit-app
