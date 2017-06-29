IMAGE=theremix/neon-riot
PORT=3000

default: docker

docker:
	docker build -t ${IMAGE} .

run: docker
	docker run -p ${PORT}:80 ${IMAGE}
