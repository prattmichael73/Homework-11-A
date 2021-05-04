
import './App.css';
import Table from './components/Table'
import axios from 'axios'
import React from 'react'

function App() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    console.log('here')
    axios.get('https://randomuser.me/api/?results=100').then((res) => {
      console.log(res.data.results)
      setData(res.data.results)
    })

  }, [])


  return (
    <>
      { (data.length > 0) && (< div className="App">
        <h1 style={{ fontSize: '30px', marginBottom: "30px" }}>My Employees</h1>
        <Table data={data} />
      </div>)}

    </>
  );
}

export default App;
