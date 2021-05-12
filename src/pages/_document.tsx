// Use Material-ui with SSR / SSG
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs

import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import theme from '../theme'
import { ServerStyleSheets } from '@material-ui/core'

export default class MyDocument extends Document {
  // @ts-ignore
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // @ts-ignore
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
  }
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}