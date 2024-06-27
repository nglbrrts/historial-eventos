import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Página de inicio de mi aplicación" />
      </Head>
      <section>
        <h1>Bienvenido a la Página de Inicio</h1>
        <p>Este es el contenido de la página de inicio.</p>
      </section>
    </div>
  );
}
