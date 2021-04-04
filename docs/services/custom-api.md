# 自定义翻译源

划词翻译支持配置自定义翻译源，你可以使用别人提供的翻译接口、或者如果你自己会编程的话，可以自己写一个翻译接口配置在划词翻译当中用来显示翻译结果。

## 使用别人提供的翻译接口

自定义翻译源功能目前推出没多久，暂时还没有开发者为划词翻译开发翻译接口，如果未来有可用的翻译接口，我会列在这里。你也可以向提供翻译服务的开发者建议，让他们实现一个翻译接口接入到划词翻译当中。

:::warning 使用第三方翻译接口前请确认对方是否可信
划词翻译只会将你划选的文本、你选择的源语种和目标语种这三种数据发送给翻译服务器用于获取翻译结果，但是，你划选的文本偶尔可能很重要（例如一段密码），且第三方服务器可能会通过其它方式关联到你的身份（例如要求你在他们的网站上注册之后才提供给你一个翻译服务地址），所以在使用第三方翻译服务器前请自行判断对方是否可信。
:::

## 自己开发一个翻译接口

如果你会编程的话，你可以实现一个 HTTP 接口填写进划词翻译当中。

举例来说，如果你的翻译接口地址为【http://localhost:8088】，支持【翻译一】和【翻译二】这两个翻译服务，那么你就可以做如下设置：

![img_3.png](./img_3.png)

设置好了之后，当你在网页中划选了中文文本“你好，划词翻译”之后，划词翻译会调用两次你的接口（因为你填写了两个翻译名称，每个翻译名称会调用一次接口）分别获取翻译结果。

划词翻译会使用 POST 方法调用你的接口，并传递一个 JSON 给你：

```js
{
  "name": "翻译一", // 翻译源名称
  "text": "你好，划词翻译", // 这是需要翻译的文本
  "destination": ["中文(简体)", "英语"], // 目标语种，这是一个数组，原因会在下面解释
  "source": "" // 源语种，可能是 undefined，此时就需要你的接口自动判断语种
}
```

- 划词翻译传递过来的语种名称就是语种的中文名称本身，也就是在划词翻译当中语种下拉框里选择的那些语种。
- `destination` 会是一个数组。以上面这个例子为例，“你好，划词翻译”本身就是中文，用户首要目标语种也是中文，由于源语种与首要目标语种相同，所以此时应该返回次要目标语种，也就是“英语”的翻译结果。

你的接口应该返回如下一个 JSON 给划词翻译：

```js
{
  "text": "你好，划词翻译", // 翻译的文本
  "from": "中文(简体)", // 翻译文本的源语种，这个语种会显示在翻译名称右侧并且可以切换
  "to": "英语", // 翻译结果的语种
  "ttsURI": "https://....", // 翻译文本的语音地址，源语种名称右侧的播放按钮会用它播放语音。可选。
  "link": "https://...", // 此翻译接口的在线查询地址，点击翻译名称最右侧的图标会跳转到这个链接。可选。
  "phonetic": [{ // 查询文本的音标（英文音标或汉语拼音），可以有多个。可选。
    "name": "中" // 语种的中文名称，如“美”、“英”。可选。
    "ttsURI": "https://...", // 此音标对应的语音地址。可选。
    "value": "ni hao, hua ci fan yi" // 此语种对应的音标值。可选。
  }],
  "dict": [{ // 如果有词典数据则用 dict 表示，可以有多条。可选。
    "pos": "n." // 词性，显示在每一行词典释义的开头，例如 “n.”、“v.”。可选。
    "terms": ["考试", "测试", "考验"] // 单词的多个释义，例如英文单词 test 的释义是 ["考试", "测试", "考验"]
  }],
  "result": ["Hello, word translation."] // 翻译结果，可以有多条，一个段落对应一个翻译结果。可选。
}
```

- 没有标注为“可选”的字段都是必须要返回的，不过大部分字段都是可选的。
- `dict` 和 `result` 必须至少提供一个。如果都有，划词翻译会只显示 `dict` 而隐藏 `result` 的翻译结果。
- `result` 一定要满足**一个段落对应一个翻译结果**的条件，否则你的接口在用于网页翻译时会出问题。比如如果翻译的文本是`"你好\n划词翻译"`（注意中间的 `\n`），那么 `result` 应该返回 `["Hello", "word translation"]`。

