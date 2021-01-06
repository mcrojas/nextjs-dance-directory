import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '../components/NavBar';

class MyDocument extends Document {
  // Cosas que podemos hacer desde el server
	static async getInitialProps(ctx) {
    // todos los cambios aplican para todas las paginas
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
		return (
      <Html>
        <Head>
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
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument