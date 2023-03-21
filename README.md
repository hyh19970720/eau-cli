# @coderhyh/eau-cli v0.1.0

目前仍然是一个测试包，但如果你感兴趣，可以尝试一下。

It's still a test pack for now, but if you're interested, give it a try.

## 安装 Installation

使用 npm：

Using npm:

```powershell
$ npm i -g @coderhyh/eau-cli
```

## 使用说明 Usage

你可以使用 `-h` 来获得基本的使用说明：

You can use `-h` to get help:

```powershell
$ eau -h
$ eau init -h
$ eau set -h
$ eau get -h
```

你可以使用 `init [projcet_name]` 来创建模板：

You can use `init [projcet_name]` to create the template:

```powershell
$ eau init
$ eau init my-project
```

但是初次使用可能没有配置项目模板，所以需要手动编写文件进行配置：

However, the project template may not be configured for the first time, so you need to manually write a file for configuration：

```
// my-template
[
    {
        "name": "xxx1",
        "ssh": "git@xxxxx/xxxx.git",
        "https": "https://xxxxx/xxxx.git"
    },
    {
        "name": "xxx2",
        "ssh": "git@xxxxx/xxxx.git",
        "https": "https://xxxxx/xxxx.git"
    },
    ...more
]
```

```powershell
$ eau set templates my-template
```

如果你想要查看当前配置项的值，你可以使用 `get <config-name>` 来查询:

If you want to see the value of the current configuration item, you can use `get <config-name>` :

```powershell
$ eau get language
```

当然你也可以通过输入多个参数来批量查询:

Of course, you can also enter multiple parameters to batch query:

```powershell
$ eau get language templates ...
```

如果你无法忍受中文或者英文，你可以切换语言：

If you can't stand Chinese or English, you can switch languages:

```powershell
$ eau set language zh
$ eau set language en
```

## 等待 Waiting

更多内容仍在开发和尝试中...

More is still being developed and tried...
