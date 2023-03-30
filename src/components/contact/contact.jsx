import React from 'react';
import { css } from '@emotion/react';
import { Paper, Card, CardHeader, CardContent } from '@mui/material';

const styles = css`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  & .MuiCard-root {
    margin: 16px;
  }
`;

function Contact() {
  return (
    <div css={styles} >
        <Paper elevation={5}>
        <h1>Contact Me</h1>
        <Card>
            <CardHeader title="Git Hub" />
            <CardContent>
            <a href="https://github.com/erikjearl" target="_blank"> Github</a>
            <a href="https://www.linkedin.com/in/erikjearl" target="_blank"> LinkedIn </a>
            </CardContent>
        </Card>
        <Card>
            <CardHeader title="More Contact Info" />
            <CardContent>
            <p>add stuff</p>
            </CardContent>
        </Card>
        </Paper>
    </div>
  );
}

export default Contact;
