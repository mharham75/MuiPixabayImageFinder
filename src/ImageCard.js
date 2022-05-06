import { Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';
import { red } from '@mui/material/colors';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Grid from '@mui/material/Grid';


import React from 'react'

export default function ImageCard( { image }) {

    const tags = image.tags.split(',')

  return (
    <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        
        <Card sx={ {maxWidth: 350, ml:70}}>
        <CardHeader sx={{ bgcolor: red[500] }} title= {image.user} />
        <CardMedia>

        </CardMedia>
        <CardContent>
            <img src={image.webformatURL} alt=''/>
            <div>
                {tags.map( tag => (
                    <span key={image.id}>
                        #{tag}
                    </span>
                ))}
            </div>
          
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            {image.likes}
          </IconButton>
          <IconButton aria-label="share">
            <VisibilityIcon />
            {image.views}
          </IconButton>
        </CardActions>
      </Card>
      </Grid>
    </Grid>
  )
}
