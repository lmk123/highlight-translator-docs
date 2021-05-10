import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export function LatestVersion() {
  const { siteConfig } = useDocusaurusContext()
  return <a href="/docs/log">v{siteConfig.customFields.latestVersion}</a>
}
