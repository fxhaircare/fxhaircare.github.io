import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";
// import Checkout from "../components/checkout"

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">f(x) beauty</Header>
        <Button primary size="huge">Shop Now</Button>
      </Container>
    </Segment>
    {/* <Checkout/> */}
    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Function with Us</Header>
            <p>
              Our line of beauty products is made 
                </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>Natural Inputs</Header>
            <p>
              Sometimes, less is more. Our products are composed of the pure essentials, packed with natural 
              ingredients that hydrate and nourish. 
                </p>
            <Header>Real Outputs</Header>
            <p>
              Wavy, straight, curly, coily - no matter your hair type, we're confident that our line of hair 
              oils will amplify and illuminate your natural beauty. 
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
