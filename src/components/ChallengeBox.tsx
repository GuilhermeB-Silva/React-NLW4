import { useContext } from 'react'
import { challengeContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    const {activeChallenges, resetChallenge, completedChallenge} = useContext(challengeContext)
    const {resetCountdown} = useContext( CountdownContext)


    function handleSuccessChallenge(){
        completedChallenge() 
        resetCountdown()
        
    }

    function handleFailChallenge(){
        resetChallenge()
        resetCountdown()
         
    }
    


    return  (
        <div className={styles.challengeBoxContainer}>
           {activeChallenges ? (
                <div className={styles.challengeActive}>
                   <header>{activeChallenges.amount} xp</header>
                   <main>
                       <img src={`icons/${activeChallenges.type}.svg`} alt=""/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenges.description}</p>
                   </main>
                   <footer>
                       <button type="button" className={styles.failedButton} onClick={handleFailChallenge} >Falhei</button>
                       <button type="button" className={styles.completedButton} onClick={handleSuccessChallenge}>Completei</button>

                   </footer>
                </div>
           ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt=""/>
                        Avance de level completando desafios.
                    </p>
                </div>
           )}
        </div>
    )
}