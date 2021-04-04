# 自定义翻译源

从 v7.5.11 开始，划词翻译支持配置自定义翻译源，你可以使用别人提供的翻译服务或者自己写一个翻译服务器配置在划词翻译当中，用来显示翻译结果，示例如下：

![示例](../.vuepress/public/custom-api.gif)

理论上来讲，任何翻译服务都可以通过这种方式接入到划词翻译当中。如果你想要使用的翻译源还没有被划词翻译集成进来，你可以自行实现一个翻译服务、或者向提供翻译服务的开发者建议，让他们实现一个翻译接口接入到划词翻译当中。

:::warning 使用第三方翻译服务器前请确认对方是否可信
划词翻译只会将你划选的文本、你选择的源语种和目标语种这三种数据发送给翻译服务器用于获取翻译结果，但是，你划选的文本偶尔可能很重要（例如一段密码），且第三方服务器可能会通过其它方式关联到你的身份（例如要求你在他们的网站上注册之后才提供给你一个翻译服务地址），所以在使用第三方翻译服务器前请自行判断对方是否可信。
:::

### 实现一个翻译服务器的示例代码

上面的示例使用的是下面的 Node.js 代码实现的翻译服务器：

```js
require('http')
  .createServer((req, res) => {
    // 划词翻译会使用 POST 方法请求你填写的接口地址
    if (req.method === 'POST') {
      let body = ''
      req.on('data', (data) => {
        body += data
      })
      req.on('end', () => {
        const post = JSON.parse(body)
        // 划词翻译会传过来一段 JSON 字符串，类型如下：
        // {
        //   name: string, // 用户在划词翻译中配置的翻译源的名称
        //   text: string // 需要翻译的文本
        //
        //   // 如果用户指定了源语种，那么会用 source 传过来，否则是 undefined 或空字符串 ''
        //   source?: string
        //
        //   // 用户想要翻译的目标语种。注意，这是一个数组，例如 `['中文(简体)', '英语']`。
        //   // 你需要优先将文本翻译为第一个语种，如果第一个语种与源文本语种一样，再翻译为第二个语种
        //   destination: string[]
        // }

        // 接口应该返回这样一个数据结构
        // {
        //   text: string // 翻译的文本
        //   from: string, // 翻译文本的源语种，这个语种会显示在翻译名称右侧并且可以切换
        //   ttsURI?: string // 翻译文本的语音地址，源语种名称右侧的播放按钮会用它播放语音
        //   to: string // 翻译结果的语种
        //   link?: string // 此翻译接口的在线查询地址，点击翻译名称最右侧的图标会跳转到这个链接
        //   phonetic?: { // 查询文本的音标（英文音标或汉语拼音），可以有多个
        //     name?: string // 语种的中文名称，如“美”、“英”
        //     ttsURI?: string // 此音标对应的语音地址
        //     value?: string // 此语种对应的音标值
        //   }[]
        //
        //   // 如果有词典数据则用 dict 表示，可以有多条。
        //   // 注意，如果有 dict，划词翻译会只显示 dict 而隐藏 result 的翻译结果
        //   dict?: {
        //     pos?: string // 词性，显示在每一行词典释义的开头，例如 “n.”、“v.”
        //     terms: string[] // 多个释义，例如 test 的释义是 ['考试', '测试', '考验']
        //   }[]
        //   result?: string[] // 翻译结果，可以有多条，一个段落对应一个翻译结果
        // }
        const responseData = {
          text: post.text,
          from: '中文(简体)',
          ttsURI: 'http://....',
          to: '英语',
          phonetic: [{ name: '美', ttsURI: 'http://...', value: '音标' }],
          result: [
            '划词翻译传过来的翻译文本是 ' + post.text,
            '使用的自定义翻译源名称是 ' + post.name,
            '划词翻译传过来的目标语种是 ' + post.destination.join(),
            '划词翻译传过来的源语种是 ' + post.source,
          ],
        }

        res
          .writeHead(200, {
            'Content-Type': 'application/json',
          })
          .end(JSON.stringify(responseData))
      })
      return
    }
    res.end('')
  })
  .listen(8080)
```

运行上面的代码之后，你可以在划词翻译中将接口地址设置为 `http://localhost:8080`，然后添加一个名为“我的自定义翻译源”的翻译源名称，那么就可以在划词翻译中显示翻译结果了。
