import styled from 'styled-components'

const Hero = styled.section`
  background-color: #00D1B2;
  color: #FFFFFF;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

Hero.Results = styled(Hero)`
  background-color: #363636;
  background-image: linear-gradient(180deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
`

Hero.Body = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`

Hero.Container = styled.div`
  @media screen and (min-width: 1000px) {
      margin: 0 auto;
      max-width: 960px;
      width: 960px;
  }
  @media screen and (min-width: 1192px) {
      max-width: 1152px;
      width: 1152px;
  }
  @media screen and (min-width: 1384px) {
    max-width: 1344px;
    width: 1344px;
  }
`

Hero.ResultsContainer = styled(Hero.Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

Hero.Title = styled.h1`
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.125;
  word-break: break-word;
`

Hero.Subtitle = styled.h2`
  margin-top: -1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.25;
  word-break: break-word;
`

export default Hero
