import { useState } from "react";
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInUserWithAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields); // Use [ ] instead of { }

    const { email, password } = formFields;

    const resetForms = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await signInUserWithAuthUserWithEmailAndPassword(email, password);
            resetForms();
        } catch (error) {
            console.error('User creation encountered an error', error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target; // Access event.target
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />
                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />
                <div className="buttons-container">
                    <Button type="sign-in" onClick={handleSubmit}>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign In</Button>
                </div>
            </form>
        </div>
    )
}


export default SignInForm;