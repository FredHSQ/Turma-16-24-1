import React, { createContext, useEffect, useState } from 'react';

export const FavEnemyContext = createContext();

export const FavEnemyProvider = ({ children }) => {
    const [favEnemyList, setFavEnemyList] = useState([]);

    useEffect(()=>{
        setFavEnemyList(getData());
    },[]);

    function getData() {
        const localStorageData = localStorage.getItem('fav-enemy-list');
        return localStorageData != null ? JSON.parse(localStorageData) : [];
    };

    function storeData(value) {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem('fav-enemy-list', jsonValue);
    };

    function addFavEnemy(newFavEnemy) {
        setFavEnemyList([...favEnemyList, newFavEnemy]);
        storeData([...favEnemyList, newFavEnemy]);
    };

    function removeFavEnemy(indexFavEnemy) {
        let newFavEnemyList = favEnemyList.filter(enemy=> enemy.index !== indexFavEnemy)
        
        setFavEnemyList(newFavEnemyList);
        storeData(newFavEnemyList);
    };

    return (
        <FavEnemyContext.Provider
            value={{
                favEnemyList,
                addFavEnemy,
                removeFavEnemy
            }}
        >
            { children }
        </FavEnemyContext.Provider>
    )
}