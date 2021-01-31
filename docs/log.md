<global-header />

# 更新日志

## v7.4.5（未发布）

#### bug 修复

- 修复 Chrome 88 无法使用 DeepL 翻译源的问题。

## v7.4.4

#### bug 修复

- [#885](https://github.com/lmk123/crx-selection-translate/issues/885) 修复 v7.4.2 引入的一个 bug：在文本框中用 Ctrl + A 全选文本后，按下辅助键没有弹出翻译结果的问题
- [#886](https://github.com/lmk123/crx-selection-translate/issues/886) 修复在特定页面中会让页面出现双滚动条的问题
- 对代码进行改进，可能会解决偶尔不能正常划词翻译的问题。

## v7.4.3

#### 新功能

- [#884](https://github.com/lmk123/crx-selection-translate/issues/884) **添加 DeepL 翻译源。**
- [#879](https://github.com/lmk123/crx-selection-translate/issues/879) 添加这些翻译源的外部跳转链接：阿里翻译、腾讯翻译君、搜狗翻译、金山词霸、有道词典。

## v7.4.2

#### 功能改进

- [#773](https://github.com/lmk123/crx-selection-translate/issues/773) 源语种现在可以临时切换了，这样当自动检测语种不准确的时候可以临时切换源语种重新查询了。

#### bug 修复

- [#878](https://github.com/lmk123/crx-selection-translate/issues/878) 修复内置 PDF 阅读器没有正确跳转到指定页面的问题。
- [#882](https://github.com/lmk123/crx-selection-translate/issues/882) 修复带有`'`和`-`的英文短语没有正确解析成链接的情况。
- **集中解决了子页面（iframe）相关的问题：**
  - [#834](https://github.com/lmk123/crx-selection-translate/issues/834) 在 iframe 内划词后弹窗的显示范围会被限制在 iframe 内，导致可视区域很小，显示不全
  - [#840](https://github.com/lmk123/crx-selection-translate/issues/840) 在 iframe 内划词后，弹窗会被遮挡
  - [#241](https://github.com/lmk123/crx-selection-translate/issues/241) 页面上动态新增的 iframe 无法划词，e.g. 开启了 “Just Read” 扩展之后的页面不能划词
  - [#873](https://github.com/lmk123/crx-selection-translate/issues/873) 有的 iframe 宽度很小，导致被划词翻译的弹窗撑开了宽度，e.g. B 站的消息菜单被撑开出现了横向滚动条

## v7.4.1

#### bug 修复

- **修复了谷歌翻译间歇性无法使用的问题。**
- [#871](https://github.com/lmk123/crx-selection-translate/issues/871) 修复了百度翻译在特定情况下会一直处于加载状态、不显示结果的问题。
- [#872](https://github.com/lmk123/crx-selection-translate/issues/872) 修复了翻译按钮在部分网站显示错位的问题。
- [#551](https://github.com/lmk123/crx-selection-translate/issues/551) 修复了在部分网站的编辑页面（例如有道云笔记）会错误的显示翻译按钮的问题。

## v7.4.0

#### 新功能

- 添加了设置语音朗读 [#851 音量](https://github.com/lmk123/crx-selection-translate/issues/851)和 [#459 语速](https://github.com/lmk123/crx-selection-translate/issues/459)的选项。
- 添加了自动隐藏翻译按钮的设置项。
- [#835](https://github.com/lmk123/crx-selection-translate/issues/835) 添加了一个快捷键“使用独立窗口翻译选中的文本”，默认为 Alt + S。
- 从 v7.4.0 起，划词翻译推出了会员功能，目前提供 [#47 数据同步](https://github.com/lmk123/crx-selection-translate/issues/47)（同步设置、收藏夹与历史记录）、源文本处理（[#560 去掉换行符](https://github.com/lmk123/crx-selection-translate/issues/560)、[#395 转换驼峰式与下划线式词组](https://github.com/lmk123/crx-selection-translate/issues/395)）和自动复制功能，[查看会员功能介绍](/vip.html)。

#### 功能改进

- [#855](https://github.com/lmk123/crx-selection-translate/issues/855) 对辅助键进行了改进，除了 Ctrl / ⌘，现在可以额外使用 Alt / ⌥ 和 Shift 键作为辅助键，并且可以组合使用。另外，现在还可以选择在按下辅助键后开启鼠标悬浮取词或是让网页里的链接可以被划选。
- [#278](https://github.com/lmk123/crx-selection-translate/issues/278) 将划词翻译图标上的 “off” 字样改为让图标变灰。

#### bug 修复

- [#852](https://github.com/lmk123/crx-selection-translate/issues/852) 修复百度翻译在指定目标语种为英语时，翻译中文后翻译结果会出现乱码的问题，顺便让百度翻译中文词组时提供的结果更加详细了。
- [#824](https://github.com/lmk123/crx-selection-translate/issues/824) 修复在调整页面缩放或大小之后，固定状态下的翻译弹窗没有显示在浏览器可视范围内的问题。
- [#856](https://github.com/lmk123/crx-selection-translate/issues/856) 修复在文本框内输入文字时会触发网页或浏览器的快捷键的问题。

## v7.3.3

#### 功能改进

- [#839](https://github.com/lmk123/crx-selection-translate/issues/839) 给历史记录中的网页标题添加最大宽度，避免网页标题过长导致翻译内容被挤压的问题。

#### bug 修复

- [#848](https://github.com/lmk123/crx-selection-translate/issues/848) 修复启用历史记录时，最近的一次翻译会被自动添加进历史记录的问题
- [#845](https://github.com/lmk123/crx-selection-translate/issues/845) 修复网页翻译弹窗不可见时，全选（Ctrl + A）整个网页后再复制（Ctrl + C）出来的文本中包含网页翻译弹窗的内容的问题。

## v7.3.2

#### 新功能

- [#791](https://github.com/lmk123/crx-selection-translate/issues/791) 现在可以调整翻译面板的字体和按钮的大小了，在【设置页】->【翻译面板】->【通用设置】当中。

#### bug 修复

- [#841](https://github.com/lmk123/crx-selection-translate/issues/841) 修复 v7.3.1 导致的在少部分网站中登录请求会失败的问题。
- [#842](https://github.com/lmk123/crx-selection-translate/issues/842) 修复 v7.3.1 发布后在 Chrome 72 / Edge 78 及以下版本中划词翻译无法使用的问题。

## v7.3.1

#### 新功能

- [#833](https://github.com/lmk123/crx-selection-translate/issues/833) 翻译结果中的英文单词现在可以直接点击翻译了。

#### 功能改进

- [#836](https://github.com/lmk123/crx-selection-translate/issues/836) 优化网页划词面板的定位方式：优先保证面板在可视范围内，即使可能会遮挡住选块；另外在之前版本中的，在文本框内选中文本翻译后会以文本框而不是选块进行定位，现在已经可以以选块进行精准定位了。
- [#820](https://github.com/lmk123/crx-selection-translate/issues/820) 将深色模式下的翻译按钮图标底色改为白色。
- 删除了内置 PDF 阅读器除了英语和中文以外的界面语言，从而减少了约 0.4MB 安装包大小。
- 将内置 PDF 阅读器的版本从 2.4.456 升级到 2.5.207，[查看变更](https://github.com/mozilla/pdf.js/releases/tag/v2.5.207)
- [#827](https://github.com/lmk123/crx-selection-translate/issues/827) 在浏览器自带的 PDF 阅读器里用右键菜单打开电脑里的 PDF 文件时，划词翻译内置 PDF 阅读器是空的，这是因为扩展程序无权限通过右键菜单读取本地文件，为此新增了一个提示告之用户。
- 在选块滚动出浏览器可视范围的同时自动隐藏网页划词窗口。
- 对复制结果的功能进行了优化：Whatsapp 网页版会保持聊天文本框始终处于聚焦状态，但点击了划词翻译的复制按钮会让它失去焦点，以至于用户需要重新点击文本框聚焦；现在对这一情况进行了优化，点击复制按钮不会让 Whatsapp 的聊天输入框失去焦点。

#### bug 修复

- 通过一些优化稍微缓解了网页划词窗口显示时的“闪烁”问题，后续版本会进一步优化此情况。

## v7.3.0

#### 新功能

- [#464](https://github.com/lmk123/crx-selection-translate/issues/464) 添加收藏夹功能并默认开启。
- [#242](https://github.com/lmk123/crx-selection-translate/issues/242) 添加历史记录功能并默认关闭。

收藏夹和历史记录功能目前还比较“简陋”，未来会逐步完善，也欢迎大家向我提建议。

#### 功能改进

- 将翻译面板的设置图标和关闭图标对齐。

#### bug 修复

- [#823](https://github.com/lmk123/crx-selection-translate/issues/823) [#829](https://github.com/lmk123/crx-selection-translate/issues/829) [#830](https://github.com/lmk123/crx-selection-translate/issues/830) 修复一系列在部分内容较长的页面中划词翻译窗口有明显卡顿的问题。
- 将谷歌翻译的错误提示时显示的测试链接改为正确的链接。

## v7.2.4

#### 功能改进

- 将“自动检测”和“中文(简体)”默认放入了最近使用的列表当中。这个改动仅对新安装的用户有影响，对已经安装的用户无影响。

#### bug 修复

- [#821](https://github.com/lmk123/crx-selection-translate/issues/821) 修复打开语种列表时会将网页滚动到最上方的问题。
- [#785](https://github.com/lmk123/crx-selection-translate/issues/785) 修复在少数网页划词后不显示翻译按钮的问题。这顺便解决了在翻译弹窗内划词后，使用 Alt + A 快捷键没有触发翻译的问题。
- [#767](https://github.com/lmk123/crx-selection-translate/issues/767) 修复了在少数网页中，翻译弹窗会随着网页的滚动偏移位置的问题。

## v7.2.3

#### 功能改进

- [#811](https://github.com/lmk123/crx-selection-translate/issues/811) 由于 Firefox 不支持自动打开本地 PDF、不支持全局快捷键和不支持自动保存独立窗口的位置和大小，所以更新了设置中的相关文案告知用户。
- [#807](https://github.com/lmk123/crx-selection-translate/issues/807) 在勾选了”在所有网站中禁用网页划词“时，在浏览器内置页面中扩展图标弹窗的提示语之前是”已在所有网站中禁用网页划词“，但其实浏览器内置页面是无论如何都不能划词的，所以针对这种情况提示语改成了”此页面已禁用网页划词“。

#### bug 修复

- [#795](https://github.com/lmk123/crx-selection-translate/issues/795) **修复在 Gmail、百度网盘等网站中无法下载 PDF 附件的问题。**
- [#809](https://github.com/lmk123/crx-selection-translate/issues/809) 修复了打开语种选择下拉框时，界面上的复制、朗读等按钮会浮现在下拉框上面的问题。
- 修复了 Firefox 的一系列问题：
  - [#806](https://github.com/lmk123/crx-selection-translate/issues/806) 修复了在内置 PDF 页面没有强制启用网页划词的问题。
  - [#813](https://github.com/lmk123/crx-selection-translate/issues/813) 修复了保存过的独立窗口的位置没有生效的问题。
  - 修复了点击扩展图标弹窗中的”内置 PDF 阅读器“后打开的是一个错误页面的问题
  - 修复了在划词翻译的设置页，扩展图标弹窗显示”此页面已启用网页划词“的问题。在划词翻译的设置页应该显示为”此页面已禁用网页划词“。

## v7.2.2

#### 新功能

- [#789](https://github.com/lmk123/crx-selection-translate/issues/789) 将 v6 中的自动朗读功能重新添加回来了。
- [#782](https://github.com/lmk123/crx-selection-translate/issues/782) 语种选择器会将最近使用过的语言放在列表最顶部。
- [#787](https://github.com/lmk123/crx-selection-translate/issues/787) 独立翻译窗口的大小和位置会自动保存。如果你使用的是 Firefox 或者不是最新版本的 Chrome / Edge，那么需要在设置中手动保存。

#### 功能改进

- 当谷歌翻译报错时，显示[原因](/faq.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B0%B7%E6%AD%8C%E7%BF%BB%E8%AF%91%E7%BB%8F%E5%B8%B8%E6%8F%90%E7%A4%BA-%E8%B0%B7%E6%AD%8C%E7%BF%BB%E8%AF%91%E6%9A%82%E6%97%B6%E4%B8%8D%E5%8F%AF%E7%94%A8%EF%BC%8C%E8%AF%B7%E7%A8%8D%E5%90%8E%E5%86%8D%E8%AF%95%E3%80%82-%EF%BC%9F)。
- 更新了设置中关于使用方式的说明，着重介绍了要如何设置才可以仅在使用辅助键（Ctrl / Command）时才显示翻译结果。

#### bug 修复

- 修复了在 Firefox 浏览器中没有正确显示错误提示的问题。之前无论什么错误都会提示用户由于扩展更新了需要刷新网页，现在可以正确显示出网络错误、不支持的语种、服务器错误等提示。
- [#780](https://github.com/lmk123/crx-selection-translate/issues/780) 将独立窗口的默认宽度从 250px 调整为 270px，避免了在 Windows 系统打开时快捷设置项会换行的问题。

## v7.2.1

#### 功能改进

- 给谷歌翻译加回语音朗读功能。

## v7.2.0

#### bug 修复

- [#797](https://github.com/lmk123/crx-selection-translate/issues/797) **由于 [https://translate.google.cn](https://translate.google.cn) 站点改版，原有的基于这个站点的谷歌翻译接口不能用了，所以在 v7.2.0 版本中换用了另一种谷歌翻译的接口，暂时还未支持语音朗读，将在后续版本中加入。**

#### 新功能

- [#729](https://github.com/lmk123/crx-selection-translate/issues/729) 将网页划词中面板的固定状态和位置改为全局统一

#### 功能改进

- [#783](https://github.com/lmk123/crx-selection-translate/issues/783) 将右键菜单中 PDF 相关的菜单项的加速键改为 P
- [#792](https://github.com/lmk123/crx-selection-translate/issues/792) 在内置 PDF 阅读器页面现在会始终启用网页划词，即使你全局禁用了网页划词也会启用
- [#800](https://github.com/lmk123/crx-selection-translate/issues/800) 在内置 PDF 阅读器页面添加了可以拖放 PDF 文件进来的提示，并添加了复制 PDF 网址的按钮
- [#794](https://github.com/lmk123/crx-selection-translate/issues/794) 在 Chrome 中，如果你拖放进来电脑里的 PDF 文件，然后在右键菜单中选择“在划词翻译中打开”，由于 Chrome 不会提供电脑内文件的地址，所以在之前的划词翻译版本中，此时点了不会有任何反应，或者虽然打开了内置的 PDF 阅读器，但会提示错误；在 v7.2.0 版本中，会始终弹出一个空白的 PDF 阅读器，你可以自行将文件拖放进来
- 将全局禁用 / 启用网页划词的功能放在了扩展图标弹出页里
- 在扩展图标弹出页中添加了打开“内置 PDF 阅读器”和“独立翻译窗口”的按钮
- 减少了约 80KB 安装包大小

## v7.1.7

#### bug 修复

- [#709](https://github.com/lmk123/crx-selection-translate/issues/709) 修复了在 macOS 中网页划词窗口拖动后会固定在网页左上角无法拖动的问题

## v7.1.6

#### 功能改进

- [#385](https://github.com/lmk123/crx-selection-translate/issues/385) 给右键菜单选项添加了加速键，但仅对 Windows 系统有效

#### bug 修复

- [#742](https://github.com/lmk123/crx-selection-translate/issues/742) 修复在 MacOS 的 Chrome 里，键盘右边的 Command 键不能触发翻译的问题
- [#777](https://github.com/lmk123/crx-selection-translate/issues/777) 修复谷歌翻译语音变慢的问题

## v7.1.5

#### 功能改进

- [#697](https://github.com/lmk123/crx-selection-translate/issues/697) 让网址筛选的规则匹配所有端口号
- 给有道翻译添加了荷兰语支持
- 如果语音播放时出现了错误会给用户提示

#### bug 修复

- [#774](https://github.com/lmk123/crx-selection-translate/issues/774) 修复在 Chrome 自带 PDF 阅读器的右键菜单中没有“在划词翻译中打开此 PDF”的选项的问题

## v7.1.4

#### 功能改进

- [#753](https://github.com/lmk123/crx-selection-translate/issues/753) 调整翻译面板布局，让界面更小巧、更紧凑
- 给扩展图标弹窗里的“设置”二字添加链接
- 给网页划词窗口的关闭按钮加上快捷键 Esc 的提示

#### bug 修复

- [#770](https://github.com/lmk123/crx-selection-translate/issues/770) 修复独立翻译窗口没有读取剪切板的问题
- [#744](https://github.com/lmk123/crx-selection-translate/issues/744) 修复在部分网站中点击空白处没有隐藏窗口的问题

## v7.1.3

#### bug 修复

- [#750](https://github.com/lmk123/crx-selection-translate/issues/750) 修复了面板中的文本框遮挡住了语种切换下拉框的问题

## v7.1.2

#### bug 修复

- 修复了扩展图标弹窗中的翻译面板没有自动读取剪切板的问题

## v7.1.1

#### 新功能

- 在设置中添加了调整网页划词弹窗方向的功能

#### 功能改进
- 将面板最小宽度从 300px 改为跟旧版一致的 250px
- 在设置页的“翻译源”部分添加了文本提示，告知用户这里不是用于调整翻译源的以及在哪调整翻译源

#### bug 修复

- [#749](https://github.com/lmk123/crx-selection-translate/issues/749) **修复了上个版本添加的提示窗口导致在所有网站中的输入框中指针聚焦失效的问题**，这个 bug 导致了诸如“B 站 / 微博首页搜索框点击后没有弹出热搜菜单”、“网页中的日历选择器在点击输入框后没有弹出来”等问题

## v7.1.0

#### 功能改进

- [#718](https://github.com/lmk123/crx-selection-translate/issues/718) 将翻译按钮尺寸调小
- [#706](https://github.com/lmk123/crx-selection-translate/issues/706) 对界面布局进行了一系列变化：将语种切换等功能放进了点击设置图标后展开的快捷选项面板中，并给了用户一个弹窗提示，告知了界面的变化；让翻译面板变得紧凑一点；去掉了菜单按钮，直接将功能显示在了面板上等
- [#743](https://github.com/lmk123/crx-selection-translate/issues/743) 次要目标语种由固定英文改为可以在设置项中配置

#### bug 修复

- [#726](https://github.com/lmk123/crx-selection-translate/issues/726) 修复 Octotree 插件的侧边栏挡住了网页划词面板的问题

## v7.0.6

- 修复在文本框中选中文本然后按下 Ctrl + Space 切换输入法时会触发翻译的问题
- 在“关于划词翻译”页面添加赞助方式
- 添加按下 ESC 键隐藏网页划词面板的功能
- 将读取剪切板做成设置项，现在可以关闭此功能
- 修复重试按钮被隐藏的 bug
- **修复翻译结果有很多换行的问题**，这些换行同时也导致翻译结果不准确
- 修复独立窗口和扩展图标弹窗中右侧的语种选择弹窗撑开页面的问题

## v7.0.5

- 将黑/白名单改为在 popup 中让用户可以方便的开启、关闭，更易于使用和理解
- 修复多行的翻译结果在复制后变成了一行的问题
- 如果翻译结果提供了音标，则不会在源语种右侧显示翻译按钮了，因为音标右侧会有按钮

## v7.0.4

- 当源语种和目标语种都是中文时，将结果翻译成英语
- 支持配合辅助键 Ctrl / Command 使用网页划词（划词时或划词后按下辅助键）
- 将面板上的图标改为在鼠标移动上去之后才显示
- 进一步去掉复制翻译结果时添加的“音标：”、“词典释义：”这些不属于翻译结果的内容
- 将扩展图标快捷键改为跟 v6 版本一致
- 给翻译结果添加播放功能
- 面板的菜单改为鼠标移动上去就自动打开，无需点击

## v7.0.3

- 当用户从 v6 升级到 v7.0.3 及以上版本时，继承 v6 的设置项
- 如果独立窗口的快捷键被清除了，在扩展图标弹窗中给出提示
- 复制的翻译结果去掉了“翻译结果来自xxx”的文字
- 将复制按钮从菜单中提去出来直接放在面板上
- 打开独立翻译窗口和扩展图标弹窗时，自动选择文本框内的内容并聚焦到文本框内
- 修复文本框不能输入空格和回车符号的 bug

## v7.0.2

- 呼出已有独立窗口时，默认从剪切板粘贴内容并翻译
- 将 popup 中的黑白名单信息改为点击后展开的形式
- 将翻译面板重新加回扩展图标弹窗中，并给支持全局快捷键的用户推荐独立翻译窗口
- 将扩展图标的快捷键和翻译网页中选中的文本的快捷键重新添加回来，跟旧版保持一致

## v7.0.1

全新版本的划词翻译发布！虽然版本号是 v7.0.1，但其实是新版本的第一个发布版本。

新版本有以下改进：

- 全新的、更现代化的界面，可以同时显示多个翻译源的结果
- 新增了独立翻译窗口的翻译模式，可以在任意其他程序中呼出进行翻译

## v6.4.12

v6 版本的更新日志请查看 [https://github.com/lmk123/crx-selection-translate/releases](https://github.com/lmk123/crx-selection-translate/releases)。