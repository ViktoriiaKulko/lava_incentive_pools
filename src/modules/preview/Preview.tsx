'use client';

import { Grid, Stack, styled, Typography } from '@mui/material';
import { Space_Grotesk } from 'next/font/google';

import { Banner } from '@/components';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });

export const Preview = () => (
  <StyledGrid alignItems="center" container spacing={2}>
    <Grid item xs={12} sm={8} md={7} lg={8}>
      <Stack spacing={1}>
        <Typography className={spaceGrotesk.className} variant="h1">
          Lava Incentive Pools
        </Typography>

        <StyledTypography variant="h5">
          Boost infrastructure for your favourite chain, earn rewards.
        </StyledTypography>
      </Stack>
    </Grid>

    <Grid item xs={12} sm={8} md={5} lg={4}>
      <Banner
        button="Become an RPC Provider"
        buttonType="text"
        image="lavuci_bag"
        link="/"
        message="He loves dealing with node runners. "
        title="Meet Lavuci"
      />
    </Grid>
  </StyledGrid>
);

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(6),

  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));
