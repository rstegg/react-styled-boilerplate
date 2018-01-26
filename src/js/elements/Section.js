import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  background-color: white;
  padding: 3rem 1.5rem;
`

Section.Container = styled.div`
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

Section.Title = styled.h1`
  color: hsl(0, 0%, 21%);
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.125;
  margin-bottom: 1.5rem;
  word-break: break-word;
  text-align: center;
`

Section.Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: hsl(0, 0%, 29%);
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.25;
  word-break: break-word;
  margin-top: -1.5rem;
  text-align: center;
`

export default Section
