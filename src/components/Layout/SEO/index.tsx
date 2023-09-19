import Head from "next/head";
import { useRouter } from "next/router";

// Default value
const defaultMeta = {
    title: 'Melhores ações para investir na Bolsa',
    siteName: 'Toro Investimentos',
    description:'Veja onde e como investir na Bolsa de Valores hoje, mesmo com pouco dinheiro, com as carteiras das melhores ações recomendadas pela Toro e Corretagem Zero.',
    url: 'https://toro-desafio.vercel.app/',
    // url: '/',
    type: 'website',
};

const favicons = [
    {
        rel: 'icon',
        href: '/favicon/favicon.ico',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/android-icon-96x96.png',
    },{
        rel: 'icon',
        type: 'image/png',
        sizes: '144x144',
        href: '/android-icon-144x144.png',
    },
    {
        rel: 'manifest',
        href: '/toro.webmanifest',
        crossorigin: 'anonymous'
    },
];

export const MetaHead = (props) => {
    const router = useRouter();
    const meta = { ...defaultMeta, ...props};
  
    meta.title = props.title ? `${props.title} | ${meta.siteName}`: meta.title;
    
    return (
        <Head>
            <title>{meta.title}</title>
            <meta name='description' content={meta.description} />
            <meta name='theme-color' content='#6131b4' />
            <meta property='og:title' content={meta.title} />
            <meta property='og:site_name' content={meta.siteName} />
            <meta property='og:type' content={meta.type} />
            <meta property='og:url' content={`${meta.url}${router.asPath}`} />
            <meta property='or:description' content={meta.description}  />

            <meta name='twitter:title' content={meta.title} />
            <meta name='twitter:description' content={meta.description} />

            <link  rel="preload"  href="/fonts/DINPro.woff2"  as="font" type="font/woff2"  crossOrigin="anonymous"/>
            <link  rel="preload"  href="/fonts/DINPro-Medium.woff2"  as="font" type="font/woff2"  crossOrigin="anonymous"/>
            <link  rel="preload"  href="/fonts/DINPro-Bold.woff2"  as="font" type="font/woff2"  crossOrigin="anonymous"/>

            {favicons.map((linkProps) => (
                <link key={linkProps.href} {...linkProps} />
            ))}
        </Head>
    );
}
