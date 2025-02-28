import { helpHttp } from "../helpers/helpHttp"
import { useState, useEffect } from "react";
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    

    let api = helpHttp()
    let url = "http://localhost:5000/santos"

    useEffect(() => {
        setLoading(true)
        api.get(url).then(res=>{
            if (!res.err) {
                setDb(res)
                setError(null)
            }else{
                setDb(null)
                setError(res.err)
            }
        })
        setLoading(false)
    }, []);
    
    const createData = data => {
      data.id = Date.now()

      api.post(url,{body:data}).then(res=>{
        if (!res.err) {
            setDb([...db, data])            
        }else{
            setError(res)
        }
      })
    }
    const updateData = data => {
        let endPoint = `${url}/${data.id}`;
        //console.log(data)
        
        let options = {
          headers: { "Content-Type": "application/json" },
          body: data,
        };
      
        api.put(endPoint, options).then(res => {
          if (!res.err) {
            let newData = db.map(e => e.id === data.id ? data : e);
            setDb(newData);
          } else {
            setError(res);
          }
        });
      };
      
    const deleteData = id => {
        let endPoint = `${url}/${id}`;
        
        let options = {
          headers: { "Content-Type": "application/json" }
        };
      
        api.del(endPoint, options).then(res => {
          if (!res.err) {
            console.log(res)
            let newData = db.filter(e => e.id!==id)
            setDb(newData)
          } else {
            setError(res);
          }
        });



    }
    
    
    
  
  
    return (
      <div>
        <h2>Crud</h2>
        <CrudForm 
          createData={createData} 
          updateData={updateData} 
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit} />

        {loading && <Loader/>}
        {error && <Message/>}
        
        {db && 
            <CrudTable 
            data={db} 
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData} />
        }
        
    
      </div>
    )
}

export default CrudApi
