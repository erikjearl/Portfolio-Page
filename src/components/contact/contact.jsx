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
            <CardHeader title="Card 1" />
            <CardContent>
            <p>Sample text for Card 1</p>
            </CardContent>
        </Card>
        </Paper>
    </div>
  );
}

export default Contact;
