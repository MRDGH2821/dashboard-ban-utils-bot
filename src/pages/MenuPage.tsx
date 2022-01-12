import { mockGuilds } from '../__mocks__/guilds';
import { useNavigate } from 'react-router-dom';
import { GuildContext } from '../utils/contexts/GuildContext';
import { useContext } from 'react';

export const MenuPage = () => {
  const navigate = useNavigate();
  const { updateGuildId } = useContext(GuildContext);
  return (
    <div>
      <ul>
        {mockGuilds.map((guild) => (
          <li
            onClick={() => {
              updateGuildId(guild.id);
              navigate('/categories')
            }}>
            {guild.name}</li>
        ))}
      </ul>
    </div >
  )
}

        /*
<div>
          debug before
<ul>
            {mockGuilds.map((guild) => {
              <li
                onClick={() => {
                  updateGuildId(guild.id);
                  navigate('/categories');
                }}
              >
                {guild.name}</li>
            })}
          </ul>
          debug after
</div>*/
