import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Loki" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <section>
        <h1>Bienvenido a la Página de Inicio</h1>
        <p>Este es el contenido de la página de inicio.</p>
      </section>
    </div>
  );
}
