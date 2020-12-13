import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='antialiased'>
        <Head />
        <body className='bg-white text-gray-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
