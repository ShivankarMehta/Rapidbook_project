import Dropdownf from "./Dropdownf";
function Table({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Debit_Amount, Credit_Amount}= data;
            return(
                 <>
                <tr key={index}>
                <td>
               <Dropdownf/>
                </td>
                <td><input type="text" value={Debit_Amount}  onChange={(evnt)=>(handleChange(index, evnt))} name="Debit_Amount" className="form-control"/> </td>
                <td><input type="text" value={Credit_Amount}  onChange={(evnt)=>(handleChange(index, evnt))} name="Credit_Amount" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            </>
            )
        })
   
    )
    
}

export default Table;