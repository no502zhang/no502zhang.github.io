最简化的部署方式就是在开发环境构建,并把其输出复制到 Web 服务器上.  
开发环境构建的命令是

    ng build

构建好后把输出目录（默认为 dist/）下的每个文件都复制到到服务器上即可.  
但我们通常会有多个应用,所以某一个应用打包后是放在服务器上的某个子路径下,此时构建时还要添加 --base-href（基地址）标识，并设置合适的 <base href>.

    ng build --base-href=/my/app/

部署生产还需要对代码进行混淆及做其他优化,此时构建命令要再加上 --prod

    ng build --base-href=/my/app/ --prod
	
带路由的应用必须以 index.html 作为后备页面

	try_files $uri $uri/ /index.html;
	
nginx中作为一个子应用发布时的配置

	location /orders {
        root /home/ubuntu/www/;
        try_files $uri $uri/ /orders/index.html;
    }