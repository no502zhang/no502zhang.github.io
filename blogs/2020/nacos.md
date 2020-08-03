## nacos集群
1. 配置数据库，使用数据库保存配置在多个节点间同步配置。

	# 启用mysql
	spring.datasource.platform=mysql  
	# 启用
	db.num=1
	# 启用
	db.url.0=jdbc:mysql://192.168.1.103:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC
	db.user=root
	db.password=123456


2. 3个或3个以上Nacos节点才能构成集群。  
3. 配置cluster.conf。复制一份cluster.conf.example命名为cluster.conf，并修改其中的ip,每行配置成ip:port，使用ip， 不要用127.0.0.1/localhost这种  
4. 启动， 如果右配置数据库， 会自动识别并使用， 想要集群启动， 需要增加参数  

	# 单机启动
	startup.cmd
	# 集群方式启动
	startup.cmd -m cluster
