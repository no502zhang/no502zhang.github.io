## 修改 ubuntu 配置

    sudo vi /etc/fstab #注释掉swap一行

## 安装docker

    sudo apt update
    sudo apt install docker.io
    sudo systemctl start docker
    sudo systemctl enable docke

## 安装kubeadm、kubectl以及kubelet

    # 安装必要的系统软件
    sudo apt update 
    sudo apt install -y ca-certificates curl software-properties-common apt-transport-https curl

    # 安装GPG并写入源
    curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -

    sudo tee /etc/apt/sources.list.d/kubernetes.list <<EOF 
    deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
    EOF

    # 安装 kubelet kubeadm kubectl
    sudo apt update
    sudo apt install -y kubelet kubeadm kubectl

    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config


## 初始化集群

    sudo kubeadm init
    # 如果你的集群安装过程中遇到了其他问题，我们可以使用下面的命令来进行重置：
    kubeadm reset

