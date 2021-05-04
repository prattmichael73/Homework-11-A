import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from './TableHead'
import Row from './Row'
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(gender, email, fullName, phone, age) {
    return { gender, email, fullName, phone, age };
}



export default function BasicTable({ data }) {
    const classes = useStyles();


    const [selected, setSelected] = React.useState('');

    const handleChange = (e) => {
        const value = e.target.value

        setSelected(value)
    }


    const rows = data.map(employee => {
        const { gender, email, name, phone, dob } = employee
        const { age } = dob
        const { first, last } = name
        const fullName = first + " " + last
        return createData(gender, email, fullName, phone, age)
    })

    console.log(selected)





    return (
        <div>
            <label > filter by gender
                <select style={{ marginLeft: "10px" }} onChange={handleChange}>
                    <option value="">none</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </label>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead />
                    <TableBody>
                        {rows.map((row, index) => {
                            if (selected === "") {
                                return (<Row key={index} {...row} />)
                            }

                            if (selected === 'male' && row.gender === 'male') {
                                return (<Row key={index} {...row} />)
                            }

                            if (selected === 'female' && row.gender === 'female') {
                                return (<Row key={index} {...row} />)
                            }

                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}