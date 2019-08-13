领域驱动设计：是一种以领域为核心的设计方法与理念。建立正确的领域模型是领域驱动设计的核心。



核心子域:

限界上下文

用户界面/展示层：1）请求应用层获取用户所需的展示数据；2）发送命令给应用层执行用户的命令

应用层：薄薄的一层，定义软件要完成的任务。对外为展示层提供各种应用功能，对内调用领域层（领域对象或领域服务）完成各种业务逻辑。应用层不包含业务逻辑

领域层：表达业务概念、业务状态信息及业务规则，是业务软件的核心

基础设施层：为其他层提供通用的技术能力，提供了层间通信；为领域层提供持久化机制。

领域模型

领域对象：
包括聚合根，实体，值对象
领域对象通常是有状态的
领域对象不应该与其他的模型有交互,如何持久化不应该是领域对象关心的

领域服务:

一个Bounded Context（界定的上下文）可能包含多个聚合，每个聚合都有一个根实体，叫做聚合根；

聚合根
聚合
实体
领域服务
值对象
仓储
工厂

