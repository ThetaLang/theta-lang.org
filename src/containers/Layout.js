import React from 'react';
import { Grid, Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import thetaLogo from '../assets/theta-logo.png'; // Path to the Theta logo image

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/* Theta logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={thetaLogo} alt="Theta Logo" style={{ height: 40 }} /> 
            </Link>
          </Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" href='https://docs.theta-lang.org'>Docs</Button>
          <Button color='inherit' href='https://dev.theta-lang.org'>Contribute</Button>
          <Button color="inherit" href='https://discord.gg/mzWgbhGQ6C'>Discord</Button>
          <Button color="inherit" href="https://github.com/ThetaLang/Theta">GitHub</Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      {children}

      {/* Footer */}
      <Box component="footer" sx={{ py: 4, bgcolor: '#44475a', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2" gutterBottom>
          © 2024 Theta Language. Built with ♥ for the WebAssembly ecosystem.
        </Typography>

        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button href="https://github.com/ThetaLang/Theta" color="inherit" underline="hover">
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button href="https://discord.gg/mzWgbhGQ6C" color="inherit" underline="hover">
              Discord
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
