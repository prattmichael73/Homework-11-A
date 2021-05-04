import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'




const Head = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Full name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone Number</TableCell>
            </TableRow>
        </TableHead>
    )
}


export default Head