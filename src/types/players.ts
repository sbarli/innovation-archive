export interface IPlayer {
  id: string;
  name: string;
  left: string;
  right: string;
}

export interface IPlayers {
  [key: string]: IPlayer;
}
