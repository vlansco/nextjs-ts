import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { I18nProvider } from 'next-localization'
import { useRouter } from 'next/router'
import { storeWrapper } from '@store/store'
import '@common/css/tailwind.css'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  const { lngDict, ...rest } = pageProps

  return (
    // @ts-ignore
    <I18nProvider lngDict={lngDict} locale={router.locale}>
      <Component {...rest} />
    </I18nProvider>
  )
}

export default storeWrapper.withRedux(CustomApp)
