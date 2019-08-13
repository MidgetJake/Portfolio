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
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <style jsx global>{`
            body {
                margin: 0;
                padding: 0;
                overflow-x: hidden;
                width: 100vw;
            }`}
        </style>
        <Page />
    </div>;
};
