# 百度云文字识别接口

:::tip
文档内容可能会过时，请以百度云官网说明为准。

相关链接：[百度云文字识别介绍](https://cloud.baidu.com/product/ocr_general) [百度云文字识别接口免费额度](https://cloud.baidu.com/doc/OCR/s/fk3h7xu7h)
:::

划词翻译的截图翻译功能可以改为使用百度云文字识别接口将截图转成文字进行翻译，这比划词翻译内置的 [Tesseract OCR](https://tesseract-ocr.github.io/) 要快很多。

## 价格 {#prices}

[百度云文字识别接口每天都有 50,500 次的免费使用额度](https://cloud.baidu.com/doc/OCR/s/fk3h7xu7h)，包含 50,000 次的标准版和 500 次的高精度版。划词翻译会优先使用高精度版，当天用完之后会自动切换为标准版。

## 申请步骤 {#steps}

### 第一步：进行个人认证 {#register}

1. 进入百度云控制台 [https://console.bce.baidu.com/](https://console.bce.baidu.com/)
2. 完成个人认证

如果你之前申请过[百度翻译接口](baidu-api.md)，那么你已经认证过了。

### 第二步：创建文字识别应用 {#create-app}

1. 进入[文字识别控制台](https://console.bce.baidu.com/ai/#/ai/ocr/overview/index)。如果链接有误，也可以从左侧菜单中搜索“文字识别”然后进入
2. 点击“创建应用”按钮，然后填写表单：
    - “应用名称”随意填写，例如“划词翻译”
    -  “接口选择”不用改动
    - “文字识别包名”选择“不需要”
    - “应用归属”选择“个人”
    - “应用描述”随意填写，例如“自用”
3. 填写完毕后，点击“立即创建”按钮

### 第三步：获取 API Key 和 Secret Key {#fill-in}

1. 应用创建成功后，进入[应用列表](https://console.bce.baidu.com/ai/#/ai/ocr/app/list)
2. 找到刚才创建的名为“划词翻译”的应用，会看到有两列“API Key”和“Secret Key”，将它们复制进划词翻译的【设置页】-【服务申请】-【百度云文字识别接口】中（v7.6.0 之前的用户填进“设置” - “截图翻译” - ”百度云文字识别接口“中）即可。注意，不要误将 “AppID” 复制进去了。