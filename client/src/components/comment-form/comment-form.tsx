import { useState } from 'react';

const StarIcon = () => (
    <svg style={{ display: "none" }}>
        <symbol id="icon-star" viewBox="0 0 37 33">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" />
        </symbol>
    </svg>
);

function CommentForm() {
    const [commentText, setCommentText] = useState('');
    const [starsCount, setStarsCount] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.currentTarget.value || "");
        console.log("Comment: " + commentText.length);
    }

    const handleStarClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStarsCount(Number(e.currentTarget.value))
        console.log("Stars: " + e.currentTarget.value)
    }

    return (
        <form className="reviews__form form" action="#" method="post">
            <label className="reviews__label form__label" htmlFor="review">Your review</label>
            <div className="reviews__rating-form form__rating">
                <StarIcon />
                <input className="form__rating-input visually-hidden" name="rating" onClick={handleStarClick} value="5" id="5-stars" type="radio" />
                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                    <svg className="form__star-image" width="37" height="33">
                        <use href="#icon-star"></use>
                    </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" onClick={handleStarClick} value="4" id="4-stars" type="radio" />
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                    <svg className="form__star-image" width="37" height="33">
                        <use href="#icon-star"></use>
                    </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" onClick={handleStarClick} value="3" id="3-stars" type="radio" />
                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                    <svg className="form__star-image" width="37" height="33">
                        <use href="#icon-star"></use>
                    </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" onClick={handleStarClick} value="2" id="2-stars" type="radio" />
                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                    <svg className="form__star-image" width="37" height="33">
                        <use href="#icon-star"></use>
                    </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" onClick={handleStarClick} value="1" id="1-star" type="radio" />
                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                    <svg className="form__star-image" width="37" height="33">
                        <use href="#icon-star"></use>
                    </svg>
                </label>
            </div>
            <textarea
                className="reviews__textarea form__textarea"
                id="review"
                name="review"
                onChange={handleChange}
                placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled={commentText.length > 50 && starsCount > 0 ? false : true}>Submit</button>
            </div>
        </form>
    );
}

export { CommentForm };