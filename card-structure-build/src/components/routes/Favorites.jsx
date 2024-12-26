import NavBar from '../Navbar'
import Footer from '../Footer'
import CardGrid from '../CardGrid'
import { useHashtable } from '../FavoriteHashTableContext';

function Favorites(){
    const favTable = useHashtable();
    return(
        <>
            <>
            <header>
                <NavBar />
            </header>
            <h1>Favorite Players</h1>
            <main>
                <CardGrid players = {favTable.getListFromTable()} isFavoritePage={true}/>
            </main>
            <Footer />
            </>
        </>
    );
}

export default Favorites;