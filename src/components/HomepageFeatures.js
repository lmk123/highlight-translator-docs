import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: '简单好用',
    description: (
      <>
        界面简洁，使用方便。”非常美观，让我在 Windows 上有了用 macOS
        的感觉！“——来自用户 Binghui Zhang 的评价。
      </>
    ),
  },
  {
    title: '功能丰富',
    description: (
      <>
        支持谷歌、DeepL、百度、搜狗等 9
        个国内外主流翻译源，且均可用于全文翻译。能对比、朗读、复制翻译结果。能在
        PDF 里使用。支持辅助键、快捷键、悬浮取词。
      </>
    ),
  },
  {
    title: '持续更新',
    description: (
      <>
        自 2013 年 5 月 18 日发布第一个版本至今，划词翻译已持续维护了 8
        年时间，有 35 万活跃用户。
        <a href="/docs/histroy">查看划词翻译大事记</a>
      </>
    ),
  },
]

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
