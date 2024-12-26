import NavBar from '../Navbar'
import Footer from '../Footer'
import Form from '../Form';

function AddCards() {

    return(
        <>
            <header>
                <NavBar />   
            </header>
            <h1>Add Player Cards To Collection</h1>
                <Form />
            <Footer />
        </>
    )   
}

export default AddCards;