import React from 'react';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Form } from './Form';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 2 },
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'author', headerName: 'Author', flex: 1 },
  { field: 'genre', headerName: 'Genre', flex: 1 },
  { field: 'isbn', headerName: 'ISBN', flex: 1 },
];

interface gridData {
  data: {
      id?:string
  }
};

export const Table = () => {

  let { bookData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = React.useState<any>([]);

  function deleteData () {
      console.log(selectionModel[0]);
      server_calls.delete(selectionModel[0]);
      getData();
      setTimeout( () => { window.location.reload(); }, 5000)
  }
  

  return (
    <div className='table-box'>
      <Form id={selectionModel[0]} deleteData={deleteData}/>
      
      <DataGrid 
      sx={{
        fontSize: '1.8rem'
      }}
      rows={ bookData } 
      columns={ columns }
      onSelectionModelChange={ (item) => {
        setSelectionModel(item);
        console.log(item);
      }}
      />
      
    </div>
  )
}