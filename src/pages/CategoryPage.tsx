import { useContext } from 'react'
import { GuildContext } from '../utils/contexts/GuildContext'
import { Container } from '../utils/styles'
export const CategoryPage = () => {
  const { guildId } = useContext(GuildContext);
  return (
    <div>
      <Container>
        CategoryPage {guildId}
      </Container>
    </div>
  )
};
