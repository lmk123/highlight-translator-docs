# 阿里翻译

:::tip
文档内容可能会过时，请以阿里云平台官网说明为准。

相关链接：[阿里云通用版翻译引擎介绍](https://www.aliyun.com/product/ai/base_alimt?source=5176.11533457&userCode=wsnup3vv) [阿里云机器翻译通用版定价文档](https://help.aliyun.com/document_detail/158294.html?source=5176.11533457&userCode=wsnup3vv)
:::

## 价格 {#prices}

阿里翻译**每月的前 100 万字符免费，超出的部分会按照 50 元 / 百万字符收取费用，费用由阿里翻译在它自己的[阿里云官方网站](https://www.aliyun.com/?source=5176.11533457&userCode=wsnup3vv)收取，与划词翻译无关。**

## 申请步骤 {#steps}

### 第一步：开通通用版翻译引擎 {#open}

打开[阿里云通用版翻译引擎首页](https://www.aliyun.com/product/ai/base_alimt?source=5176.11533457&userCode=wsnup3vv)，点击【立即开通】按钮，登录之后会进入[机器翻译管理控制台](https://mt.console.aliyun.com/basic)并看到如下界面，然后点击【通用版翻译引擎】下方的【立即开通】按钮。

![立即开通按钮](../../static/ali1.png)

点击之后会让你勾选一个【机器翻译服务协议】，勾选之后点【立即开通】就能开通成功了。

### 第二步：创建 AccessKey {#create-key}

开通之后，回到[阿里云机器翻译管理控制台](https://mt.console.aliyun.com/basic)，把鼠标移动到页面右上角的头像上悬停，然后点击【AccessKey 管理】，会跳转到 [AccessKey 管理页面](https://ram.console.aliyun.com/manage/ak)。

进入后会弹出一个安全提示：

![img_11.png](./img_11.png)

简而言之，在这里创建的 AccessKey 能调用你账号下的所有资源，权限范围太大了，一旦泄露的话影响面很大，所以阿里云建议你创建一个子用户，然后给这个子用户只分配机器翻译的权限，这样的话即使泄露了也只会影响到机器翻译。

但是，**阿里云的子用户还不支持分配机器翻译的访问权限，所以只能在这里创建 AccessKey**。见[支持 RAM 的云服务列表](https://help.aliyun.com/document_detail/28630.html?source=5176.11533457&userCode=wsnup3vv)。

#### 使用云账号 AccessKey（更便捷，但不保险） {#use-main}

如果要用云账号创建 AccessKey，那么选择【继续使用 AccessKey】即可。

![安全提示](../../static/ali2.png)

然后点击【创建 AccessKey】按钮：

![创建 AccessKey](../../static/ali3.png)

点击之后会让你输入手机短信验证码，输入之后会提示 AccessKey 创建成功，如下图：

![创建成功弹窗](../../static/ali4.png)

#### 使用子用户 AccessKey（更安全，但步骤繁琐） {#use-sub}

等阿里云支持使用子用户调用机器翻译时，我会更新这里的步骤。

### 第三步：在划词翻译中填写 AccessKey {#fill-in}

将上图中的【AccessKey ID】和【AccessKey Secret】填写进划词翻译的【设置页】-【服务申请】-【阿里翻译】中即可。