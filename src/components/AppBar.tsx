import { AppBarStyle } from '../utils/styles';
import { useContext } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';

export const AppBar = () => {
  const { guildId } = useContext(GuildContext);
  return (
    <div>
      <AppBarStyle>
        <h1 style={{ fontWeight: 'normal', fontSize: '20px' }}>Configuring</h1>
        <img
          src="https://www.gubbies.dk/wp-content/uploads/2016/03/icon7-1.png"
          height={55}
          width={55}
          style={{
            borderRadius: '50%'
          }}
          alt="logo" />
      </AppBarStyle>
    </div>
  )
}
