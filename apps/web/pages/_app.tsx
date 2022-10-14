import { DefaultPageLayout } from '../components/layouts/defaulPageLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return <DefaultPageLayout>
    <Component {...pageProps} />
  </DefaultPageLayout>
}

export default MyApp
