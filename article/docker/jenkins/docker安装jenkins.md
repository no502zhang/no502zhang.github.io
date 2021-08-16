密码可以看日志，也可以到下面文件去找
./jenkins_home/secrets/initialAdminPassword


jenkins使用时需要联网更新插件


迁移时拷贝 jenkins_home 文件夹中的 config.xml文件，jobs文件夹，users文件夹和plugins文件夹。  
注意权限，备份前需要先将文件夹own改为当前用户，否则会有文件无法下载

    # 先将文件夹own为zhang，再使用ftp从服务器上下载下来
    sudo chown -R zhang jenkins_home/
    # 修改文件夹group为zhang
    sudo chgrp -R zhang jenkins_home/

    # 迁移到新服务器后修改文件夹own为root
    sudo chown -R root jenkins_home/
    # 迁移到新服务器后修改文件夹group为root
    sudo chgrp -R root jenkins_home/
