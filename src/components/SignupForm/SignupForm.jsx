import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
            return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
        });

        useEffect(() => {
            window.localStorage.setItem(key, JSON.stringify(state));
        }, [key, state]);

        return [state, setState];
};

export default function SignupForm() {

    const [email, setEmail] = useLocalStorage('email', '');
    const [password, setPassword] = useLocalStorage('password', '');

const handleChange = e => {
    const { name, value} = e.target;
    switch (name) {

        case 'email': 
            setEmail(value);
            break;

        case 'password': 
            setPassword(value);
            break;

        default:
            return;
    };
};

    return (
        <form autoComplete="off">
            <label>
                <span>Email</span>
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                     />
            </label>
            <label>
                <span>Password</span>
                <input 
                    type="text" 
                    name="password"
                    value={password}
                    onChange={handleChange}
                     />
            </label>
        </form>
    );

};