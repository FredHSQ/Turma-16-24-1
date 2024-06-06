import React, { useContext, useEffect, useState } from "react";
import EmptyStar from '../../assets/emptyStar.png';
import FullStar from '../../assets/fullStar.png';
import styles from './styles.module.css';
import { FavEnemyContext } from "../../context/favEnemyContext";

export const Enemy = ({ enemy }) => {
    const [isFav, setIsFav] = useState(false);
    const { addFavEnemy, removeFavEnemy, favEnemyList } = useContext(FavEnemyContext);

    function handleFav () {
        if(isFav) {
            removeFavEnemy(enemy.index)
        } else {
            addFavEnemy(enemy)
        }
        setIsFav(!isFav);
    }

    useEffect(()=>{
        const isEnemyFav = favEnemyList.find(favEnemy => favEnemy.index === enemy.index);
        if(isEnemyFav) {
            setIsFav(true);
        }
    }, [favEnemyList]);

    return <div className={styles.enemy}>
        {enemy.name}
        <img onClick={handleFav} src={isFav ? FullStar : EmptyStar} />
    </div>
}