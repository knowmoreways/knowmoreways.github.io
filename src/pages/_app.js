import Head from 'next/head';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen flex flex-col max-w-3xl xl:max-w-5xl mx-auto px-4'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='py-10'>
        <Link href="/">
          <a className='font-mono text-xl font-thin tracking-widest'>
            KnowMoreWays
          </a>
        </Link>
      </header>
      <main className='flex-grow'>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
