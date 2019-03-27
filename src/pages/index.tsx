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
import Carousel from "nuka-carousel";

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
      <Segment>
      <Carousel wrapAround={true} autoplay={true} heightMode={null} initialSlideHeight={600}>
      <img src="/static/banner/img4.jpg" ></img>
      <img src="/static/banner/img5.jpg" ></img>
      <img src="/static/banner/img1.jpg" ></img>
      <img src="/static/banner/img2.jpg" ></img>
      <img src="/static/banner/img3.jpg" ></img>
      <img src="/static/banner/img6.jpg" ></img>
      </Carousel>
      </Segment>

    </Segment>

    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Function with Us</Header>
            <p>
              Our line of beauty products includes:
              <ul>
                <li>f(1) Hair Oil - a soothing mixture of vanilla and lavender</li>
                <li>f(2) Hair Oil - a subtle marriage of vanilla and cedarwood</li>
              </ul>
            </p>
            <p>
              With more scents on the way and seasonal favorites available at a moments notice, f(x) 
              is sure to have the perfect product for you. And if your favorite scent is missing, let us know: 
              we'd be happy to calculate that personalized formula just for you.
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
