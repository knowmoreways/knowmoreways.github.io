import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <section>
      <Head>
        <title>KnowMoreWays</title>
        <meta name='description' content='All the latest news.' />
        <link rel="canonical" href="https://knowmoreways.com/" />
      </Head>
      <div className="divide-y divide-gray-200">
        <header className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
          <h2 className="text-lg leading-7 text-gray-500">All the latest news, straight from the team.</h2>
        </header>
        <nav>
          <ul className='flex flex-col space-y-4 divide-y divide-gray-200'>
            <li className="py-12 space-y-6">
              <h3 className="text-2xl leading-8 font-bold tracking-tight">
                <Link href="/apple-airpods-charging-case-wired">
                  <a className="text-light-blue-600 hover:underline focus:underline">Apple AirPods with Charging Case (Wired)</a>
                </Link>
              </h3>
              <p className="prose max-w-none text-gray-500">With more talk time, voice-activated Siri access — and a wired charging case — AirPods deliver an unparalleled wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.</p>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
