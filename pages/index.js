import Page from '../client/src/index.jsx';
import Head from 'next/Head';

export default props => {
    return <div>
        <Head>
            <title>Jake Barter</title>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
            <script dangerouslySetInnerHTML={{ __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: "ca-pub-8584060377808857",
                    enable_page_level_ads: true
                });
            `}} />
        </Head>
        <Page />
    </div>;
};