export interface Jokeinfo {
  id: string
  question: string
  answer: string
}

export interface RandomJokesSliceState {
  data: Jokeinfo[]
  status: 'default' | 'loading' | 'success' | 'error'
  error: any
}