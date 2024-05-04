
const { useState } = React

export function RootCmp() {
    const [ route, setRoute ] = useState('book-index')

    return (
<section className='app'>
        <header className='flex'>
        <h1>My Book App</h1>
        <nav>
        <ul className='flex'>
           <li><a onClick={() => setRoute('home-page')} href="#">Home Page</a></li> 
           <li><a onClick={() => setRoute('about-us')} href="#">About Us</a></li> 
           <li><a onClick={() => setRoute('book-index')} href="#">Books</a></li> 
        </ul>
        </nav>
    </header> 

        <main className="content-grid">
            <h1>Hello React</h1>
            {route === 'book-index' }

        </main>
        </section>
    )
}