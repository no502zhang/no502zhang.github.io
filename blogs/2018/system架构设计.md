在保留DDD的大部分特性的情况下简化结构, 便于理解
修改三层架构为4层架构
## controller层
包括dto(request和response) 主要对外以各种协议(http,websoket等)提供服务, 对应六边形架构中的接口层,对应DDD经典分层中的User Interface层.
controller的职责有：接受请求, 请求格式校验及转换, 权限校验, 路由请求, 回复响应(将异常转为用户可读信息)
service层:组合domain层的领域对象和基础设施层的公共组件，根据业务需要包装出各种服务, 比如同样是用户, 个人用户和企业用户属于不同的业务, 需要不同的服务, 对应DDD经典分层中的application层
domain层:高度抽象的模型层,我们使用RESTful风格设计模型,所以该层只有entity和vo,其它的都不用了.该层会调用repository层
repository层:对应DDD经典分层中的infrastructure层, 对应六边形架构中的接口层. 但和经典分层不一样的是,该层会包含一定业务逻辑, 使用jpa实现, sql语句中会包含一定的业务逻辑

区别于传统三层架构,业务逻辑全都写在service中,map层也有业务却得不到重视.这种结构可以理解为把service层分类, 将业务功能拆分.