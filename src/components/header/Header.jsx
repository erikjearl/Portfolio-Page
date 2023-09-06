import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const pages = ['About', 'Experience', 'Projects', 'Contact'];

function ResponsiveAppBar( { scroll, setDoReset }) {

    const handleClick = (page) => {
        switch (page) {
            case pages[0]:
                scroll(0.25);
                setDoReset(true);
                break;
            case pages[1]:
                scroll(1.3);
                break;
            case pages[2]:
                scroll(2.3);
                break;
            case pages[3]:
                scroll(3.2);
                break;
        }
    }

return (
    <AppBar position="static" 
    sx={{
        backgroundColor: '#353535',
        color: '#fff',
      }}>
        <Toolbar variant='dense'>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'space-around'}}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(event) => handleClick(page)}
                sx={{ m: 0, color: 'white', display: 'block' }}
              >
                {page} {'\u00A0'}
              </Button>
            ))}
          </Box>


        </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;