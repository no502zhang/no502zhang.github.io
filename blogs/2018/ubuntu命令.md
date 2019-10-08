## 升级软件
如果使用ubuntu16.04以下的系统，以下所有apt都修改为apt-get  
获取更新信息

	sudo apt update

查看有哪些可更新的

	sudo apt list --upgradable
	
更新操作

	sudo apt upgrade

清除旧的组件

	sudo apt autoremove
	
卸载

	sudo apt purge xxx
	
## SSH
SSH连接命令

	ssh root@192.168.0.11
	
## 创建软连接

	ln -s 源地址 目的地址
	ln -s registry-1.0-SNAPSHOT.jar registry.jar