import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% {
    transform: rotate(0deg);
    color: #4285F4;
  }
  25% { color: #DE3E35; }
  50% { color: #F7C223; }
  75% { color: #1B9A59; }
  100% {
    transform: rotate(360deg);
    color: #4285F4;
  }
`

const Loader = styled.i`
  display: block;
  font-size: 1.2rem;
  animation: ${loading} .5s linear infinite;
`

export default Loader
