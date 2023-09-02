import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './authentication.styles.scss';

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const Authentication = () => {

    
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className='authentication-container'>
        {/* <button onClick={logGoogleUser} */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
};

export default Authentication;