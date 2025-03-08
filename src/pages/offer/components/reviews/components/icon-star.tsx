import React, {ChangeEvent} from 'react';

type Stars = {
  estimation: number;
  title: string;
}
const stars :Stars[] = [
  { estimation: 5, title: 'perfect' },
  { estimation: 4, title: 'good' },
  { estimation: 3, title: 'not bad' },
  { estimation: 2, title: 'badly' },
  { estimation: 1, title: 'terribly' },
];

type IconStarProps = {
  onRatingChange: (rating: number) => void;
}

const IconStar = ({onRatingChange} :IconStarProps) => {
  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rating = Number(event.target.value);
    onRatingChange(rating);
  };

  return (
    <>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating ">
        {stars.map(({estimation = 0, title}) => (
          <React.Fragment key={estimation}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={estimation}
              id={`${estimation}-stars`}
              type="radio"
              aria-label={`${estimation} stars`}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${estimation}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

    </>
  );
};

export default IconStar;
