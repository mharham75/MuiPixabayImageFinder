import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function Navbar({ searchText }) {

    const[text, setText] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        searchText(text)
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Pixabay Image Finder 
                </Typography>
                
                        
                        <div>
                            <form onSubmit={onSubmit}>
                                {/* <input type='text' placeholder='search image...' onChange={ e => setText(e.target.value)}/> */}
                                {/* <SearchIcon type='submit' onClick={ ()=> console.log('clicked')}/> */}
                                <Search>
                                <SearchIconWrapper>
                                <SearchIcon type='submit' />
                                </SearchIconWrapper>
                                <StyledInputBase
                                onChange={ e => setText(e.target.value)}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                                {/* <Button type="submit" variant='contained'>
                                    Search
                                </Button> */}
                            </form>
                        </div>
                        
            </Toolbar>
        </AppBar>
    </Box>
  )
}
