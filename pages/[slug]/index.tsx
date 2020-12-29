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
      <div>
        <p className="text-3xl font-sans font-black">{i18n.t('intro.hello')}</p>
        <p className="text-2xl  font-sans font-extralight">{i18n.t('intro.description')}</p>
        <div className="my-2 text-2xl font-light">Current locale: <span className="text-indigo-600">{router.locale}</span></div>
        <div className="my-2 text-2xl font-light">Pluralization: <span className="text-indigo-600">{tp('warning', { birds: 2 })}</span></div>
      </div>
      <div className="flex flex-row space-x-2 my-5">
        <Link href={'/'}>
          <button className="btn-blue">Back to Home</button>
        </Link>

        <Link href={'/reset'}>
          <button className="btn-blue">Goto Reset page</button>
        </Link>

        <Link href="/foo" locale="en">
          <button className="btn-green">Goto (en) version</button>
        </Link>
        <Link href="/foo" locale="fr">
          <button className={"btn-green"}>Goto (fr) version</button>
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
