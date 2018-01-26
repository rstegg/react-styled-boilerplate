import styled from 'styled-components'

const Card = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: #4A4A4A;
  max-width: 100%;
  position: relative;
  @media screen and (min-width: 1025px), print {
    width: 300px;
    margin: 25px;
    max-width: 100%;
    overflow: hidden;
  }
`

Card.Header = styled.header`
  align-items: stretch;
  justify-content: center;
  min-height: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
`

Card.Header.Title = styled.p`
  align-items: center;
  color: #363636;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  padding: 0.75rem;
`

Card.Content = styled.div`
  padding: 1.5rem;
  color: #4a4a4a;
  display: flex;
  height: 100%;
  min-height: 250px;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`

Card.Footer = styled.footer`
  border-top: 1px solid #dbdbdb;
  align-items: stretch;
  display: flex;
`

Card.Footer.Item = styled.a`
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;
  text-decoration: none;
  &:not(:last-child) {
    border-right: 1px solid #dbdbdb;
  }
`

export default Card
