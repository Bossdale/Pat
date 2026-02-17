
export enum AppState {
  START = 'START',
  PROPOSAL = 'PROPOSAL',
  ACCEPTED = 'ACCEPTED',
  LOVE_LETTER = 'LOVE_LETTER',
  RESPONSE_INPUT = 'RESPONSE_INPUT',
  RESPONSE_DISPLAY = 'RESPONSE_DISPLAY'
}

export interface LoveLetterParams {
  partnerName: string;
  myName: string;
  vibe: string;
  favoriteMemory: string;
}
