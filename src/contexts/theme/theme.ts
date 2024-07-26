'use client';

import { createTheme } from "@mui/material";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    background: {
      default: '#05090F',
      paper: '#EDEDED'
    },
    grey: {
      100: '#B9B9B9',
      200: '#787A7E',
      300: '#5E6167',
      600: '#05090F'
    },
    primary: {
      main: '#FF3900'
    },
    text: {
      primary: '#FFF',
      secondary: '#05090F',
    }
  }
});

theme = createTheme(theme, {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: 16,
      lineHeight: '22px'
    },
    body2: {
      fontSize: 14,
      lineHeight: '18px'
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '18px'
    },
    h1: {
      fontSize: 56,
      fontWeight: 500,
      lineHeight: '62px',

      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '36px',
      }
    },
    h2: {
      fontSize: 30,
      fontWeight: 500,
      lineHeight: '36px',

      [theme.breakpoints.down('md')]: {
        fontSize: 26,
        lineHeight: '34px',
      }
    },
    h3: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '28px',

      [theme.breakpoints.down('md')]: {
        fontSize: 22,
        lineHeight: '24px',
      }
    },
    h4: {
      fontSize: 22,
      fontWeight: 500,
      lineHeight: '28px',

      [theme.breakpoints.down('md')]: {
        fontSize: 20,
        lineHeight: '24px',
      }
    },
    h5: {
      fontSize: 20,
      lineHeight: '28px',

      [theme.breakpoints.down('md')]: {
        fontSize: 16,
        lineHeight: '22px',
      }
    },
    h6: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '22px',

      [theme.breakpoints.down('md')]: {
        fontSize: 16,
        lineHeight: '22px',
      }
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0px 1px 12px 0px #F938008F',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '20px',
          padding: '8px 20px',
          textTransform: 'none',
          transition: 'all 0.3s',
          whiteSpace: 'nowrap',

          '&.MuiButton-sizeSmall': {
            padding: '4px 16px',
          },

          '&.MuiButton-sizeLarge': {
            borderRadius: 40,
            fontSize: 20,
            lineHeight: '24px',
            padding: '12px 24px',
          }
        },
      },
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            '&.Mui-disabled': {
              color: theme.palette.grey[300],
              backgroundColor: '#131821', // TODO: move to the palette
            }
          }
        },
        {
          props: { color: 'secondary', variant: 'contained' },
          style: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: '0px 1px 12px 0px #FFFFFF52',
            color: theme.palette.text.secondary,

            '&:hover': {
              backgroundColor: theme.palette.common.white,
            },
          }
        },
        {
          props: { color: 'secondary', variant: 'outlined' },
          style: {
            backgroundColor: theme.palette.background.default,
            border: '1px solid #5E6167', // TODO: move to the palette
            boxShadow: 'none',
            color: theme.palette.common.white,

            '&:hover': {
              borderColor: theme.palette.primary.main
            },
          }
        },
        {
          props: { variant: 'text' },
          style: {
            boxShadow: 'none',
            color: theme.palette.common.white,
            padding: 0,
            transition: 'color 0.3',

            '&:hover': { color: theme.palette.primary.main }
          }
        }
      ]
    },
    MuiCssBaseline: {
      styleOverrides: {
        '& a': { textDecoration: 'none' }
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthXl': {
            maxWidth: 1360
          }
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 16,
          height: 40,
          lineHeight: '22px',

          '& .MuiOutlinedInput-root ::placeholder': {
            color: theme.palette.grey[100]
          },

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#212630',
            borderRadius: 24,
            transition: 'all 0.3s'
          },
        }
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[100]
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: 8
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '&.nav-menu': { marginLeft: '20px' },
          '& .MuiPaper-root': { backgroundColor: 'transparent' },
        },
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s',
          '&:hover': { color: theme.palette.primary.main }
        }
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: theme.palette.background.default,
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: 20,
            color: theme.palette.common.white
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: { minHeight: 72, padding: '16px' },
        head: { minHeight: 40, padding: '4px 16px' }
      },
    }
  }
});

export { theme };
