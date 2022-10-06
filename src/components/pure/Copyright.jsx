import React from 'react';

//Material UI Component
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <div>
      <Typography variant='body2' color='GrayText' align='center' >
            { 'Copyright (c)' }
            <Link color="inherit" href='https://imaginaformacion.com' >
                Imagina formación
            </Link>
            { ' ' }
            { new Date().getFullYear() }
      </Typography>
    </div>
  )
}
