import React from 'react'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/firebase';
import Signup from '../components/Authform/Signup';
import { doc, setDoc } from 'firebase/firestore';

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
    const signup = async (inputs) => {
        if(!inputs.email || !inputs.password || !inputs.firstname || !inputs.lastname || !inputs.contact){
            console.log("Please fill all fields!");
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if(!newUser && error){
                console.log(error);
                return
            }
            if(newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    email:inputs.email,
                    firstname:inputs.firstname,
                    lastname:inputs.lastname,
                    bio:"",
                    profilePicURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:DataTransfer.now(),
                };
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info",JSON.stringify(userDoc));
            }
        } catch (error) {
            console.log(error);
        }
    }
    return {loading, error, Signup}
}

export default useSignUpWithEmailAndPassword