import { useState, useMemo } from "react";

const initialFriends = [
 'Xanthe Bailey',
 'Savannah Campbell',
 'Francisca Baker',
 'Kaia Torres',
 'Elianna Diaz',
 'Ella Young',
 'Nola Roberts',
 'Yuki Rogers',
 'Gwendolyn Davis',
 'Hana Coleman',
 'Zoya Martinez',
 'Della Lee',
 'Rosalyn Green',
 'Gretchen Mitchell',
 'Myla Young',
 'Hailee Butler',
 'Savannah Gonzalez',
 'Wilmina Moore',
 'Siena Griffin',
 'Isabela Hill',
 'Charleigh Barnes',
 'Amelia Clark',
 'Kiara Martin',
 'Jaelyn Wood',
 'Elianna Morris',
 'Zara Green',
 'Quintana Stewart',
 'Nia Mitchell',
 'Yohanna Howard',
 'Ella Bell',
 'Willow Howard',
 'Paula Sanders',
 'Gloria Perez',
 'Lexi Long',
 'Lilly Walker',
 'Winona Powell',
 'Taya Perry',
 'Noemi Sanchez',
 'Rylee Patterson',
 'Fernanda Moore',
 'Alexa Gonzalez',
 'Daniela Williams',
 'Natalia Watson',
 'Veronika Mitchell',
 'Fatima Garcia',
 'Britney Carter',
 'Aurora Reed',
 'Queen Torres',
 'Dorothy Reed',
 'Treasure Jackson',
 'Gisele Ward',
 'Patience Garcia',
 'Ember Barnes',
 'Liliana James',
 'Ireland Rivera',
 'Joanna Hayes',
 'Evie Richardson',
 'Ximena Allen',
 'Nylah Sanders',
 'Myla Murphy',
 'Nathalia Mitchell',
 'Patience Evans',
 'Zipporah Scott',
 'Madeline Brooks',
 'Zinnia Ross',
 'Delilah Turner',
 'Persephone Patterson',
 'Gabriella Lopez',
 'Leilani Brooks',
 'Xylia Young',
 'Michelle Moore',
 'Willabelle Alexander',
 'Zaina Foster',
 'Fabiana Green',
 'Giselle Torres',
 'Wanda Griffin',
 'Violetta Johnson',
 'Xeni Wood',
 'Fabiana Patterson',
 'Danika Miller',
 'Alexandra Martinez',
 'Zelda Hernandez',
 'Lana Griffin',
 'Xena Miller',
 'Cora Evans',
 'Britney Cox',
 'Olympia Nelson',
 'Camilla Wilson',
 'Yvette Anderson',
 'Natalee Gray',
 'Harmonie Walker',
 'Oona Washington',
 'Tala Phillips',
 'Julia Price',
 'Prudence Foster',
 'Valor Murphy',
 'Megan Brooks',
 'Teresa Flores',
 'Yasmine Smith'
];

export default function Friends() {
    const [count, setCount] = useState(0);
    const [friends] = useState(initialFriends);
    const [filter, setFilter] = useState('');

// ================= Performance optimization for complex calculations =================

    const visibleFriends = useMemo(() => {
        console.log('Filtered friends' + Date.now());
        return friends.filter(friend => 
            friend.toLowerCase().includes(filter));
    }, [friends, filter]);

// ================= Performance optimization for complex calculations =================


        return (
            <div>
                <h2>Friends</h2>
                <button 
                    type="button"
                    onClick={() => setCount(c => c + 1)}
                >{count}</button>
                <hr />
                <input 
                    type="text"
                    value={filter}
                    onChange={e => setFilter(e.target.value)} 
                />
                <ul>
                    {visibleFriends.map((friend, idx) => (
                        <li key={idx}>
                            <p>{friend}</p>
                        </li>
                ))}
                </ul>
            </div>
        )
};
