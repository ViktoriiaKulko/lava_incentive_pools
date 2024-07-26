'use client';

import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Button, Stack, styled, Typography } from '@mui/material';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });

type BannerProps = {
  button: string;
  link: string;
  message: string;
  title: string;
  buttonType?: 'contained' | 'text';
  image?: 'lavuci' | 'lavuci_bag';
};

export const Banner = ({
  button,
  buttonType = 'contained',
  image = 'lavuci',
  link,
  message,
  title,
}: BannerProps) => {
  return (
    <StyledBanner className={image}>
      <StyledStack alignItems="flex-start" className={image} spacing={2}>
        <div>
          <Typography className={spaceGrotesk.className} variant="h5">
            {title}
          </Typography>

          <StyledTypography>{message}</StyledTypography>
        </div>

        <Link href={link}>
          <Button
            color="secondary"
            endIcon={buttonType === 'text' ? <NorthEastIcon /> : undefined}
            variant={buttonType}
          >
            {button}
          </Button>
        </Link>
      </StyledStack>

      <StyledImage className={image}>
        <Image alt="Lavici" fill src={`/images/${image}.png`} />
      </StyledImage>
    </StyledBanner>
  );
};

const StyledBanner = styled('div')(({ theme }) => ({
  background: 'linear-gradient(0deg, #1A232F 0%, #0C121A 46.5%)',
  backgroundImage: 'url("/images/grid_bg.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '1px solid #212630',
  borderRadius: 20,
  overflow: 'hidden',
  padding: theme.spacing(3),
  position: 'relative',

  '&.lavuci_bag': { maxWidth: 446 },

  '&.lavuci': { maxWidth: 674 },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),

    '&.lavuci_bag': { maxWidth: 228 },
    '&.lavuci': { maxWidth: 228 },
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  width: 'calc(100% - 150px)',

  [theme.breakpoints.down('sm')]: {
    '&.lavuci_bag': { width: 'calc(100% - 88px)' },

    '&.lavuci': { width: '100%' },
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  width: 150,

  '&.lavuci_bag': { bottom: 8, top: -24 },

  '&.lavuci': { bottom: 0, top: 0 },

  [theme.breakpoints.down('sm')]: {
    width: 88,

    '&.lavuci_bag': { bottom: 48, top: 0 },

    '&.lavuci': { bottom: -24, top: 112 },
  },
}));
