import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link 
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Roboto:wght@100;500&family=Space+Grotesk:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;400&display=swap" 
        rel="stylesheet" 
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
