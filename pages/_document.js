import Document, { Head, NextScript, Main, Html } from 'next/document';

class document extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta name="description" content="note app for writing notes" />
                    <link rel="icon" type="image/png" href="favicon.png" />
                    <script src="https://kit.fontawesome.com/79dc7e05c2.js" crossOrigin="anonymous" async></script>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" async></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};

export default document