
export enum AppState {
  START = 'START',
  PROPOSAL = 'PROPOSAL',
  ACCEPTED = 'ACCEPTED',
  LOVE_LETTER = 'LOVE_LETTER'
}

export interface LoveLetterParams {
  partnerName: string;
  myName: string;
  vibe: string;
  favoriteMemory: string;
}
