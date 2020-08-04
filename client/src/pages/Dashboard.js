import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition, Button, Checkbox, Icon, Table, Menu, Segment, Label, Input  } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import DashboardMenuBar from '../components/DashboardMenuBar';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function Dashoard() {
  let activeItem: '';
  let state = { activeItem: 'bio' }

  const handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts }
  } = useQuery(FETCH_POSTS_QUERY);

  return (
      <Grid>
        <Grid.Row className="page-title">
          <h1>Dashoard</h1>
        </Grid.Row>
        <Grid.Column width={4}>
          <Menu vertical>
        <Menu.Item
          name='active'
          active={activeItem === 'inbox'}
          onClick={() => handleItemClick}
        >
          <Label color='teal'>1</Label>
          Drafts
        </Menu.Item>

        <Menu.Item
          name='pubished'
          active={activeItem === 'spam'}
          onClick={() => handleItemClick}
        >
          <Label>51</Label>
          Published
        </Menu.Item>
      </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Table compact celled definition>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Created Date</Table.HeaderCell>
                <Table.HeaderCell>Body</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell collapsing>
                  <Button size='small'>Publish</Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell collapsing>
                  <Button size='small'>Publish</Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell collapsing>
                  <Button size='small'>Publish</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
  );
}

export default Dashoard;
