export interface IPlayer {
  id: string;
  name: string;
  left: string;
  right: string;
  isFirst?: boolean;
}

export interface IPlayers {
  [key: string]: IPlayer;
}
