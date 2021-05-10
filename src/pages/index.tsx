import React from 'react'
import Layout from '@theme/Layout'

export default function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>
          Edit <code>pages/index.tsx</code> and save to reload.
        </p>
      </div>
    </Layout>
  )
}
