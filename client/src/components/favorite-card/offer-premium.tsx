function Premium({ isPremium }: { isPremium: boolean }) {
    if (!isPremium) return null;
    
    return (
        <div className="place-card__mark">
            <span>Premium</span>
        </div>
    );
}

export { Premium };