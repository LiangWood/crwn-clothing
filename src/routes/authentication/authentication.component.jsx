import SignUpForm from "../../components/sign-up-form/sigin-up-form.component";
import SignInForm from "../../components/sign-in-form/sigin-in-form.component";

import './authenticartion.styles.scss';

const Authentication = () => { 
    return (
      <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
      </div>
    );
};

export default Authentication;