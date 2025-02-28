import { useState } from "react";
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"

const CurdApp = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  
  const createData = data => {
    data.id = Date.now()
    setDb([...db, data])
  }
  const updateData = data => {
    let newData = db.map(e => e.id===data.id ? data : e)
    setDb(newData)
  }
  const deleteData = id => {
    let newData = db.filter(e => e.id!==id)
    setDb(newData)
  }
  
  
  


  return (
    <div>
      <h2>Crud</h2>
      <CrudForm 
        createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit} />
      <CrudTable 
        data={db} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData} />
      
    </div>
  )
}

export default CurdApp
