
const CrudTableRow = ({e, setDataToEdit, deleteData}) => {
  return (
    <tr>
        <td>{e.name}</td>
        <td>{e.constellation}</td>
        <td>
            <button onClick={()=>setDataToEdit(e)}>Editar</button>
            <button onClick={()=>deleteData(e.id)}>Borrar</button>

        </td>
    </tr>
  )
}

export default CrudTableRow
