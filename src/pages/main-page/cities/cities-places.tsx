import { useState, useCallback } from 'react';
import PlacesList from '../../../components/places-list/places-list';
import PlacesSorting from '../places-sorting/places-sorting';
import CitiesMap from '../../../components/cities-map/cities-map';
import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import { offersSelector } from '../../../store/offers/offers-selector';
import EmptyPlacesList from './empty-places-list';

const CitiesPlaces = () => {
  const places = useAppSelector(offersSelector);
  const cityName = useAppSelector((state) => state.offers.city);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleActiveCardChange = useCallback((id: string | null) => {
    setActiveCard(id);
  }, []);

  if(places.length === 0){
    return <EmptyPlacesList />;
  }

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{places.length} places to stay in {cityName}</b>

        <PlacesSorting />
        <PlacesList
          places={places}
          onActiveCardChange={handleActiveCardChange}
          classNames={{
            container: 'cities__places-list places__list tabs__content',
            imageWrapper: 'cities__image-wrapper place-card__image-wrapper'
          }}
        />
      </section>
      <div className="cities__right-section">
        <CitiesMap offers={places} currentId={activeCard} className={'cities__map map'}/>
      </div>
    </div>
  );
};

export default CitiesPlaces;
