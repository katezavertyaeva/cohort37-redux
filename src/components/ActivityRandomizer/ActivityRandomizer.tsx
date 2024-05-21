import { useAppDispatch, useAppSelector } from "store/hooks"

import Button from "components/Button/Button"
import {
  ActivityRandomizerWrapper,
  ButtonContainer,
  ActivityRandomizerText,
  ActivityRandomizerCard,
  ActivityRandomizerInfoContainer,
} from "./styles"
import { activityRandomizerSliceActions, activityRandomizerSliceSelectors } from "store/redux/activityRandomizer/activityRandomizerSlice";
import { ActivityData } from "store/redux/activityRandomizer/types";
import { useEffect } from "react";

function ActivityRandomizer() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(activityRandomizerSliceSelectors.activity)
  console.log(data)
  const getActivity = () => {
    dispatch(activityRandomizerSliceActions.getActivity())
  }

  const deleteAllActivity = () => {
    dispatch(activityRandomizerSliceActions.reseteActivityState())
  }

  useEffect(() => {
    if (error) {
      alert('Error response')
    }
  }, [error])

  const activity = data.map((activityObj: ActivityData, index) => {
    return (<ActivityRandomizerInfoContainer key={activityObj.id}>
      <ActivityRandomizerText>{`${index + 1}. ${activityObj.activity}`}</ActivityRandomizerText>
      <ButtonContainer>
        <Button
          name="Delete activity"
          onButtonClick={() => {
            dispatch(activityRandomizerSliceActions.deleteActivity(activityObj.id))
          }}
        />
      </ButtonContainer>
    </ActivityRandomizerInfoContainer>
    )
  })

  return (
    <ActivityRandomizerWrapper>
      <ActivityRandomizerCard>
        <ButtonContainer>
          <Button
            disabled={isLoading}
            name="Get activity"
            onButtonClick={getActivity}
          />
        </ButtonContainer>
        {activity}
        {data.length > 0 && (
          <ButtonContainer>
            <Button
              name="Delete all activity"
              onButtonClick={deleteAllActivity}
            />
          </ButtonContainer>
        )}
      </ActivityRandomizerCard>
    </ActivityRandomizerWrapper>
  )
}

export default ActivityRandomizer
