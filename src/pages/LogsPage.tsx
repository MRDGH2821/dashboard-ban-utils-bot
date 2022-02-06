import { Title, Container, Page, Select } from '../utils/styles';
export const LogsPage = () => (
  <Page>
    <Container>
      <Title>Update Logs Channel </Title>
      <div>
        <div>
          <label>Current Channel</label>
        </div>
        <Select>
          <option disabled> Please Select a channel </option>
          <option> 123 </option>
          <option selected value='124'>
            {' '}
            #welcome (124)
          </option>
          <option> 345</option>
        </Select>
      </div>
    </Container>
  </Page>
);
