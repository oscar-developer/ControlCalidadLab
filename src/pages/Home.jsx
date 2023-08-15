import { TextField,  Button, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from '@mui/icons-material/Search';
const ListaProductos=[
    {label:'Alimento Preparado ICMSF'},
    {label:'Alimento Preparado AOAC'},
    {label:'Harina AOAC'},
    {label:'Harinas ICMS'},
    {label:'Hojuelas AOAC'},
    {label:'Hojuelas ICMSF'},
    {label:'Café ICMSF'},
    {label:'Chocolates ICMSF'},
    {label:'Yogurt ICMS'},
    {label:'Leche ICMSF'},
    {label:'Quesos ICMSF'},
    {label:'Agua Potable'},
    {label:'Agua Manante'},
    {label:'Agua Residual'},
    {label:'Agua Superficial'},
]


export default function Home(){
    return(
        <>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={ListaProductos}
                        sx={{ width: 300 }}
                        size="small"
                        renderInput={(params) => <TextField {...params} label="Producto" />}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" endIcon={<SearchIcon />}>
                            Buscar
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="flex-start">
                    <TextField
                    label="Cantidad"
                    id="outlined-size-small"
                    defaultValue="1"
                    size="small"
                    spacing={2}
                    />
                </Grid>
            </Grid>        
            
        
            <h1>Listar Receta</h1>
            
        </>
    );
}