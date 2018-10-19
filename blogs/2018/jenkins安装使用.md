## 安装Jenkins

    wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
    sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
    sudo apt-get update
    sudo apt-get install jenkins
	
## 安装maven
可以手动安装maven, 也可以让jenkins自动安装

	sudo apt-get install maven

## 安装插件
安装插件需要修改插件下载地址, 不然在国内很容易安装失败
在 [系统管理->插件管理->高级], 将Update Site设置为清华大学镜像

	https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json
	
需要安装的插件有 GitHub plugin, Maven Integration, Publish Over SSH