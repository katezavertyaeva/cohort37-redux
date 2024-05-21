import styled from "@emotion/styled"

export const ActivityRandomizerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ActivityRandomizerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 900px;
  min-height: 400px;
  max-height: 720px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
`

export const ButtonContainer = styled.div`
  min-width: 300px;
`
export const ActivityRandomizerInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`
export const ActivityRandomizerText = styled.p`
  font-size: 24px;
  font-weight: bold;
`
