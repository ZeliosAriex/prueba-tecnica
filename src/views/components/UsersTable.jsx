import React from 'react'
import PropTypes from 'prop-types'
import editIcon from '../../resources/images/edit.svg'

const UsersTable = ({ users }) => {
  const tableColumns = [
    { path: 'first_name', label: 'Nombre' },
    { path: 'last_name', label: 'Apellidos' },
    {
      key: 'details',
      content: (entry) => (
        <button className='btn btn-sm btn-link btn-block d-flex justify-content-center' key={entry.id} type='button'>
          <img className='page-icon' src={editIcon} alt='Lock' />
        </button>
      ),
    },
  ]

  const getTableHeaders = (headerColumns) =>
    headerColumns.map((c) => <th key={c.path + c.label}>{c.label}</th>)

  const getTableBodyCell = (entry, columns) =>
    columns.map((c) => {
      if (c.content) return <td className='text-center w-10p' key={entry.id + c.path}>{c.content(entry)}</td>
      return <td key={entry.id + c.path}>{entry[c.path]}</td>
    })

  const getTableBodyRow = (entries, columns) =>
    entries.map((entry) => (
      <tr key={entry.id}>{getTableBodyCell(entry, columns)}</tr>
    ))

  return (
    <div className='table-responsive'>
      <table className='table table-striped table-hover shadow-light smallcaps'>
        <thead className='thead-dark'>
          <tr>{getTableHeaders(tableColumns)}</tr>
        </thead>
        <tbody>{getTableBodyRow(users, tableColumns)}</tbody>
      </table>
    </div>
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UsersTable
