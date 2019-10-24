可以通过对象解构赋值实现update时字段控制

```typescript

    update(id: string, updateField: {name: string, age: number}){
        // updateField传入的值可能会有其它字段, 比如mobile等,这些字段是我们不愿意让update进行修改的
        // 通过以下两步可以过滤掉我们不希望更新的字段, 防止注入
        let {name, age} = updateField;
        let canUpdateField = {name, age};
        // 使用canUpdateField 进行更新
        /*
        ......
        */
    }
```

