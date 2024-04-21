import Head from "next/head";

const HeadPage = ({title = 'NextLink', linkIcon = '/icons/icon.png'}) =>
{
    return(
        <Head>
            <link rel="icon" type="image/x-icon" href={linkIcon}/>
            <title>{title}</title>
        </Head>
    );
}

export default HeadPage;
