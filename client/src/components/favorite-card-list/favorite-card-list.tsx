import { OffersList } from "../../types/offer";
import FavoriteCard from '../favorite-card/favorite-card';

type CitiesCardListProps = {
    offersList: OffersList[];
}

function FavoriteCardList({ offersList }: CitiesCardListProps) {
    return (
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offersList, (item) => 
                item.isFavorite && (
                    <FavoriteCard key={item.id} id={item.id} title={item.title} type= {item.type} price={item.price}
                            previewImage={item.previewImage} isPremium={item.isPremium} rating={item.rating}/>
                )
            )}
        </div>
    );
}

export { FavoriteCardList };