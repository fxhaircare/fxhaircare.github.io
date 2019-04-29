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
        <a href="https://www.facebook.com/FxHaircare/"><img src="/static/facebook.jpg" alt="f(x) Facebook Page" /></a>
        <a href="https://www.instagram.com/fx_haircare/"><img src="/static/instagram.jpg" alt="f(x) Instagram" /></a>
        <a href="mailto:fx.haircare.seattle@gmail.com"><img src="/static/email.jpg" alt="Email Us" /></a>
      </Container>
      <Segment>
      <Carousel wrapAround={true} autoplay={true} heightMode={null} initialSlideHeight={600}>
      <img src="/static/banner/blossom18.jpg" ></img>
      <img src="/static/banner/img4.jpg" ></img>
      <img src="/static/banner/ericka28.jpg" ></img>
      <img src="/static/banner/img5.jpg" ></img>
      <img src="/static/banner/img2.jpg" ></img>
      <img src="/static/banner/img1.jpg" ></img>
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
            </p>
            <p>
              f(1) Hair Oil - a soothing mixture of vanilla and lavender
            </p>
            <p>
              f(2) Hair Oil - a subtle marriage of vanilla and cedarwood
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

    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              {/* A kind of magic! */}
            </Header>
            <img src="/static/other/jen.jpg" ></img>
            <p></p>
            <p>
            “The oil was great! It smelled really good and it helped hydrate my hair. I don’t know if it made a giant
             impact on the health/strength of my hair, but it works just as well as other oils I have! I would use 
             it again!”
            </p>
            <p>            ––Agape </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              {/* A kind of magic! */}
            </Header>
            <img src="/static/other/jenerick.jpg" ></img>
            <p></p>
            <p>
            “I use Fx hair oil to reduce the frizziness my hair. My hair is damaged from heat and hair dye,
            so I’ve been able to restore the shine my hair once had! The amount of product you get lasts a 
            long time, so you are getting a really great deal. I have the lavender scented one and the scent 
            isn’t overpowering and actually reduces quickly as your hair dries. Overall I recommend this product!”
            </p>
            <p>            ––Allesandra </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              {/* A kind of magic! */}
            </Header>
            <img src="/static/other/ericka.jpg" ></img>
            <p></p>
            <p>
            “I find that it has definitely reduced frizz in my hair, a little bit goes a long way, and the
             smell is really pleasant!”
            </p>
            <p>            ––Ran Ran</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
