import { useState, useEffect } from "react";
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [isCanceled, setIsCanceled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);

            // if sign up doesn't work
            if (!res) {
                throw new Error('Could not complete sign up');
            }

            // add display name to user. displayName is a special keyword from firebase
            await res.user.updateProfile({ displayName });

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user });

            // update state
            if (!isCanceled) {
                setIsPending(false);
                setError(null);
            }

        } catch (err) {
            if (!isCanceled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCanceled(true);
    }, []);

    return { error, isPending, signup };
}