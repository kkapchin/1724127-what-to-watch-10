import { ChangeEvent, FormEvent, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/header/title';
import { AuthorizationStatus, EMAIL_REGEX, PASSWORD_REGEX } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { browserHistory } from '../../services/browser-history';
import { loginAction } from '../../store/api-actions';
import { selectErrorStatus } from '../../store/film-data/selectors';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';

export default function SignIn(): JSX.Element {

  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const dispatch = useAppDispatch();

  const errorStatus = useAppSelector(selectErrorStatus);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if(authorizationStatus === AuthorizationStatus.Auth) {
    browserHistory.back();
  }

  const isValidEmail = () => {
    if(!email) {
      return true;
    }
    return EMAIL_REGEX.test(email);
  };

  const isValidPassword = () => {
    if(!password) {
      return true;
    }
    return PASSWORD_REGEX.test(password);
  };

  const handleEmailChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isValidEmail() && isValidPassword() && email && password) {
      dispatch(loginAction({
        email,
        password,
      }));
    }
  };

  return (
    <div className="user-page">
      <Header
        isTitle
        title={<Title isSignIn />}
        isSignIn
      />

      <div className="sign-in user-page__content">
        <form
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__message">
            {!isValidEmail() && (
              <p>Please enter a valid email address</p>
            )}
            {!isValidPassword() && (
              <p>Password must contain at least one letter and number</p>
            )}
            {errorStatus === 400 && (
              <p>We can’t recognize this email <br/>
              and password combination. Please try again.
              </p>
            )}
          </div>
          <div className="sign-in__fields">
            <div className={`sign-in__field ${!isValidEmail() && 'sign-in__field--error'}`}>
              <input
                onChange={handleEmailChange}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">{email}</label>
            </div>
            <div className={`sign-in__field ${!isValidPassword() && 'sign-in__field--error'}`}>
              <input
                onChange={handlePasswordChange}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
