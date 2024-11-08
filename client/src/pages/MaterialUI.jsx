import * as React from 'react';
import ButtonUsage from '../components/BotonMUI';
import BasicTextFields from '../components/TextFieldMUI';
import { Box, CircularProgress } from '@mui/material';
import BasicCard from '../components/EjemploCard';
import SimpleDialogDemo from '../components/DialogMUI';

export default function MaterialUIPage() {
    const [texto, setTexto] = React.useState('')
    function changeValue(data){
        setTexto(data)
    }
  return <Box lg={{ display: 'flex' }}>
    {texto == '' && <CircularProgress color="secondary" size="3rem"/>}
    {texto != '' && <h1>{texto}</h1>}
    <br></br>
    <ButtonUsage texto="Boton 1" cambiarTexto={changeValue}></ButtonUsage>
    <ButtonUsage texto="Boton 2" cambiarTexto={changeValue}></ButtonUsage>
    <ButtonUsage texto="Boton 3" cambiarTexto={changeValue}></ButtonUsage>
    <ButtonUsage texto="Boton 4" cambiarTexto={changeValue}></ButtonUsage>
    <ButtonUsage texto="Boton 5" cambiarTexto={changeValue}></ButtonUsage>
    <ButtonUsage texto="Boton 6" cambiarTexto={changeValue}></ButtonUsage>
    <ButtonUsage texto="Boton 7" cambiarTexto={changeValue}></ButtonUsage>
    <br></br>
    <BasicTextFields></BasicTextFields>
    <br></br>
    <BasicCard></BasicCard>
    <br></br>
    <SimpleDialogDemo></SimpleDialogDemo>
    </Box>
}
