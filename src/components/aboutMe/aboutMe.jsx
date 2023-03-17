import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';

function AboutMe() {
  return (
    <Card sx={{ 
      borderRadius: 5, 
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.)', 
      backgroundImage: 'linear-gradient(to bottom right, #a0603a, #c28962, #e0b18b)',
      width:'90vw',
      height:'40vh',
    }}>
      <CardHeader 
        title="About Me" 
        titleTypographyProps={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          color: '#333', 
          borderBottom: '3px solid #333',
        }}
      />
      <CardContent>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac augue nisl. Aenean consectetur urna nulla, at varius ipsum hendrerit ac. Donec sagittis lectus a sapien dictum tincidunt. In hac habitasse platea dictumst. Nullam eget vestibulum nisi. Integer ut semper nibh. Integer ac dolor sed nunc volutpat suscipit. Nam at risus non lacus faucibus convallis vel a justo. Sed id odio urna. Pellentesque vitae aliquet ex.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
