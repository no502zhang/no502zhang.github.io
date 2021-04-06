## 使用Nexus Maven搭建maven私库
安装Nexus Maven之前，确认已经安装了jdk和maven

### 下载
Nexus Repository Manager 仓库管理有2个版本，专业版和oss版，oss版是免费的，专业版是收费的，我们使用oss版。[下载地址](https://www.sonatype.com/download-nexus-repo-oss)

    #使用官网获取的地址
    wget https://sonatype-download.global.ssl.fastly.net/repository/downloads-prod-group/3/nexus-3.30.0-01-unix.tar.gz

### 解压

    tar -zxvf nexus-3.16.1-02-unix.tar.gz

### 运行

    #bin目录
    ./nexus start

### 解决Nexus 3.XX Jdk版本问题
下载jdk1.8并解压缩放在本地，不需要给它配置环境变量，将Nexus的启动Jdk改成本地的jdk1.8所在的位置。  
修改nexus启动文件,再启动nexus

    vi nexus

    # 配置 INSTALL4J_JAVA_HOME_OVERRIDE 的值为jdk1.8所在的位置
    INSTALL4J_JAVA_HOME_OVERRIDE=

### 使用
访问http://192.168.1.101:8081/ ，8081是默认端口
