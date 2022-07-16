import MainScreen from '../../pages/main/main';
import { Promo } from '../../types/promo';

type AppProps = {
  promo: Promo,
}

export default function App({promo}: AppProps): JSX.Element {
  return <MainScreen promo={promo} />;
}
