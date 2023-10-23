import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBook from './AddBook';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function Books() {
  const [books, setBooks] = useState([]);

  const columnDefs = [
    { field: 'title', sortable: true, filter: true},
    { field: 'author', sortable: true, filter: true},
    {
        headerName: '',
        field: 'id',
        width: 90,
        cellRenderer: params => 
        <IconButton onClick={() => deleteBook(params.value)} size="small" color="error">
            <DeleteIcon />
        </IconButton> 
    }
  ]

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = () => {
    fetch('https://books-541e9-default-rtdb.europe-west1.firebasedatabase.app/books/.json')
    .then(response => response.json())
    .then(data => addKeys(data))
    .catch(err => console.error(err))
  }

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) => Object.defineProperty(item, 'id', {value: keys[index]}));
    setBooks(valueKeys);
  }

  const addBook = (newBook) => {
    fetch('https://books-541e9-default-rtdb.europe-west1.firebasedatabase.app/books/.json',
    {
      method: 'POST',
      body: JSON.stringify(newBook)
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  const deleteBook = (id) => {
    fetch(`https://books-541e9-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
    {
        method: 'DELETE',
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  return (
    <>
      
      <AddBook addBook={addBook} />
      <div className="ag-theme-material" style={{ height: 300, width: 600, textAlign: "left"}}>
        <AgGridReact 
          rowData={books}
          columnDefs={columnDefs}
        />
      </div>
    </>
  );
}

export default Books;