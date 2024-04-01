// eslint-disable-next-line 
import { Pallete, PalleteColor } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {

    interface Pallete {
        tertiary: PalleteColor;
    }

    interface PalleteColor {
        [key: number]: string;
    }
    
    }