import React from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import './Home.css'

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"  className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={2}>
                        </Box>
                        <Button variant="outlined" className='button'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='posts'>
                </Grid>
            </Grid>

            <Grid container style={{ marginTop: "2px", marginBottom: "2px" }}>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
