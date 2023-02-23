import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export const Ex03 = () => {
  const [users, setUsers] = useState(null)
  const [rows, setRows] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    if (users) {
      getRows()
    }
  }, [users])

  const getUsers = async () => {
    try {
      setLoading(true)
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      setUsers(await res.json())
    } catch (error) {
      setError(true)
      //console.log('camino triste, la promesa fue rechazada.')
    } finally {
      setLoading(false)
    }
  }

  const getRows = () => {
    const filas = users.map((user) =>
      <tr key={user.id}>
        <td>{user.id}</td>
        <td  className="text-start">{user.name}</td>
        <td  className="text-start">{user.phone}</td>
      </tr>
    )
    setRows(filas)
  }

  return (
    <div>
      <h2>Directorio</h2>
      {error && <Alert variant="danger"><p>Ocurrió un error</p></Alert>}
      {loading && <Spinner animation="border" variant="success" />}
      {rows &&
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      }
    </div>
  )
}
