import { createContext, useState,ReactNode, useEffect} from 'react'

import challenges from '../../challenges.json'


interface ChallengesProviderProps {
    children : ReactNode;
}

interface Challenge {
    type: 'body' | 'type';
    description: string;
    amount: number
}

interface ChallengesContextData{
    level: number;
    currentExperience:number;
    activeChallenges: Challenge,
    challengeCompleted:number;
    experienceToNextLevel: number,
    levelUp : () => void;
    startNewChallenge: () => void;
    resetChallenge : () => void;
    completedChallenge : () => void
}

export const challengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps ){

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience ] = useState(0)
    const [challengeCompleted,setChallengeCompleted] = useState(0);
    const [activeChallenges,setActiveChallenges] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2 ) 


    useEffect(()=>{
        Notification.requestPermission()
    },[])


    function levelUp(){
        setLevel(level + 1); 
    }

    function startNewChallenge(){
        const randomChallenges = Math.floor( Math.random() * challenges.length)
        const challenge = challenges[randomChallenges]
        setActiveChallenges(challenge)
        new Audio('/notification.mp3').play()
        
        if(Notification.permission === 'granted'){
            new Notification('Novo desafio',{
                body: `Valendo ${challenge.amount} xp!`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenges(null)
    }

    function completedChallenge(){

        if(!activeChallenges){
            return
        }

        const { amount} = activeChallenges

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenges(null)
        setChallengeCompleted( challengeCompleted + 1)



    }

    return (

        <challengeContext.Provider value={{
            resetChallenge,
            level,
            currentExperience,
            challengeCompleted,
            levelUp,
            startNewChallenge,
            activeChallenges,
            experienceToNextLevel,
            completedChallenge }}>
            {children}
        </challengeContext.Provider>



    )


}

