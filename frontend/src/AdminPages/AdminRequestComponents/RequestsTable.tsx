import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import './RequestsTable.css';
import ApproveButton from './ApproveButton';
import DescriptionButton from './DescriptionButton';
import DeleteRequestButton from './DeleteRequestButton';

type Request = {
    id: number,
    fname: string,
    lname: string,
    email: string,
    startDate: string,
    endDate: string,
    reason: string,
    status: string
}

type requestArray = Request[];

function RequestsTable(props: requestArray) {
    
    return (
        <div className='requests__table__div'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="users table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">İsim</TableCell>
                            <TableCell align="center">Soyisim</TableCell>
                            <TableCell align="center">Eposta</TableCell>
                            <TableCell align="center">İzin Başlangıç Tarihi</TableCell>
                            <TableCell align="center">Bitiş Tarihi</TableCell>
                            <TableCell align="center">Detay/Onay/Red</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.requests && requests.length > 0 && requests.map((row: Request) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {row.fname}
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    {row.lname}
                                </TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.startDate}</TableCell>
                                <TableCell align="center">{row.endDate}</TableCell>
                                <TableCell align="center">
                                    <div className='request__button__holder'>
                                        <DescriptionButton startDate={row.startDate} endDate={row.endDate} reason={row.reason}/><ApproveButton /><DeleteRequestButton />
                                    </div>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}

export default RequestsTable;