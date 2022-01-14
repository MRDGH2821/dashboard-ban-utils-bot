import { mockGuilds } from '../__mocks__/guilds';
import { useNavigate } from 'react-router-dom';
import { GuildContext } from '../utils/contexts/GuildContext';
import { useContext } from 'react';
import { GuildMenuItem } from '../components/GuildMenuItem'
import { Container } from '../utils/styles/MenuPageCSS'

export const MenuPage = () => {
  const navigate = useNavigate();
  const { updateGuildId } = useContext(GuildContext);

  const handleClick = (guildId: string) => {
    updateGuildId(guildId);
    navigate('/categories')
  }
  return (
    <div style={{ padding: '50px 0' }}>
      <Container>
        <h1>Select a Server</h1>
        {mockGuilds.map((guild) => (
          <div onClick={() => handleClick(guild.id)}>
            <GuildMenuItem guild={guild} />
          </div>))}
      </Container>
    </div >
  )
}
