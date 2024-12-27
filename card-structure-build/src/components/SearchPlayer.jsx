import { useState, useEffect } from 'react';
import { useHashtable } from './HashtableContext';
import CardGrid from './CardGrid';

export default function SearchPlayer() {
    const [search, setSearch] = useState('');
    const [card, setCard] = useState(null);
    const hashtable = useHashtable();

    const updateSearch = (ev) => {
        setSearch(ev.target.value);
    };

    async function fetchCard() {
        const response = hashtable.findCardFromName(search);
        console.log(response);
        if (response === 0) {
            setCard(null);
        } else {
            setCard(response);
        }
    }

    useEffect(() => {
        if (search !== '') {
            fetchCard();
        }
    }, [search]);

    return (
        <>
            <form className="searchForm">
                <input
                    name="search"
                    id="search"
                    type="search"
                    value={search}
                    onChange={updateSearch}
                />
            </form>
            <main>
                <CardGrid players={card ? [card] : []} />
            </main>
        </>
    );
}
