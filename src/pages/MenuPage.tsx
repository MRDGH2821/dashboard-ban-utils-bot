import { mockGuilds } from '../__mocks__/guilds';
import { useNavigate } from 'react-router-dom';
import { GuildContext } from '../utils/contexts/GuildContext';
import { useContext } from 'react';
import { GuildMenuItem } from '../components/GuildMenuItem'
import { Container, Page } from '../utils/styles'

export const MenuPage = () => {
  const navigate = useNavigate();
  const { updateGuildId } = useContext(GuildContext);

  const handleClick = (guildId: string) => {
    updateGuildId(guildId);
    navigate('/dashboard/categories')
  }
  return (
    <Page>
      <Container>
        <h1>Select a Server</h1>
        {mockGuilds.map((guild) => (
          <div onClick={() => handleClick(guild.id)}>
            <GuildMenuItem guild={guild} />
          </div>))}
      </Container>
    </Page >
  )
}
