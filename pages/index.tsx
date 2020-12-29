import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import { useI18n } from 'next-localization'
import { GetStaticProps } from 'next'
/**
 * Homepage
 */
const HomePage = () => {
  const i18n = useI18n()

  return (
    <main>
      <p className="text-3xl font-sans font-black">{i18n.t('intro.hello')}</p>

      <div className="flex flex-row space-x-2 my-5">
        <Link href={'/reset'}>
          <button className="btn-blue">Goto Reset page</button>
        </Link>

        <Link href="/foo" locale="en">
          <button className="btn-green">Goto /foo (en)</button>
        </Link>
        <Link href="/foo" locale="fr">
          <button className={'btn-green'}>Goto /foo (fr)</button>
        </Link>
      </div>
      <div>
        <HomepageCounter />
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(
    `../src/locales/${locale}.json`
  )

  return {
    props: { lngDict },
  }
}

export default HomePage
