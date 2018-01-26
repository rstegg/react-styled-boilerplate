import styled from 'styled-components'

const Button = styled.button`
  align-items: center;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: none;
  display: inline-flex;
  font-size: 2rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  user-select: none;
  cursor: pointer;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  background-color: #00d1b2;
  border-color: transparent;
  & a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #00c4a7;
  }
  &:focus {
    box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
  }
  &:active {
    background-color: #00b89c;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
  }

`

Button.FullWidth = styled(Button)`
  width: 100%;
  height: 100%;
`

export default Button
