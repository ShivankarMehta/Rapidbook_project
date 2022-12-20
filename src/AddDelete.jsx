import { useState } from "react"
import Table from "./Table"
function AddDelete(){
    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            amount:'',
            debit:'',
            credit:''  
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
   
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
}

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                          <th>Account</th>
                          <th>Debit Amount</th>
                          <th>Credit Amount</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>
                    </thead>
                   <tbody>
                   <Table id="table" rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   <tr>
                          <th>Total</th>
                          <th>{}</th>
                          <th>{}</th>
                      </tr>
                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}
export default AddDelete