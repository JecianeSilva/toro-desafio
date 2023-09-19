import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
     ctx.renderPage = () =>
       originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
       return {
        ...initialProps,
         styles: [initialProps.styles, sheet.getStyleElement()],
       }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return(
      <Html lang='pt-BR'>
        <Head>
            <title>Toro Investimentos - O seu melhor jeito de investir</title>
            <meta property="og:title" content="Toro Investimentos - O seu melhor jeito de investir"></meta>
            <meta property="og:url" content="https://www.toroinvestimentos.com.br/"></meta>

            <meta data-react-helmet="true" name="description" content="Invista na Bolsa, em títulos de Renda Fixa e Fundos de Investimentos com Corretagem Zero. Cadastre-se grátis na Toro e comece a multiplicar seu patrimônio."></meta>
            <meta data-react-helmet="true" name="og:description" content="Invista na Bolsa, em títulos de Renda Fixa e Fundos de Investimentos com Corretagem Zero. Cadastre-se grátis na Toro e comece a multiplicar seu patrimônio."></meta>
            <meta data-react-helmet="true" name="twitter:description" content="Invista na Bolsa, em títulos de Renda Fixa e Fundos de Investimentos com Corretagem Zero. Cadastre-se grátis na Toro e comece a multiplicar seu patrimônio."></meta>
            
            <link rel="icon" href="/favicon.ico" />
            <link  rel="preload"  href="/fonts/DINPro-Light.woff2"  as="font" type="font/woff2"  crossOrigin="anonymous"/>
            <link  rel="preload"  href="/fonts/DINPro.woff2"  as="font" type="font/woff2"  crossOrigin="anonymous"/>
            <link  rel="preload"  href="/fonts/DINPro-Medium.woff2"  as="font" type="font/woff2"  crossOrigin="anonymous"/>
            <link  rel="preload"  href="/fonts/DINPro-Bold.woff2"  as="font" type="font/woff2"  crossOrigin="anonymous"/>
          </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}
