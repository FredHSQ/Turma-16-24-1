import React, { useContext, useEffect, useState } from "react";
import { getEnemyList } from "../../services/enemyApi";
import styles from './styles.module.css';
import { Enemy } from "../../components/Enemy";
import { Link } from "react-router-dom";
import { FavEnemyContext } from "../../context/favEnemyContext";

export const EnemyShop = () => {
    const [enemyList, setEnemyList] = useState([
        { name: 'vilao1' },
        { name: 'vilao2' },
        { name: 'vilao3' },
        { name: 'vilao4' }
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getApiData();
    },[]);

    async function getApiData() {
        try {
            const results = await getEnemyList();
            setEnemyList(results.data.results);
            setLoading(!loading);
        } catch {
            console.log('deu erro');
        }
    }

    if(loading) {
        return <div>
            Carregando...
        </div>
    }
    
    return <div className={styles.enemyList}>
        <Link to={'../FavEnemy'}>
            Go to Fav
        </Link>
        {
            enemyList.map((enemy, index) => {
                return <Enemy key={index} enemy={enemy}/>
            })
        }
    </div>
};