import React, { useEffect, useState } from "react";
import { getEnemyList } from "../../services/enemyApi";
import styles from './styles.module.css';

export const EnemyShop = () => {
    const [enemyList, setEnemyList] = useState([
        { name: 'vilao1' },
        { name: 'vilao2' },
        { name: 'vilao3' },
        { name: 'vilao4' }
    ]);
    const [loading, setLoading] = useState(true);

    async function getApiData() {
        try {
            const results = await getEnemyList();
            setEnemyList(results.data.results);
            setLoading(!loading);
        } catch {
            console.log('deu erro');
        }
    }

    useEffect(()=>{
        getApiData();
    },[]);

    if(loading) {
        return <div>
            Carregando...
        </div>
    }
    
    return <div className={styles.enemyList}>
        {
            enemyList.map(enemy => {
                return <div className={styles.enemy}>
                    {enemy.name}
                </div>
            })
        }
    </div>
};