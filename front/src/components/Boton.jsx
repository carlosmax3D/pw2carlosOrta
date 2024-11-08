import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage(props) {
  return <Button onClick={props.funcion} variant={props.variant}>{props.text}</Button>;
}