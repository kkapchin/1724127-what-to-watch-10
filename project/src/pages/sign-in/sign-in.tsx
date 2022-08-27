import { FormEvent, useRef } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/header/title';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { browserHistory } from '../../services/browser-history';
import { loginAction } from '../../store/api-actions';
import { AuthDataType } from '../../types/auth-data-type';

export default function SignIn(): JSX.Element {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const { authorizationStatus } = useAppSelector((state) => state);

  if(authorizationStatus === AuthorizationStatus.Auth) {
    browserHistory.back();
  }

  const onSubmit = (authData: AuthDataType) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
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
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
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
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
