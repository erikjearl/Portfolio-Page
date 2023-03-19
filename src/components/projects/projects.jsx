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

function Projects() {
  return (
    <div css={styles} >
        <Paper elevation={5}>
        <h1>Personal Projects</h1>
        <Card>
            <CardHeader title="Project 1" />
            <CardContent>
              <p>test text example test text asdfjaksdfjlaksdfjlaskdjf </p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader title="Project 2" />
            <CardContent>
              <p> more sample text test text example test text </p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader title="Project 3" />
            <CardContent>
              <p> more sample text test text example test text </p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader title="Project 4" />
            <CardContent>
              <p> more sample text test text example test text </p>
            </CardContent>
        </Card>
        </Paper>
    </div>
  );
}

export default Projects;