### 实现彩云小译的自定义翻译源接口

现在我们来实际开发一个使用彩云小译的翻译源接口。示例代码是用 Node.js 写的，你也可以使用别的语言开发。

::: details 为什么使用彩云小译作为示例？
- 彩云小译的接口调用很简单，无需实现复杂的签名算法
- 彩云小译提供用于测试的 Token
:::

```js
const http = require('http')

/**
 * 从彩云小译获取翻译结果的方法
 * @param params
 * @param params.text - 需要翻译的文本
 * @param params.destination - 目标语种
 * @param params.source - 源语种
 */
function getResultFromCY(params) {
  // 定义一个 map，用于将划词翻译的语种名称转为彩云小译的语种代码
  const languagesMap = {
    '中文(简体)': 'zh',
    英语: 'en',
    日语: 'ja',
  }

  // 先尝试翻译为首要目标语种
  const dest = params.destination[0]
  // 将划词翻译的语种名称转为彩云小译的语种代码
  const destCode = languagesMap[dest]
  const source = params.source ? languagesMap[params.source] : 'auto'

  if (!destCode || !source) {
    throw new TypeError(`彩云小译不支持${params.source}或者${dest}`)
  }

  return new Promise((resolve, reject) => {
    http
      .request(
        'http://api.interpreter.caiyunai.com/v1/translator',
        {
          method: 'POST',
          headers: {
            // `3975l6lr5pcbvidl6jl2` 是彩云小译提供的测试用 Token，
            // 如果调用失败，可以参考以下链接申请一个正式的 Token
            // https://hcfy.limingkai.cn/services/caiyun-api.html
            'X-Authorization': 'token 3975l6lr5pcbvidl6jl2',
          },
        },
        (res) => {
          let responseText = ''

          res.on('data', (chunk) => {
            responseText += chunk
          })

          res.on('end', () => {
            // 彩云小译返回的 JSON 格式如下：
            // {
            //   "target": ["段落一", "段落二"]
            // }
            const responseJSON = JSON.parse(responseText)

            // 如果源文本的语种跟首要目标语种一致，彩云小译会将源文本原样返回。此时就需要重新调用接口，将文本翻译为次要目标语种
            if (
              params.text === responseJSON.target.join('\n') &&
              params.destination.length > 1
            ) {
              resolve(
                getResultFromCY({
                  ...params,
                  destination: params.destination.slice(1),
                })
              )
              return
            }

            // 将彩云小译的翻译结果格式转为划词翻译需要的格式
            resolve({
              text: params.text,
              link: 'https://fanyi.caiyunapp.com/',
              from: '', // 彩云小译没有提供源语种，这里可以暂时返回空字符串。未来划词翻译会将 from 和 to 也变成可选的字段。
              to: dest,
              result: responseJSON.target,
            })
          })
        }
      )
      // 发送请求
      .end(
        JSON.stringify({
          source: params.text.split('\n'), // 彩云小译的多个段落需要传一个字符串数组
          trans_type: `${source}2${destCode}`,
          detect: true,
        })
      )
  })
}

// 创建一个 HTTP Server 用于处理客户端发送的请求
http
  .createServer((req, res) => {
    // 划词翻译会使用 POST 方法请求你填写的接口地址
    if (req.method === 'POST') {
      let body = ''
      req.on('data', (data) => {
        body += data
      })
      req.on('end', () => {
        const params = JSON.parse(body)
        // 我们的接口只支持彩云小译
        if (params.name === '彩云小译') {
          getResultFromCY(params).then((translateResult) => {
            res
              .writeHead(200, {
                'Content-Type': 'application/json',
              })
              .end(JSON.stringify(translateResult))
          })
          return
        }
        // 不支持的翻译源一律返回 404
        res.writeHead(404).end()
      })
      return
    }
    res.writeHead(404).end()
  })
  // 监听 8088 端口
  .listen(8088)
```

将上面的代码保存为 `index.js` 并在终端运行 `node index`，然后在划词翻译的自定义翻译源中做如下配置：

![img_7.png](./img_7.png)

最后，点击【测试】按钮，如果调用成功，会弹出下面的消息：

![img_6.png](./img_6.png)

实际使用效果如下：

![custom-api.gif](./custom-api.gif)