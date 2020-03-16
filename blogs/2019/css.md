1. 命名规范

+ 所有的命名最好都小写
+ 命名单词间使用"-"连接



1. 水平居中

需要的主要css代码有两个，一个为[text-align](http://www.divcss5.com/rumen/r350.shtml):center（[内容居中](http://www.divcss5.com/rumen/r350.shtml)），另外一个为[margin](http://www.divcss5.com/rumen/r128.shtml):0 auto；其两个样式需要配合使用才能实现[div盒子](http://www.divcss5.com/rumen/r319.shtml)的居中显示排版。

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>div居中</title>
    <style>
        body {
            text-align: center
        }

        .div {
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <div class="div">
        居中
    </div>
</body>

</html>
```

