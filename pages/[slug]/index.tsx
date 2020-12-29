import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next'
/**
 * Homepage
 */
const FooPage = () => {

  const router = useRouter();
  const i18n = useI18n();
  const tp = i18n.withPlural();

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
          <a>Change language to (en)</a>
        </Link>
      </div>
      <div>
        <Link href="/foo" locale="fr">
          <a>Change language to (fr)</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Back to root</a>
        </Link>
      </div>
      <HomepageCounter />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async({ locale }) => {
  const { default: lngDict = {} } = await import(`../../locales/${locale}.json`);

  return {
    props: { lngDict }
  };
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  return {
    // @ts-ignore
    paths: locales.map((l) => ({ params: { slug: `foo` }, locale: l })),
    fallback: false
  };
}
export default FooPage
