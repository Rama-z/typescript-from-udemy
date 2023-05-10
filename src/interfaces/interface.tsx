/**
 * All The Interface
 */

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: null;
  name: string;
  number: number;
  rating: { average: null };
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}

export interface IState {
  episodes: any[];
  favorites: any[];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface ITodo {
  text: string;
  complete: boolean;
}

export interface IPropsTodo {
  todo: ITodo[];
  setTodo: any;
}
