## 安装

	sudo apt update
	sudo apt install docker.io
	
## 使用
+ 为了避免每次命令都输入sudo，可以把用户加入 Docker 用户组, 加入后需要重新登录该用户

	sudo usermod -aG docker zhang

+ 列出本机所有镜像

	docker images

+ 列出本机的所有容器

	docker ps -a

+ 列出正在运行的容器

	docker ps

+ 列出正在运行的容器资源使用情况

	docker stats

+ 删除镜像,其中镜像ID通过"docker images"查出来

	docker rmi 镜像ID

+ 停止一个容器

	docker stop 容器ID

+ 删除容器

	docker rm 容器ID

+ 查看容器日志

	docker logs 容器全名

+ 容器中运行命令

	docker run 容器全名 要在镜像中运行的命令

+ 在运行的容器中执行命令，开启一个交互模式的终端

	docker exec -i -t  容器全名 /bin/bash

+ 保存镜像

	docker save 镜像名称  -o  保存的文件名(tar格式)

+ 加载镜像

	docker load -i 镜像文件

## 安装docker-compose
+ 从 Github 上下载安装，[最新发行的版本地址](https://github.com/docker/compose/releases)

	#下载  
	sudo curl -L "https://github.com/docker/compose/releases/download/1.27.0-rc2/docker-compose-Linux-x86_64" -o /usr/local/bin/docker-compose

	#授予可执行权限  
	sudo chmod +x /usr/local/bin/docker-compose

	#创建软链  
	sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose


+ 使用pip安装docker-compose

	#安装pip  
	sudo apt install python3-pip

	#安装docker-compose  
	sudo pip3 install docker-compose

	#查看docker-compose版本  
	docker-compose --version

+ 使用apt安装

	#ubuntu20.04可以直接使用apt安装
	sudo apt install docker-compose


## 使用docker-compose

	#创建 docker-compose.yml后在docker-compose.yml所在目录执行  
	docker-compose up -d
	#重启，不会更新docker-compose.yml中内容
	docker-compose restart
	#停止
	docker-compose stop
	#停止并删除
	docker-compose down
	#启动过程中出错会导致无法stop和down，执行以下命令清除错误信息
	sudo aa-remove-unknown


在docker-compose部署的情况下如果修改内容只需要修改docker-compose.yml文件对应的地方,例如2181:2181改成2182:2182,然后再次在docker-compose.yml文件对应的目录下执行docker-compose up -d就能达到更新后的效果。


## 使用 Dockerfile 定制镜像
Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

	#定制的镜像都是基于 FROM 的镜像，这里的 java:8 就是定制需要的基础镜像。 
	FROM java:8
	# VOLUME 指定了临时文件目录为/tmp。
	# 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp
	VOLUME /tmp 
	# 将jar包添加到容器中并更名为app.jar
	ADD demo-0.0.1-SNAPSHOT.jar app.jar 
	# RUN 用于执行后面跟着的命令行命令。运行jar包
	RUN bash -c 'touch /app.jar'