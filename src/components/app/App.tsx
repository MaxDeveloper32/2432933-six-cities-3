import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import MainLogin from '../../pages/main-login/main-login';
import NoMainPage from '../../pages/no-main-page/no-main-page';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import PreLoading from '../../pages/pre-loading/pre-loading';
import { useAppSelector } from '../../hooks/use-app-redux/use-app-redux';


const App = () => {
  const authStatus = useAppSelector((state) => state.authStatus.authStatus);
  const isLoadOffers = useAppSelector((state) => state.offers.loadStatus);

  if(authStatus === AuthorizationStatus.Unknown || isLoadOffers){
    return (
      <PreLoading />
    );
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path={ AppRoute.Main } element={ <Layout /> }>
          <Route index element={ <MainPage /> } />
          <Route path={ AppRoute.Login } element={ <MainLogin/> } />
          <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute authorizationStatus={ AuthorizationStatus.NoAuth }>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={ AppRoute.Offer } element={ <Offer/> } />
        </Route>
        <Route path="*" element={ <NoMainPage/> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
