## 安装命令

	sudo apt update
	sudo apt install docker.io
	
## 使用
1. 列出本机所有镜像

	docker images

2. 列出本机的所有容器

	docker ps -a

3. 列出正在运行的容器

	docker ps

2. 删除镜像,其中镜像ID通过"docker images"查出来

	docker rmi 镜像ID

3. 删除容器

	docker rm 容器ID
	
4. 容器中运行命令

	docker run 容器全名 要在镜像中运行的命令

5. 保存镜像

	docker save 镜像名称  -o  保存的文件名(tar格式)

6. 加载镜像

	docker load -i 镜像文件