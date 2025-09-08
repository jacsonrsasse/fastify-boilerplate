# Nome da imagem e do container
IMAGE_NAME=trust-issues
CONTAINER_NAME=$(IMAGE_NAME)-container
PORT=3000

# Default target
.PHONY: help
help:
	@echo "Comandos disponíveis:"
	@echo "  make build     - Build da imagem Docker"
	@echo "  make run       - Rodar container em background"
	@echo "  make logs      - Mostrar logs do container"
	@echo "  make stop      - Parar o container"
	@echo "  make restart   - Restartar o container"
	@echo "  make shell     - Entrar no bash do container"
	@echo "  make clean     - Remover container e imagem"

# Build da imagem
.PHONY: build
build:
	docker build -t $(IMAGE_NAME) .

# Rodar container (mapeando porta e carregando .env se existir)
.PHONY: run
run:
	docker run -d --name $(CONTAINER_NAME) \
		-p $(PORT):$(PORT) \
		--env-file .env \
		$(IMAGE_NAME)

# Mostrar logs
.PHONY: logs
logs:
	docker logs -f $(CONTAINER_NAME)

# Parar container
.PHONY: stop
stop:
	docker stop $(CONTAINER_NAME) || true

# Restart container
.PHONY: restart
restart: stop run

# Entrar no bash
.PHONY: shell
shell:
	docker exec -it $(CONTAINER_NAME) bash

# Remover container e imagem
.PHONY: clean
clean: stop
	docker rm -f $(CONTAINER_NAME) || true
	docker rmi -f $(IMAGE_NAME) || true
