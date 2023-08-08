import '@styles/global.css';

export const metadata = {
    title : "Promptopia",
    description : "Discover and share Ai prompts!"
}

const rootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default rootLayout;