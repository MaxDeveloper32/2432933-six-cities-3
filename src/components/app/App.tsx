import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import MainLogin from '../../pages/main-login/main-login';
import NoMainPage from '../../pages/no-main-page/no-main-page';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer-page';
import { AppRoute, } from '../const';
import { checkAuthAction } from '../../services/api-action/user-process';
import { useAppDispatch, } from '../../hooks/use-app-redux/use-app-redux';
import { useEffect } from 'react';
import { getOffers } from '../../services/api-action/offers';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOffers());
    dispatch(checkAuthAction());
  }, [dispatch]);


  return(
    <Routes>
      <Route path={ AppRoute.Main } element={ <Layout /> }>
        <Route index element={ <MainPage /> } />
        <Route path={ AppRoute.Login } element={ <MainLogin/> } />
        <Route
          path={ AppRoute.Favorites }
          element={
            <PrivateRoute >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={ AppRoute.Offer } element={ <Offer/> } />
      </Route>
      <Route path="*" element={ <NoMainPage/> }/>
    </Routes>
  );
};

export default App;
