import { useContext } from 'react'
import { GuildContext } from '../utils/contexts/GuildContext'
import { Container, Title, Flex, TextButton, Grid, Page } from '../utils/styles'
import { IoSettingsOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const CategoryPage = () => {
  const { guildId } = useContext(GuildContext);
  const navigate = useNavigate();
  return (
    <Page>
      <Container>
        <div>
          <Flex alignItems="center" justifyContent="space-between">
            <Title>Basic Configuration</Title>
            <IoSettingsOutline size={40} />
          </Flex>
          <Grid>
            <TextButton onClick={() => navigate('/dashboard/setlogs')}>
              Set Logs Channel
            </TextButton>
            {/*<IoNewspaperOutline size={40} />*/}
          </Grid>
          <div style={{ borderTop: '1px solid #ffffff1b', marginTop: '30px' }}>
          </div>
        </div>
      </Container>
    </Page>
  )
};
