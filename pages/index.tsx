import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import { useI18n } from 'next-localization'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
/**
 * Homepage
 */
const HomePage = () => {
  const router = useRouter()
  const i18n = useI18n()
  const tp = i18n.withPlural()

  return (
    <main>
      <h1>{i18n.t('intro.hello')}</h1>
      <h3>{i18n.t('intro.description')}</h3>
      <div>Current locale: {router.locale}</div>
      <div>Pluralization: {tp('warning', { birds: 2 })}</div>

      <Link href={'/reset'}>
        <a>reset page</a>
      </Link>
      <div>
        <Link href="/foo" locale="en">
          <button
            className="w-1/12 flex items-center justify-center rounded-md bg-black text-white"
            type="submit"
          >
            Goto foo (en)
          </button>
        </Link>
      </div>
      <div>
        <Link href="/foo" locale="fr">
          <a>Goto foo (fr)</a>
        </Link>
      </div>
      <HomepageCounter />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`)

  return {
    props: { lngDict },
  }
}

// export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
//   return {
//     // @ts-ignore
//     paths: locales.map((l) => ({ params: { slug: `/` }, locale: l })),
//     fallback: false
//   };
// }

export default HomePage
