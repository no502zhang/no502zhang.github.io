1. 安装koa-generator

	npm install -g koa-generator


2. 使用koa-generator生成项目

	koa2  koa-demo

3. 添加typescript支持

	tsc --init
	
4. 修改tsconfig.json

	!. 把target改成ES2017,改完后这一行是这样的:"target": "ES2017", 这样我们就能使用node本身实现的一些新特性
	!. 设置输出文件夹:

		"outDir": "./bin",
		
5. 安装typescript

	npm install -g typescript