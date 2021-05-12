import React from 'react'
import { useGetUserInfo } from '../hooks/useGetUserInfo'
import { useAsyncFn } from 'react-use'
import { API_ROOT, DOC_ROOT } from '../env'
import styles from './InviteGift.module.css'

async function isOKResponse(response, okMsg) {
  const text = await response.text()
  if (text === 'OK') {
    window.alert(okMsg)
    return
  }

  if (!response.ok) {
    window.alert('服务器发生了一个错误，错误消息：' + text)
    return
  }

  try {
    const json = JSON.parse(text)
    if (json.isError) {
      window.alert(json.message)
    }
  } catch (e) {}
}

export function InviteGift() {
  const userState = useGetUserInfo()
  const [buyState, doBuy] = useAsyncFn(async (type: string) => {
    const response = await fetch(API_ROOT + '/rebate?type=' + type, {
      method: 'post',
      credentials: 'include',
    })
    isOKResponse(response, '兑换成功')
  }, [])

  return (
    <div>
      {userState.loading ? (
        <>正在登录，请稍候……</>
      ) : (
        <>
          <p>
            邀请链接：
            {userState.value ? (
              <>
                <input
                  style={{ width: 350 }}
                  type="text"
                  readOnly
                  value={`${DOC_ROOT}/?i=${userState.value._id}`}
                  onFocus={(e) => {
                    e.target.select()
                  }}
                />
              </>
            ) : (
              '请先在划词翻译内登录，然后刷新此页面'
            )}
          </p>
          <p>
            剩余邀请点数：
            {userState.value
              ? userState.value.rebatePoints || 0
              : '请先在划词翻译内登录，然后刷新此页面'}
          </p>
          <p>邀请点数可以兑换这些东西：</p>

          <div className={styles.store}>
            <div className={styles['store-item']}>
              <h4>永久会员</h4>
              <p>需要 98 个邀请点数</p>
              <button
                disabled={buyState.loading}
                onClick={() => {
                  doBuy('forever-vip')
                }}
              >
                兑换
              </button>
            </div>
            <div className={styles['store-item']}>
              <h4>10,000 翻译积分</h4>
              <p>需要 10 个邀请点数</p>
              <button
                disabled={buyState.loading}
                onClick={() => {
                  doBuy('ten-points')
                }}
              >
                兑换
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
