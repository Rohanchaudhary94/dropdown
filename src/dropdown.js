import './App.css';

function dropdown()
{
    
  return (
    <div className="App" style={{width : "300px",
    height :"150px",
    backgroundColor: "skyblue",
    marginLeft: "33.3%",
    marginRight: "33.3%",
    marginTop: "10.3%",
    padding:"80px"

    }}>
        <h4>Should you use a dropdown?</h4>
     <select style={{
        padding: "10px",


     }}>
        <option>
            select
        </option>
        <option>
            Yes
        </option>
        <option>
            Probably Not
        </option>
     </select>
    </div>
  );
}

export default dropdown;
