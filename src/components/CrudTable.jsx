import CrudTableRow from "./CrudTableRow"

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <table>
      <thead>
        <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ?
          data.map(e=> <CrudTableRow key={e.id} e={e} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
          : <tr><td colSpan="3">Sin datos</td></tr>
        }

      </tbody>
    </table>
  )
}

export default CrudTable
