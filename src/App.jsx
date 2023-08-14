import  { useState } from 'react';

// import { Container } from "@mui/material";
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Button  from "@mui/material/Button";

export default function App(){

  const [searchText, setSearchText] = useState('');
  const [quantity, setQuantity] = useState('');
  const handleSearch = () => {
    // Aquí puedes implementar la lógica para realizar la búsqueda
  };
  // Datos de ejemplo para la tabla
  const tableData = [
    { nro: 1, cantidad: 10, codigo: 'A001', descripcion: 'Producto 1' },
    { nro: 2, cantidad: 5, codigo: 'A002', descripcion: 'Producto 2' },
    // ...
  ];
  return (
    <div>
      <div>
        <TextField
          label="Buscar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>Buscar</Button>
        <TextField
          label="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nro</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Código</TableCell>
              <TableCell>Descripción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.nro}>
                <TableCell>{row.nro}</TableCell>
                <TableCell>{row.cantidad}</TableCell>
                <TableCell>{row.codigo}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );  
}