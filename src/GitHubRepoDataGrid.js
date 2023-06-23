import React, { useState } from 'react';
import axios from 'axios';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

// 화면 리사이징 오류 발생 해결
window.ResizeObserver = undefined;

export default function GitHubRepoDataGrid() {

  const [keyword, setKeyword] = useState(''); 
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);

  const searchRepositories = () => {
    axios.get(`https://api.github.com/search/repositories?q=${keyword}`)
      .then((response) => { 
        console.log(response) 
        const responseData = response.data;  
        console.log(responseData)
        const items = responseData.items; 
        console.log(items)
        setRepositories(items);
        setError(null);
      })
      .catch((error) => {
        setRepositories([]);
        setError(error.message);
      });
  };

  // react-data-grid 컬럼 정의
  const columns =[
    {key: 'id', name: 'ID'},
    {key: 'name', name: 'Name'},
    {key: 'html_url', name: 'URL'},
  ];

  return (
    <div>
      <h1>GitHub Repository Search</h1>
      <input
        type="text" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword"
      />
      <button onClick={searchRepositories}>Search</button>
      {error && <p>Error: {error}</p>}
      <DataGrid columns={columns} rows={repositories} />
    </div>
  );
}