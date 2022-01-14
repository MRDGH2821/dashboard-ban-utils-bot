import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import { DiscordLoginButton, SupportButton, HomePageStyle } from '../utils/styles'

export const HomePage = () => (
  <HomePageStyle>
    <div></div>
    <div>
      <DiscordLoginButton>
        <FaDiscord size={45} />
        <p style={{ fontSize: '20px' }}>Login with Discord</p>
      </DiscordLoginButton>
      <SupportButton>
        <FaQuestionCircle size={45} />
        <p style={{ fontSize: '20px' }}>Support server</p>
      </SupportButton>
    </div>
    <div style={{
      display: 'flex',
      width: '450px',
      justifyContent: 'space-between',

    }}>
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
      <span>Contact Us</span>
    </div>
  </HomePageStyle>
)
