import { createAppSlice } from "store/createAppSlice";
import { ActivityData, ActivityRandomizerState } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const activityRandomizerInitialState: ActivityRandomizerState = {
  data: [],
  isLoading: false,
  error: undefined
}

export const activityRandomizerSlice = createAppSlice({
  name: 'ACTIVITY_RANDOMIZER',
  initialState: activityRandomizerInitialState,
  reducers: create => ({
    deleteActivity: create.reducer((
      state: ActivityRandomizerState,
      action: PayloadAction<string>) => {
      state.data = state.data.filter((activityObj: ActivityData) => activityObj.id !== action.payload)
    }),
    getActivity: create.asyncThunk(
      async (arg, { rejectWithValue }) => {
        const response = await fetch('https://www.boredapi.com/api/activity')
        // const response = await fetch ('url', {
        // method: 'POST'
        // body: JSON.stringify(arg)
        // })
        const result = await response.json()

        if (!response.ok) {
          return rejectWithValue(result)
        } else {
          return result
        }
      }, {
      pending: (state: ActivityRandomizerState) => {
        state.isLoading = true
        state.error = undefined
      },
      fulfilled: (state: ActivityRandomizerState, action: PayloadAction<any>) => {
        state.isLoading = false
        state.data = [...state.data, {
          id: v4(),
          activity: action.payload.activity
        }]
      },
      rejected: (state: ActivityRandomizerState, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
      }
    }
    ),
    reseteActivityState: create.reducer(() => activityRandomizerInitialState)
  }),
  selectors: {
    activity: (state: ActivityRandomizerState) => state
  }
})

export const activityRandomizerSliceActions = activityRandomizerSlice.actions;
export const activityRandomizerSliceSelectors = activityRandomizerSlice.selectors;
