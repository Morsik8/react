import MainPage from "../../pages/main-page/main-page"
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import LoginPage from "../../pages/login-page/login-page";
import OfferPage from "../../pages/offer-page/offer-page";
import NotFound from "../../pages/not-found/not-found";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const'
import { PrivateRoute } from '../../components/private-route/private-route';
import { FullOffer, OffersList } from '../../types/offer'

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
}

function App({ rentalOffersCount, offersList, offers }: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage rentalOffersCount={rentalOffersCount} offersList={ offersList } />} />
                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute
                            authorizationStatus={AuthorizationStatus.NoAuth}
                        >
                            <FavoritesPage />
                        </PrivateRoute>
                    } />
                <Route
                    path={AppRoute.Login}
                    element={<LoginPage />} />
                <Route
                    path={`${AppRoute.Offer}/:id`}
                    element={<OfferPage offers={offers}/>} />
                <Route
                    path="*"
                    element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export { App };