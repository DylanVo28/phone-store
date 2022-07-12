import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableM8=({children})=>{
    return  <TableContainer component={Paper} className="table-m8">
        <style jsx global>
            {`
                .table-m8{
                  border-radius: 0;
                  box-shadow: none;
                }
                .table-m8 .table-m8__table-row{
                  background: #E2EEFF;
                  border: 1px solid #A7BFDF;
                }
                .table-m8 .table-m8__table-row th,.table-m8 .table-m8__table-row td{
                  border: 1px solid #A7BFDF;
                  color: #495057;
                }
            `}
        </style>
      <Table  aria-label="simple table" >
       
        <TableBody>
          
          {children}
        </TableBody>
      </Table>
    </TableContainer>
}
export default TableM8