import React, { useContext } from 'react';
import { Enemy } from '../../components/Enemy';
import styles from './styles.module.css';
import { FavEnemyContext } from '../../context/favEnemyContext';

export const FavEnemy = () => {
    const { favEnemyList } = useContext(FavEnemyContext);

    return <div className={styles.enemyList}>
        {
            favEnemyList.map(enemy => {
                return <Enemy enemy={enemy}/>
            })
        }
    </div>
};