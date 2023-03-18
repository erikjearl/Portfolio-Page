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

function Experience() {
  return (
    <div css={styles} >
        <Paper elevation={5}>
        <h1>Professional Experience</h1>
        <Card>
            <CardHeader title="Qualcomm" />
            <CardContent>
                <p>Sample text for Card 1</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader title="The Lubrizol Corportion" />
            <CardContent>
                <p>Sample text for Card 2</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader title="Sears Think[box]" />
            <CardContent>
                <p>Sample text for Card 2</p>
            </CardContent>
        </Card>
        </Paper>
    </div>
  );
}

export default Experience;
