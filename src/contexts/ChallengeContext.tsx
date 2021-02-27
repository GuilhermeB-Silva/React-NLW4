import { createContext, useState,ReactNode} from 'react'

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
    resetChallenge : () => void
}

export const challengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps ){

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience ] = useState(0)
    const [challengeCompleted,setChallengeCompleted] = useState(0);
    const [activeChallenges,setActiveChallenges] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2 )




    function levelUp(){
        setLevel(level + 1); 
    }

    function startNewChallenge(){
        const randomChallenges = Math.floor( Math.random() * challenges.length)
        const challenge = challenges[randomChallenges]
        setActiveChallenges(challenge)
    }

    function resetChallenge(){
        setActiveChallenges(null)
    }

    return (

        <challengeContext.Provider value={{resetChallenge, level,currentExperience,challengeCompleted,levelUp,startNewChallenge,activeChallenges,experienceToNextLevel }}>
            {children}
        </challengeContext.Provider>



    )


}

