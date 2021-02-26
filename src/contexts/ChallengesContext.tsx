import { useState, createContext, ReactNode } from 'react';

export const ChallengesContext = createContext ({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider ({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);

    function levelUp() {
      setLevel(level + 1);
    }

    function startNewChallenge() {
      console.log("New Challenge");
    }
  
    return (
    <ChallengesContext.Provider 
    value={{ 
      level,
      currentExperience,
      challengeCompleted,
      levelUp,
      startNewChallenge 
    }}
    >
        { children }
    </ChallengesContext.Provider>
    );
}
