'use client';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { Space_Grotesk } from 'next/font/google';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });

import { INavItemLink } from '@/types';

type HeaderDrawerListProps = {
  links: INavItemLink[];
  title?: string;
};

export const HeaderDrawerList = ({ links, title }: HeaderDrawerListProps) => (
  <div>
    {title && (
      <StyledTypography className={spaceGrotesk.className} variant="h4">
        {title}
      </StyledTypography>
    )}

    <StyledList>
      {links.map(({ title }) => (
        <ListItem key={title} disablePadding>
          <ListItemButton>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      ))}
    </StyledList>
  </div>
);

const StyledTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

const StyledList = styled(List)(({ theme }) => ({
  border: 'none',
  borderRadius: 0,
}));
