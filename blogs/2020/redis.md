# Redis的5种数据格式
1. String  
一个key对应一个value  
命令: get 、 set 、 del 、 incr、 decr 等  

2. Hash  
一个key对应一个value, value本身又是一种键值对结构

3. List  
一个key对应一组数据, value是有序的，值可以重复, 可以通过下标取出对应的value值，左右两边都能进行插入和删除数据。

使用列表的技巧

+ lpush+lpop=Stack(栈)
+ lpush+rpop=Queue（队列）
+ lpush+ltrim=Capped Collection（有限集合）
+ lpush+brpop=Message Queue（消息队列）

4. Set  
同List, 一个key对应一组数据, 但value无序, 不允许有重复的元素, 支持集合间的操作，可以取多个集合取交集、并集、差集。

5. zset  
有序集合, 有序集合和集合相似，保留了集合不能有重复成员的特性，区别是，有序集合中的元素是可以排序的，它给每个元素设置一个分数，作为排序的依据。



Redis在早期版本中使用冒号作为key, 当做数据存储命名空间的概念, 现在已经被hash取代, 不需要了