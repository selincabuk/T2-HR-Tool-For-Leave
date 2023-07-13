import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react';
import './RequestsTable.css';
import ApproveButton from './ApproveButton';
import DescriptionButton from './DescriptionButton';
import DeleteRequestButton from './DeleteRequestButton';

function RequestsTable() {
    type Request = {
        id: number,
        fname: string,
        lname: string,
        email: string,
        startDate: string,
        endDate: string,
        reason: string,
    }

    // state to fetch requests:
    const [requests, setRequests] = useState([] as Request[]);
    // state if fetching fails:
    const [error, setError] = useState<boolean>(false);
    // to show loading animation:
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch('http://localhost:3001/admin/get-requests');
                if (!response.ok) {
                    console.log("hataaaaaa")
                }
                const data = await response.json();
                setRequests(data);
                console.log(data);
                setIsLoading(false)
                setError(false)
            } catch (error) {
                setError(true)
                setIsLoading(false)
            }
        };
        fetchData();
    }, []);

    return (
        <div className='requests__table__div'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="users table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Start Date</TableCell>
                            <TableCell align="center">End Date</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests && !error && requests.length > 0 && requests.map((row: Request) => (
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
                                <TableCell align="center">{row.reason}</TableCell>
                                <TableCell align="center">
                                    <div className='request__button__holder'>
                                        <DescriptionButton /><ApproveButton /><DeleteRequestButton />
                                    </div>
                                   
                                </TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {error && !isLoading && 
                    <Alert severity="error">Something went wrong. Please try again.</Alert>
                }
                {!isLoading && !error && requests && requests.length <= 0 &&
                    <Alert severity="info">No requests available</Alert>
                }     
            </TableContainer>
        </div>
    )

}

export default RequestsTable;