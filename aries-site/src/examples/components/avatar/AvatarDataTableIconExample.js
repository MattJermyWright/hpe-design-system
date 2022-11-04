import React from 'react';
import {
  Avatar,
  Box,
  DataTable,
  Image,
  Text,
} from 'grommet';
import company from '../../../data/mockData/company.json';

export const AvatarDataTableIconExample = ({ bestPractice = true }) => {
  const [selected, setSelected] = React.useState([]);

  const data = company.company;

  return (
    <>
      <Box width="medium" height={{ max: 'large' }} overflow="auto">
        <DataTable
          data={data}
          primaryKey="name"
          columns={[
            {
              property: 'name',
              header: 'Name',
              render: datum => (
                <Box justify="start" align="center" gap="small" direction="row">
                  {bestPractice ? (
                    <Avatar
                      src={datum.src}
                      // grommet defines align center which we want to overid
                      align="unset"
                      round="medium"
                      size="small"
                      background={{ color: datum.background, dark: false }}
                    />
                  ) : (
                    <Box align="start">
                      {/* eslint-disable-next-line grommet/image-alt-text */}
                      <Image
                        alignSelf="start"
                        src={datum.src}
                        fit="contain"
                        style={{ height: '24px' }}
                      />
                    </Box>
                  )}
                  <Text>{datum.name}</Text>
                </Box>
              ),
            },
          ]}
          select={selected}
          onSelect={setSelected}
        />
      </Box>
    </>
  );
};

