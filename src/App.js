import logo from './logo.svg';
import './App.css';
import PaginationTable from './components/pagination';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        alert("failed to fetch data");
      }
    };

    fetchData();
  });

  return (
    <div className="App">
      <h1>Pagination Table</h1>
      <PaginationTable data={data} rowsPerPage={10} />
    </div>
  );
}

export default App;
