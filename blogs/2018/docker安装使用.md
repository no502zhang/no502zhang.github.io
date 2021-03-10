## 安装命令

	sudo apt update
	sudo apt install docker.io
	
## 使用
0. 为了避免每次命令都输入sudo，可以把用户加入 Docker 用户组, 加入后需要重新登录该用户

	sudo usermod -aG docker zhang

1. 列出本机所有镜像

	docker images

2. 列出本机的所有容器

	docker ps -a

3. 列出正在运行的容器

	docker ps

2. 删除镜像,其中镜像ID通过"docker images"查出来

	docker rmi 镜像ID

3. 停止一个容器

	docker stop 容器ID

3. 删除容器

	docker rm 容器ID
	
4. 容器中运行命令

	docker run 容器全名 要在镜像中运行的命令

5. 保存镜像

	docker save 镜像名称  -o  保存的文件名(tar格式)

6. 加载镜像

	docker load -i 镜像文件

7. 安装docker-compose, 从 Github 上下载它的二进制包来使用，[最新发行的版本地址](https://github.com/docker/compose/releases)

	# 下载
	sudo curl -L "https://github.com/docker/compose/releases/download/1.27.0-rc2/docker-compose-Linux-x86_64" -o /usr/local/bin/docker-compose
	# 授予可执行权限
	sudo chmod +x /usr/local/bin/docker-compose
	# 创建软链
	sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
	# 使用 创建 docker-compose.yml后执行
	docker-compose up -d

7. 设置镜像服务器

	# 
	# 镜像服务器是否生效
	docker info|grep Mirrors -A 1

docker pull wurstmeister/kafka