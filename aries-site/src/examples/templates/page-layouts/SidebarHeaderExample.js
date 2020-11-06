import React, { useContext } from 'react';
import { Header, Box, Main, ResponsiveContext, Sidebar, Text } from 'grommet';

export const SidebarHeaderExample = () => {
  return (
    <AppContainer>
      <AppSidebar />
      <Box flex overflow="auto">
        <Box height={{ min: '100%' }}>
          <Header
            background="background-front"
            fill="horizontal"
            pad="small"
            border="border-weak" // remove in prod, for demo purposes only
            height="xxsmall" // remove in prod, for demo purposes only
          >
            <Text weight="bold" color="text-strong">
              Header
            </Text>
          </Header>
          <Main
            fill={undefined}
            flex={false}
            pad="small"
            border="border-weak" // remove in prod, for demo purposes only
            height="xlarge" // remove in prod, for demo purposes only
          >
            <Text weight="bold" color="text-strong">
              Main
            </Text>
          </Main>
        </Box>
      </Box>
    </AppContainer>
  );
};

const AppSidebar = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Sidebar
      /* Sidebar should switch from column to row orientation
       * when on smaller screens */
      direction={size !== 'small' ? 'column' : 'row'}
      flex={false}
      /* Min height is not needed in mobile contexts */
      height={size !== 'small' ? { min: '100%' } : undefined}
      pad="small"
      border="border-weak" // remove in prod, for demo purposes only
    >
      <Text weight="bold" color="text-strong">
        Sidebar
      </Text>
    </Sidebar>
  );
};

const AppContainer = ({ ...rest }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      direction={size === 'small' ? 'column-reverse' : 'row'}
      fill
      margin="auto"
      width={{ max: 'xxlarge' }}
      {...rest}
    />
  );
};
