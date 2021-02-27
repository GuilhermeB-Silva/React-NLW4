import { useContext } from 'react'
import styles from '../styles/components/CompletedChallenges.module.css'
import { challengeContext } from '../contexts/ChallengeContext'


export function CompletedChallenges(){

    const {challengeCompleted } = useContext(challengeContext)


    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}