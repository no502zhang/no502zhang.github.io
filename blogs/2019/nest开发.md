1. 安装nest-cli

	npm i -g @nestjs/cli
	
2. 创建项目

	nest new project-name
	
3. NEST Cli

    // 生成模块
    nest g module 模块名称

    // 生成服务
    nest g service 服务名称

    // 生成控制器
    nest g controller 控制器名称
	
	// 生成model
	nest g class 类名
	
4. 结构

CoreModule 核心模块（注册中间件，过滤器，管道，守卫，拦截器，装饰器等）
SharedModule 共享模块（注册服务，mongodb，redis等）
ConfigModule 配置模块（系统配置）
FeatureModule 特性模块（业务模块，如用户模块，产品模块等）