IMAGE=theremix/neon-riot
PORT=3000

default: run

docker:
	docker build -t ${IMAGE} .

run: docker
	docker run -p ${PORT}:80 ${IMAGE}
