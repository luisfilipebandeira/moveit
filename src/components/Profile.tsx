import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/luisfilipebandeira.png" alt="Imagem de perfil" />
            <div>
                <strong>Luis Filipe</strong>
                <p>
                    <img src="icons/level.svg" alt="Imagem de nivel" />
                    Level {level}                </p>
            </div>
        </div>
    );
}