# 申请有道翻译官方接口的步骤

获取有道翻译官方接口的过程大约需要 5 分钟。有道翻译官方接口会**提供 100 元免费体验金（注册送 50，添加客服微信再送 50），用完之后就要收费了，费用由有道翻译在它自己的[有道智云 AI 开放平台](http://ai.youdao.com)收取，与划词翻译无关**。有道翻译官方接口的收费价格为 48 元 / 百万字符。详情见[有道翻译官方接口定价文档](http://ai.youdao.com/DOCSIRMA/html/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%BF%BB%E8%AF%91/%E4%BA%A7%E5%93%81%E5%AE%9A%E4%BB%B7/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1-%E4%BA%A7%E5%93%81%E5%AE%9A%E4%BB%B7.html)。

## 第一步：登录有道智云 AI 开放平台

打开有道智云 AI 开放平台 [http://ai.youdao.com](https://ai.youdao.com) 并点击右上角的「登录/注册」。

第一次注册时，开发者名称填写「划词翻译」，渠道填写「翻译插件」即可。

## 第二步：生成 API ID

首先打开「文本翻译服务」页面 [https://ai.youdao.com/console/#/service-singleton/text-translation](https://ai.youdao.com/console/#/service-singleton/text-translation)，点击「创建应用」按钮，会需要填写应用信息：

- 应用名称填写"划词翻译"
- 应用类别选择"实用工具"
- 选择服务选择"文本翻译"
- 接入方式选择"API"

点击「确定」完成应用创建，然后再点击「确定」按钮。

## 第三步：在划词翻译中填写有道翻译的应用 ID 和应用密钥

打开「应用总览」页面 [https://ai.youdao.com/console/#/app-overview](https://ai.youdao.com/console/#/app-overview)，在应用列表中找到刚才创建的「应用名称」为「划词翻译」的应用，然后就会看到「应用 ID」和「密钥/包名/Bundle ID」，将它们填进划词翻译的「设置页」-「翻译源」-「有道翻译」中。
