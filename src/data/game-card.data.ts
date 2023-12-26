import { IGameCardData } from '@/interfaces/game-card.interface'
import hero from '../../public/cs-2-characters.png'
import pubgHero from '../../public/pubg-hero.png'
export const gameCardData: IGameCardData[] = [
  {
    id: 1,
    title: 'Counter Strike',
    underTitle: ' Global Offensive',
    description: ' Do not miss the beginning of a new battle season',
    image: hero,
  },
  {
    id: 2,
    title: "PLAYERUNKNOWN'S",
    underTitle: 'Battlegrounds',
    description: ' Do not miss the beginning of a new battle season',
    image: pubgHero,
  },
]
