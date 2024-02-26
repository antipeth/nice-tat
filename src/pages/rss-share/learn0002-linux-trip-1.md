---
title: 探索Linux之旅 第一回，弃window渐入轻盈境，装Arch走入坑深底
description: 个人在笔记本上简单安装一个Arch Linux发行版EndeavourOS。
pubDate: 2023-9-15T18:17:28+08:00
---

# 第一回，弃window渐入轻盈境，装Arch走入坑深底

# 1.为什么放弃window

其一，不太喜欢电脑上的window11，更喜欢window7.

其二，QQ删不净，春风吹又生。

其三，笔记本电脑上的window11不太行。

其四，朋友力推linux,没接触过linux，想试试。

# 2.环境介绍

## 硬件环境与注意事项。

本人使用天选4笔记本，预装`window11`，`intel`的`cpu`。

`window11`有`bitlocker`，需要先解密`bitlocker`再安装，不然硬盘会炸。

intel采用了一种叫`intel VMD`技术的东西，需要在bios设置里关掉，不然会把分区表搞炸导致进不去系统。

在bios关掉`intel VMD`后，原有的`window11`系统会进不去，需要特别注意先备份重要文件。

# 3.选择linux

经朋友推荐，使用`Arch Linux`。为了安装方便，选用`EndeavourOS`这个`Arch Linux`的发行版。

# 4.制作镜像启动盘

采用`ventoy`制作启动盘。

先访问`ventoy`官网的下载页，[点击跳转](https://www.ventoy.net/cn/download.html)。

![](https://img.0pt.icu/learn/linux-trip/1/1.png)

根据自己所在的系统选择版本，我还是`window`所以下载window版本的。

这里下载连接会转跳到github，如果下载不了请用下面那些链接。

下载完成后解压出来。

![](https://img.0pt.icu/learn/linux-trip/1/2.png)

点击进入程序。

![](https://img.0pt.icu/learn/linux-trip/1/3.png)

可以先更改一下语言为中文。

![](https://img.0pt.icu/learn/linux-trip/1/4.png)

接下来更改分区类型为GPT。

![](https://img.0pt.icu/learn/linux-trip/1/5.png)

进入分区设置，把文件系统改为`NTFS`。

![](https://img.0pt.icu/learn/linux-trip/1/6.png)

![](https://img.0pt.icu/learn/linux-trip/1/7.png)

然后插上`u盘`，打开`ventoy`，点击安装。

![](https://img.0pt.icu/learn/linux-trip/1/9.png)

等待进度条跑完。

![](https://img.0pt.icu/learn/linux-trip/1/10.png)

![](https://img.0pt.icu/learn/linux-trip/1/11.png)

在我们电脑上可以看到我们的u盘名字已经变成`ventoy`。

![](https://img.0pt.icu/learn/linux-trip/1/12.png)

![](https://img.0pt.icu/learn/linux-trip/1/13.png)

`ventoy`启动盘制作完成。

# 5.下载镜像

进入`EndeavourOS`官网，[点击转跳](https://endeavouros.com/#Download)。

往下滑就可以看到镜像下载链接，可以选择中国地区的。

![](https://img.0pt.icu/learn/linux-trip/1/14.png)

下载完成后把镜像复制到`ventoy启动盘`里。

![](https://img.0pt.icu/learn/linux-trip/1/15.png)

我们后面可以从`ventoy启动盘`里启动`EndeavourOS安装镜像`。

# 6.启动安装镜像

电脑关机后，插上刚才制作的`ventoy启动盘`，开机，进BIOS。华硕主板是按`F2`。

进来后点击启动菜单。

![](https://img.0pt.icu/learn/linux-trip/1/16.jpg)

会出现选择设备启动。这里演示的时候我的设备上有多个系统，所以选项比较多，选择`ventoy启动盘`即可。

![](https://img.0pt.icu/learn/linux-trip/1/17.jpg)

进入`ventoy启动盘`后，我们可以看到刚才拷进来的`EndeavourOS镜像`，直接回车。

*ventoy的强大之处在于，你可以拷进来多个镜像，都可以启动，如果安装其他系统，使用ventoy来启动镜像也是不错的。*

![](https://img.0pt.icu/learn/linux-trip/1/18.jpg)

一般来说直接第一个`normal mode`即可。

![](https://img.0pt.icu/learn/linux-trip/1/19.jpg)

之后就进入到`EndeavourOS`的安装镜像里了。

![](https://img.0pt.icu/learn/linux-trip/1/20.jpg)如果是Nvidia用户可以按方向键，选择第二个，它会在安装系统的时候一起把Nvidia显卡驱动(闭源)，一起装了。选好后回车进入。

![](https://img.0pt.icu/learn/linux-trip/1/21.jpg)

进来后，先点`Wi-Fi`连网。因为在线安装可以预装`KDE桌面环境`。我选择用`KDE`。

![](https://img.0pt.icu/learn/linux-trip/1/22.jpg)

完成后，跟着箭头点。

![](https://img.0pt.icu/learn/linux-trip/1/23.jpg)

![](https://img.0pt.icu/learn/linux-trip/1/24.png)

![](https://img.0pt.icu/learn/linux-trip/1/25.png)https://img.0pt.icu/learn/linux-trip/1/

这里选择在线安装。

![](https://img.0pt.icu/learn/linux-trip/1/26.png)

选择简体中文。

![](https://img.0pt.icu/learn/linux-trip/1/27.png)

![](https://img.0pt.icu/learn/linux-trip/1/28.png)

注意键盘选英语。

![](https://img.0pt.icu/learn/linux-trip/1/29.png)

选KDE。

![](https://img.0pt.icu/learn/linux-trip/1/30.png)

根据情况勾选，不知道直接默认就行。

![](https://img.0pt.icu/learn/linux-trip/1/31.png)

电脑上是多系统的话选Grub，直接选Grub也行。

![](https://img.0pt.icu/learn/linux-trip/1/32.png)

这里我在笔记本上加装了一个固态硬盘专门给Linux。需要提前给固态分区，格式化固态。选择这个固态，并抹除磁盘，注意文件系统选`btrfs`。

有需求加密系统可以加密一下。

![](https://img.0pt.icu/learn/linux-trip/1/33.png)

自己设置。

![](https://img.0pt.icu/learn/linux-trip/1/34.png)

![](https://img.0pt.icu/learn/linux-trip/1/35.png)

之后就是等待安装了。安装完成后关机。

拔掉ventoy启动盘，开机，按上面的方法进入bios找启动菜单，启动EndeavourOS。

现在一个带有KDE桌面环境的Arch Linux就安装完成。

KDE是十分好用的桌面环境，从window装换到linux不会特别不适应。可以自定义很多功能，使其更加强大。
