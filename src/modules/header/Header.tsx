'use client';

import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import {
  Button,
  IconButton,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

import { HeaderDrawer, HeaderDropdown } from '@/modules';
import { navItems } from '@/utils/variables';

export const Header = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <StyledHeader>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Image
            alt="Logo"
            height={isMobile ? 32 : 34}
            src="/images/logo.svg"
            width={isMobile ? 88 : 108}
          />

          {!isTablet && (
            <>
              <Stack direction="row">
                <HeaderDropdown title="Rollup Developers" />
                {navItems.map((item) => (
                  <HeaderDropdown key={item.title} {...item} />
                ))}
              </Stack>

              <Button color="secondary" size="large" variant="contained">
                Read Docs
              </Button>
            </>
          )}

          {isTablet && (
            <StyledMenuButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </StyledMenuButton>
          )}
        </Stack>
      </StyledHeader>

      <HeaderDrawer open={openDrawer} closeDrawer={handleDrawerClose} />
    </>
  );
};

const StyledHeader = styled('header')({ padding: '20px 0' });

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  border: '1px solid #212630', // TODO: move to the palette
  borderRadius: 18,
  color: theme.palette.common.white,
  height: 36,
  transition: 'border-color 0.3s',
  width: 56,

  '&:hover': { borderColor: theme.palette.common.white },
  '& .MuiSvgIcon-root': { fontSize: 16 },
}));
