import React from 'react'

import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material"

// const tableData = [
//     {
//         id:1,
//         cantidad:1,
//         unidad_medida:'frasco',
//         denominacion:'AP',
//     },
//     {
//         id:2,
//         cantidad:9,
//         unidad_medida:'Tubos',
//         denominacion:'Lauril Simple',
//     },
//     {
//         id:3,
//         cantidad:90,
//         unidad_medida:'Ml',
//         denominacion:'Ogye',
//     },
//     {
//         id:4,
//         cantidad:2,
//         unidad_medida:'Tubos',
//         denominacion:'AP',
//     }

// ]


const MuiTable = ( {tableData}) => {
  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple Table'>
            <TableHead>
                <TableRow>
                    <TableCell align='center'>Id</TableCell>
                    <TableCell align='center'>Cantidad</TableCell>
                    <TableCell align='center'>U.M.</TableCell>
                    <TableCell align='left'>Denominacion</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row=>(
                        <TableRow 
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th' : {border: 0}}}>
                            <TableCell align='center'>{row.id}</TableCell>
                            <TableCell align='center'>{row.cantidad}</TableCell>
                            <TableCell align='center'>{row.unidad_medida}</TableCell>
                            <TableCell align='left'>{row.denominacion}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    </TableContainer>
  )
}

export default MuiTable