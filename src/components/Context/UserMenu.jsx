import { useContext } from "react";
import ctx from './authContext';

const styles = {

};

export default function UserMenu() {
    const { user, logIn, logOut } = useContext(ctx);

    return (
    <div style={styles.container}>
        {user 
        ? <>
            <button 
            type="button" 
            onClick={logOut}
            >Log Out</button>
            <p style={styles.tag}>{user}</p>
        </>
        : <button 
            type="button" 
            onClick={logIn}
         >Log In</button>
        }
    </div>
    );
};