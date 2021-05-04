import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';




const Row = (row) => {

    const { gender, email, fullName, phone, age } = row
    return (
        <TableRow key={fullName}>
            <TableCell component="th" scope="row">
                {fullName}
            </TableCell>
            <TableCell align="right">{gender}</TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{phone}</TableCell>
            <TableCell align="right">{age}</TableCell>
        </TableRow>
    )

}


export default Row