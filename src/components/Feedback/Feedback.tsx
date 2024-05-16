import { LikeImg, DislikeImg } from "assets"
import {
  FeedbackWrapper,
  Count,
  ImageContainer,
  Image,
  ImagesResultsWrapper
} from "./styles"
import Button from "components/Button/Button"
import { feedbackSliceActions, feedbackSliceSelectors } from "store/redux/feedback/feedbackSlice"
import { useAppSelector, useAppDispatch } from "store/hooks"

function Feedback() {
  const likeFeedback = useAppSelector(feedbackSliceSelectors.like)
  const dislikeFeedback = useAppSelector(feedbackSliceSelectors.dislike)

  const dispatch = useAppDispatch()

  const addLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }

  const addDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <FeedbackWrapper>
      <ImagesResultsWrapper>
        <Count>{likeFeedback}</Count>
        <ImageContainer>
          <Image src={LikeImg} alt='like' onClick={addLike} />
        </ImageContainer>
        <ImageContainer>
          <Image src={DislikeImg} alt='dislike' onClick={addDislike} />
        </ImageContainer>
        <Count>{dislikeFeedback}</Count>
      </ImagesResultsWrapper>
      <Button name='Reset results' onButtonClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
