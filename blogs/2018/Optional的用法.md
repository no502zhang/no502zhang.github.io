当我们从一个层层嵌套的对象中取值时,必须不停的判断是否为空, 否则就会抛出NullPointerException

	System.out.println(a1.getB().getC().getD().getStr());
	
为解决空指针异常, 我们必须层层进行null判断  
Java8后增加了Optional, 可以想下面这样处理

	System.out.println(Optional.ofNullable(a1).map(a->a.getB()).map(b->b.getC()).map(c->c.getD()).map(d->d.getStr()).orElse(null));