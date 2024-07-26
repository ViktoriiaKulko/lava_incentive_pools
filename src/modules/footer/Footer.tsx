'use client';

import { Grid, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { FooterCategory, FooterSocial } from '@/modules';
import { navItems } from '@/utils/variables';

export const Footer = () => (
  <footer>
    <Stack spacing={{ xs: 4, sm: 8 }}>
      <Stack spacing={3}>
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8} md={3}>
              <Stack spacing={3}>
                <Image
                  alt="Logo"
                  height={34}
                  src="/images/logo.svg"
                  width={108}
                />

                <StyledTypography>
                  Lava is a modular protocol where providers can quickly add
                  support for any API and RPC. The multi-chain experience never
                  felt so easy.
                </StyledTypography>

                <Stack direction="row" spacing={2}>
                  <FooterSocial icon="discord" link="/" />
                  <FooterSocial icon="github" link="/" />
                  <FooterSocial icon="uxwing" link="/" />
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={9}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <FooterCategory
                  links={[{ link: '/', title: 'Rollup Developers' }]}
                />
                {navItems.map((item) => (
                  <FooterCategory key={item.title} {...item} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </div>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          spacing={2}
        >
          <StyledTypography variant="body2">
            © Lava Foundation., 2024. All Right Reserved.
          </StyledTypography>

          <Stack direction="row" spacing={8}>
            <Link href="/">
              <StyledLink variant="body2">Terms Of Service</StyledLink>
            </Link>

            <Link href="/" passHref>
              <StyledLink variant="body2">Privacy Policy</StyledLink>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>

    <StyledTagline />
  </footer>
);

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
}));

const StyledLink = styled(StyledTypography)(({ theme }) => ({
  transition: 'color 0.3s',
  '&:hover': { color: theme.palette.common.white },
}));

const StyledTagline = styled('div')(({ theme }) => ({
  backgroundImage: 'url("/images/tagline.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  margin: theme.spacing(4, 0),
  height: 83,
  width: '100%',

  [theme.breakpoints.down('md')]: {
    height: 62,
    margin: theme.spacing(2, 0),
  },
}));
