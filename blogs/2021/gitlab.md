## 安装
下载并安装源

    curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash

用官方源安装速度很慢，可以改为国内镜像

    sudo vim /etc/apt/sources.list.d/gitlab_gitlab-ce.list
    # old
    deb https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu/ bionic main
    deb-src https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu/ bionic main
    # new 
    deb https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/ubuntu/ bionic main
    deb-src https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/ubuntu/ bionic main


安装

    sudo apt install gitlab-ce


配置

    vim /etc/gitlab/gitlab.rb
    #　将external_url = 'http://git.example.com'修改成自己的 IP 或者 HostName
    external_url = 'http://192.168.1.101:9090'

常用命令

    #　重新加载配置，每次修改/etc/gitlab/gitlab.rb文件之后执行
    sudo gitlab-ctl reconfigure
    #　查看 GitLab 状态
    sudo gitlab-ctl status
    #　启动 GitLab
    sudo gitlab-ctl start
    #　停止 GitLab
    sudo gitlab-ctl stop
    #　重启 GitLab
    sudo gitlab-ctl restart
    #　查看所有日志
    sudo gitlab-ctl tail
    #　查看 nginx 访问日志
    sudo gitlab-ctl tail nginx/gitlab_acces.log
    #　查看 postgresql 日志
    sudo gitlab-ctl tail postgresql

