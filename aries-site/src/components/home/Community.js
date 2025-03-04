import React, { useContext } from 'react';

import {
  Box,
  Button,
  Grid,
  Heading,
  PageContent,
  Paragraph,
  ResponsiveContext,
  Text,
} from 'grommet';
import { ChatOption, Github, Info, Map, Slack } from 'grommet-icons';

const LinkButton = props => (
  <Button
    target="_blank"
    rel="noreferrer noopener"
    alignSelf="start"
    {...props}
  />
);

const SlackOption = () => (
  <Box gap="medium">
    <Slack size="large" color="text-strong" />
    <Box>
      <Heading level={3} margin="none" size="small">
        Slack
      </Heading>
      <Text>Specific questions? Want feedback or advice?</Text>
    </Box>
    <LinkButton
      icon={<ChatOption />}
      label="Join us on Slack"
      href="https://slack-invite.grommet.io/"
      primary
    />
  </Box>
);

const Roadmap = () => (
  <Box gap="medium">
    <Map size="large" color="text-strong" />
    <Box>
      <Heading level={3} margin="none" size="small">
        Roadmap
      </Heading>
      <Text>Stay in the loop and checkout what's next!</Text>
    </Box>
    <LinkButton
      label="View roadmap"
      href="https://github.com/orgs/grommet/projects/11?fullscreen=true"
      secondary
    />
  </Box>
);

const Backlog = () => (
  <Box gap="medium">
    <Github size="large" color="text-strong" />
    <Box>
      <Heading level={3} margin="none" size="small">
        Backlog
      </Heading>
      <Text>Eager to know what's marinating in the back?</Text>
    </Box>
    <LinkButton
      label="View backlog"
      href="https://github.com/orgs/grommet/projects/10"
      secondary
    />
  </Box>
);

const Feedback = () => (
  <Box gap="medium">
    <Info size="large" color="text-strong" />
    <Box>
      <Heading level={3} margin="none" size="small">
        Feedback
      </Heading>
      <Text>Let us know your feedback!</Text>
    </Box>
    <LinkButton label="Provide feedback" href="/feedback" secondary />
  </Box>
);

export const Community = ({ ...rest }) => {
  const size = useContext(ResponsiveContext);
  return (
    <PageContent background={{ fill: 'horizontal', color: 'background-front' }}>
      <Box
        fill="horizontal"
        pad={{
          vertical: !['xsmall', 'small'].includes(size) ? 'xlarge' : 'large',
        }}
        gap="large"
        {...rest}
      >
        <Box width="xlarge">
          <Heading margin="none" level={2} size="large">
            Community
          </Heading>
          <Paragraph size="xlarge" fill>
            The HPE Design System is an open-source framework for designers and
            developers. We welcome feedback, ideas and appreciate your
            suggestions.
          </Paragraph>
        </Box>
        <Grid
          columns="medium"
          rows={[['auto', 'full']]}
          gap={{ row: 'large', column: 'small' }}
          fill
        >
          <SlackOption />
          <Roadmap />
          <Backlog />
          <Feedback />
        </Grid>
      </Box>
    </PageContent>
  );
};
