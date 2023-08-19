import React from 'react'
import { useState } from "react";
import { TextField,  Button, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from '@mui/icons-material/Search';

import MuiTable from "../components/MuiTable";

import BDJson from "../data/BD";

// Obtén todas las claves del objeto
const ListaProductos = Object.keys(BDJson);

// const ListaProductos=[
//     "Alimento Preparado ICMSF","Alimento Preparado AOAC"
//     // {label1:'Alimento Preparado ICMSF'},
//     // {label1:'Alimento Preparado AOAC'},
//     // {label1:'Harina AOAC'},
//     // {label1:'Harinas ICMS'},
//     // {label1:'Hojuelas AOAC'},
//     // {label1:'Hojuelas ICMSF'},
//     // {label1:'Café ICMSF'},
//     // {label1:'Chocolates ICMSF'},
//     // {label1:'Yogurt ICMS'},
//     // {label1:'Leche ICMSF'},
//     // {label1:'Quesos ICMSF'},
//     // {label1:'Agua Potable'},
//     // {label1:'Agua Manante'},
//     // {label1:'Agua Residual'},
//     // {label1:'Agua Superficial'},
// ]


export default function Home(){
    const [value, setValue] = useState(ListaProductos[0]);
    const [tableDataBase, setTableDataBase] = useState(BDJson[ListaProductos[0]]);
    const [tableData, setTableData] = useState(BDJson[ListaProductos[0]]);

    const [valueCantidad, setValueCantidad] = useState(1);

    const handleInputChange = (event,newValue) => {
        setValue(newValue);
        if(newValue!= null){
            setTableData(BDJson[newValue]);
            setTableDataBase(BDJson[newValue]);
        }
            
      };

      const CantidadhandleChange = (event) => {
        const newValue = event.target.value;
        setValueCantidad(newValue);
        
        const newtableData = tableDataBase.map((objeto) => ({
            ...objeto, // Mantén los otros campos del objeto inalterados
            cantidad: objeto.cantidad * newValue,
          }));
        
        setTableData(newtableData);

      };

    return(
        <>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Autocomplete
                        value={value}
                        onChange={handleInputChange}                        
                        disablePortal
                        id="combo-box-demo"
                        options={ListaProductos}
                        sx={{ width: 300 }}
                        size="small"
                        renderInput={(params) => <TextField {...params} label="Producto" />}
                        />
                    </Grid>
                    <Grid item>
                        {/* <Button variant="contained" color="primary" endIcon={<SearchIcon />}>
                            Buscar
                        </Button> */}
                    </Grid>
                </Grid>
                <Grid item container justifyContent="flex-start">
                    <TextField
                    label="Cantidad"
                    id="outlined-size-small"
                    value={valueCantidad}
                    type="number"
                    size="small"
                    spacing={2}
                    onChange={CantidadhandleChange}
                    InputProps={{
                        inputProps: {
                          min: 1, // Establece el mínimo en 1
                        },
                      }}
                    />
                </Grid>
            </Grid>        
            
            <h3>Receta: {value}</h3>
            <MuiTable tableData ={tableData}/>
            
        </>
    );
}