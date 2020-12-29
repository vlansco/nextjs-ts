import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import { storeWrapper } from '@store/store'
import { reset } from '@store/counter/counterActions'
/**
 * Homepage
 */
const ResetPage = () => {
  return (
    <main>
      <Link href={'/'}>
        <a className="text-gray-400 underline font-light text-2xl">
          {'< back'}
        </a>
      </Link>
      <HomepageCounter />
    </main>
  )
}

export const getStaticProps = storeWrapper.getStaticProps(async ({ store }) => {
  store.dispatch(reset)
})

export default ResetPage
