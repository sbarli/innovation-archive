import { FC, createContext, useContext, useEffect, useState, useMemo } from 'react';

import { getCards } from '../../firebase/get/cards';
import { IBaseProps, ICard } from '../../types';

interface ICardsById {
  [key: string]: ICard;
}

export interface ICardsContext {
  cardsById: ICardsById;
  loading: boolean;
}

export const CardsContext = createContext<ICardsContext>({
  cardsById: {},
  loading: true,
});

export const useCardsContext = () => useContext(CardsContext);

export const CardsProvider: FC<IBaseProps> = ({ children }) => {
  const [fetchedCards, setFetchedCards] = useState(false);
  const [cardsById, setCardsById] = useState<ICardsById>({});

  useEffect(() => {
    const retrieveCards = async () => {
      const cards = await getCards();
      if (cards) {
        setCardsById(cards);
      }
    };
    if (!fetchedCards) {
      retrieveCards();
      setFetchedCards(true);
    }
  }, []);

  const contextValue = useMemo(() => {
    return { cardsById, loading: !fetchedCards };
  }, [cardsById]);

  return <CardsContext.Provider value={contextValue}>{children}</CardsContext.Provider>;
};
