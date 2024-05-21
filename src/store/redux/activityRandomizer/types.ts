export interface ActivityData {
  id: string,
  activity: string
}

export interface ActivityRandomizerState {
  data: ActivityData[],
  isLoading: boolean,
  error: any
}