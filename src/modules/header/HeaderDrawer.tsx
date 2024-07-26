'use client';

import { Box, Drawer, IconButton, Stack, styled } from '@mui/material';

import { navItems } from '@/utils/variables';
import { HeaderDrawerList } from './HeaderDrawerList';
import { Close } from '@mui/icons-material';

type HeaderDrawerProps = {
  open: boolean;
  closeDrawer: () => void;
};

export const HeaderDrawer = ({ open, closeDrawer }: HeaderDrawerProps) => {
  const DrawerList = (
    <StyledBox sx={{ width: 250 }} role="presentation">
      <StyledIconButton onClick={closeDrawer}>
        <Close />
      </StyledIconButton>

      <Stack spacing={2}>
        <HeaderDrawerList links={[{ link: '/', title: 'Rollup Developers' }]} />

        {navItems.map((item) => (
          <HeaderDrawerList key={item.title} {...item} />
        ))}
      </Stack>
    </StyledBox>
  );

  return (
    <Drawer anchor="right" open={open}>
      {DrawerList}
    </Drawer>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  display: 'flex',
  marginLeft: 'auto',
}));
