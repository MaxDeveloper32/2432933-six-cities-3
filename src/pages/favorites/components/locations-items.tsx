import PlacesCardImage from '../../../components/place-card-image/place-card-image';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import { TypePlace } from '../../../types/place-type/place-type';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';
import LinkWrapper from '../../../components/link-wrapper/link-wrapper';

const LocationsItems = (offer: TypePlace) => (
  <li className='favorites__item'>
    <LinkWrapper link={`/offer/${offer.id}`} >
      <article className="favorites__card place-card">
        { offer.isPremium && <PremiumMark /> }
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <PlacesCardImage image={ offer.previewImage } width={150} height={110} />
        </div>
        <div className="favorites__card-info place-card__info">
          <PlacesCardInfo {...offer} />
        </div>

      </article>
    </LinkWrapper>
  </li>
);

export default LocationsItems;

