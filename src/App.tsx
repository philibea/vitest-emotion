import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Stack, Text } from '@ultraviolet/ui';
import { Badge } from './components/Badge';

const Container = styled.div`
  color: ${({ theme }) => {
    return theme.colors.primary.text;
  }};
`;

export const App = () => {
  const theme = useTheme();
  console.debug('App space', theme.space['2']);

  return (
    <Container>
      <Stack gap={2}>
        <Text as="h1" sentiment="primary" variant="body">
          <h1>Theming test</h1>
          <Badge>Badge</Badge>
        </Text>
      </Stack>
    </Container>
  );
};
