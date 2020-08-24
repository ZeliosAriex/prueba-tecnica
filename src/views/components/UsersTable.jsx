import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { ReactComponent as InfoIcon } from '../../resources/images/info-square-fill.svg'

const StyledUsersTable = styled.div.attrs(() => ({
  className: 'table-responsive',
}))`
  .btn-table {
    padding: 0;
    display: flex;
    justify-content: center;

    .icon {
      width: 1.375rem;

      path {
        transition: fill 0.3s ease;
        fill: ${(props) => props.theme.infoColor};
      }

      &:hover {
        path {
          fill: ${(props) => props.theme.infoColorDark};
        }
      }
    }
  }

  .table th {
    color: #fff;
    background-color: ${(p) => p.theme.primary};
    border-color: ${(p) => p.theme.primaryLight};
  }
`

const UsersTable = ({ users }) => {
  const { t } = useTranslation()

  const tableColumns = [
    { path: 'first_name', label: t('pages.userList.table.userFirstName') },
    { path: 'last_name', label: t('pages.userList.table.userLastName') },
    {
      key: 'details',
      content: (entry) => (
        <button
          className='btn-table btn btn-link btn-block'
          key={entry.id}
          type='button'
          title={t('pages.userList.table.userDetailsBtn')}
        >
          <InfoIcon className='icon' title='Detalles del usuario' />
        </button>
      ),
    },
  ]

  const getTableHeaders = (headerColumns) =>
    headerColumns.map((c) => <th key={c.path + c.label}>{c.label}</th>)

  const getTableBodyCell = (entry, columns) =>
    columns.map((c) => {
      if (c.content)
        return (
          <td className='text-center w-10p' key={entry.id + c.path}>
            {c.content(entry)}
          </td>
        )
      return <td key={entry.id + c.path}>{entry[c.path]}</td>
    })

  const getTableBodyRow = (entries, columns) =>
    entries.map((entry) => (
      <tr key={entry.id}>{getTableBodyCell(entry, columns)}</tr>
    ))

  return (
    <StyledUsersTable>
      <table className='table table-striped table-hover shadow-light smallcaps'>
        <thead className='thead-dark'>
          <tr>{getTableHeaders(tableColumns)}</tr>
        </thead>
        <tbody>{getTableBodyRow(users, tableColumns)}</tbody>
      </table>
    </StyledUsersTable>
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UsersTable
