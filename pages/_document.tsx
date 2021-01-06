import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '@components/NavBar';
import Footer from '@components/Footer';

class MyDocument extends Document {
  render() {
		return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"></link>
          {/* lo modificamos para */}
          {/* favicon */}
          {/* webfonts personalizadas */}
          {/* stylesheet externos */}
          {/* script/js externos */}
        </Head>
        {/* No es muy comun editar adentro del body */}
        {/* pero se puede usar para agregar una clase */}
        <body className="dance-directory">
          <Navbar />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument