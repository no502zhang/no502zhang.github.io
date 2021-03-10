## 使用verdaccio搭建npm私库

1. 安装nodejs和npm
2. 全局安装verdaccio

### 全局安装verdaccio
安装verdaccio之前，确认已经安装了nodejs和npm环境

    npm install -g verdaccio

### 运行
安装完成后直接输入 verdaccio 命令即可运行

    $ verdaccio
    warn --- config file  - /home/zhang/.config/verdaccio/config.yaml
    warn --- Verdaccio started
    warn --- Plugin successfully loaded: verdaccio-htpasswd
    warn --- Plugin successfully loaded: verdaccio-audit
    warn --- http address - http://localhost:4873/ - verdaccio/4.11.3

其中config.yaml是配置文件,4873端口是默认端口


### 配置
修改配置文件，增加监听的端口 ,不配置这个,只能本机能访问

    vim /home/zhang/.config/verdaccio/config.yaml

    # 监听的端口 ,重点, 不配置这个,只能本机能访问
    listen: 0.0.0.0:4873

### 使用
当前npm 服务指向私库

    npm set registry http://192.168.1.101:4873

注册用户 

    npm adduser –registry http://192.168.1.101:4873

发布包

    npm publish