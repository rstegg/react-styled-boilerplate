import styled from 'styled-components'

const Table = styled.table`
  background-color: white;
  color: #363636;
  margin-bottom: 1.5rem;
  width: 100%;
  & tr.is-selected {
    background-color: #00d1b2;
    color: #fff;
  }
  & tr.is-selected a,
  & tr.is-selected strong {
    color: currentColor;
  }
  & tr.is-selected td,
  & tr.is-selected th {
    border-color: #fff;
    color: currentColor;
  }
  & thead td,
  & thead th {
    border-width: 0 0 2px;
    color: #7a7a7a;
  }
  & tfoot td,
  & tfoot th {
    border-width: 2px 0 0;
    color: #7a7a7a;
  }
  &.is-bordered td,
  &.is-bordered th {
    border-width: 1px;
  }
  &.is-bordered tr:last-child td,
  &.is-bordered tr:last-child th {
    border-bottom-width: 1px;
  }
  &.is-narrow td,
  &.is-narrow th {
    padding: 0.25em 0.5em;
  }
  &.is-striped tbody tr:not(.is-selected):nth-child(even) {
    background-color: #fafafa;
  }
  &.is-striped tbody tr:not(.is-selected):nth-child(even):hover {
    background-color: whitesmoke;
  }
`

Table.Header = styled.thead`
  border-width: 0 0 2px;
  color: #7a7a7a;
`

Table.Body = styled.tbody`
  & tr:last-child td,
  & tr:last-child th {
    border-bottom-width: 0;
  }
`

Table.Row = styled.tr`
  background-color: #fafafa;
  &:hover {
    background-color: #fafafa;
  }
`

Table.Heading = styled.th`
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
  color: #363636;
  text-align: center;
`

Table.Cell = styled.td`
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
`

export default Table
