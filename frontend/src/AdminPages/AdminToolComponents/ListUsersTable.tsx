import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditActionButton from './EditActionButton';
import DeleteIconButton from './DeleteIconButton';

function ListUsersTable() {

    function createData(fname, lname, email, birthDate, gender) {
        return { fname, lname, email, birthDate, gender };
      }
      
      const rows = [
        createData('Ceren', 'Akyar', 'crn@gmail.com', '01.05.2002', 'Female'),
        createData( 'Selin', 'Çabuk', '', '12.05.2002', 'Female'),
        createData( 'Selin', 'bilmiyom', '', '12.05.2002', 'Female'),
        createData( 'Selin', 'bilmiyom', '', '12.05.2002', 'Female'),
        createData( 'Selin', 'bilmiyom', '', '12.05.2002', 'Female'),
        createData( 'Selin', 'bilmiyom', '', '12.05.2002', 'Female'),
        createData( 'Selin', 'bilmiyom', '', '12.05.2002', 'Female'),
        createData( 'Selin', 'bilmiyom', '', '12.05.2002', 'Female'),
        createData( 'Selin', 'bilmiyom', '', '12.05.2002', 'Female'),
      ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Date of Birth</TableCell>
                        <TableCell align="center">Gender</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.email}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.fname}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.lname}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.birthDate}</TableCell>
                            <TableCell align="center">{row.gender}</TableCell>
                            <TableCell align="center"><EditActionButton /> <DeleteIconButton /> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListUsersTable;