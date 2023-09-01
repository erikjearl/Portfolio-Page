import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent } from '@mui/material';
import './styles.css'

const styles = css`
  display: flex;
  justify-content: space-between;
  padding: 50px;

  & .MuiCard-root {
    margin: 16px;
  }
`;

function Contact() {
  return (
    <div css={styles} >
        <Paper 
          elevation={5}
          style={{
            backgroundColor: '#424242',
            color:'white',
            padding:'15px',
          }}>
          <h1 style={{margin:'0px', paddingLeft:'10px'}}>Contact Me</h1>
          <div style={{ display: 'flex', justifyContent: '' }}>
          <Card class='card'>
            <CardContent class='card-content'>
              <div style={{ fontWeight:'450', fontSize: '23px'}}>
                LinkedIn: <a href="https://www.linkedin.com/in/erikjearl" target="_blank" style={{fontWeight:'600'}}> Erik Earl</a>
              </div>
            </CardContent>
          </Card>
          <Card class='card'>
            <CardContent class='card-content'>
              <div style={{ fontWeight:'450', fontSize: '23px' }}>
                GitHub: <a href="https://github.com/erikjearl" target="_blank" style={{fontWeight:'600'}}> erikjearl</a>
              </div>
            </CardContent>
          </Card>
          <Card class='card'>
            <CardContent class='card-content'>
            <div style={{ fontWeight: '450', fontSize: '23px' }}>
              Email: <a href="mailto:erik.earl@case.edu" target="_blank" style={{fontWeight:'600'}}>erik.earl@case.edu</a>
            </div>
            </CardContent>
          </Card>
          </div>
        </Paper>
    </div>
  );
}

export default Contact;
