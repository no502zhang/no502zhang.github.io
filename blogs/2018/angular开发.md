国内npm很慢, 可以使用淘宝镜像

	npm install -g cnpm --registry=https://registry.npm.taobao.org
	
angular cli 也提供了ng set 命令用于设置参数.

修改为淘宝镜像需要设置packageManager配置

	ng set --global packageManager=cnpm
	
npm使用代理

	npm config set https-proxy http://192.168.91.10:10001

首先使用下列命令来生成一个新项目以及默认的应用代码

	ng new admin

再增加一个模块,我们先增加一个应用级共享模块

	ng generate module shared

往共享模块中添加必要组件, 如forms, router, http. 由于是共享模块, 所以再将这些引入的模块导出.

	import { ReactiveFormsModule, FormsModule } from '@angular/forms';
	import { RouterModule } from '@angular/router';
	import { HttpClientModule } from '@angular/common/http';
	
继续增加其他模块, 如 layout,dashboard,orders,projects,users

	ng generate module layout
	ng generate module dashboard
	ng generate module orders
	ng generate module projects
	ng generate module users
	
在新创建的模块中引入共享模块

	import { SharedModule } from '../shared/shared.module';

在新创建的users模块中创建模块级共享模块 // 是否需要?

	ng generate module users/shared

使用命名在模块级共享模块中创建数据接口, 再将文件改名为user.model.ts, 使得可以通过后缀区别类型

	ng generate interface users/shared/user model

在模块级共享模块中创建服务

	ng generate service users/shared/user

在新创建的users模块中创建组件

	ng generate component users/user-list
	ng generate component users/user-detail
	
创建管道

	ng g pipe orders/shared/getOrderStatusName

	
增加模块级路由

	ng generate module users/users-routing --flat --module=users
	
配置模块路由, 其中RouterModule注册为child

	const userRoutes: Routes = [
	  { path: 'user-list', component: UserListComponent },
	  { path: 'user-detail/:id', component: UserDetailComponent },
	];
	
	imports: [
	  RouterModule.forChild(userRoutes)
	],
	
增加应用级路由

	ng generate module app-routing --flat --module=app
	
路由模块中须引入angular路由

	import { RouterModule, Routes } from '@angular/router';
	
开发过程中为了方便调用后端接口,在根目录增加代理配置文件 proxy.config.json
	
	{
		"/system": {
			"target": "http://127.0.0.1:8700"
		}
	}

启动时使用命令 ng serve --proxy-config proxy.config.json 表示使用代理启动