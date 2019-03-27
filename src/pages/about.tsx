import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        {/* <Header as="h2">
          <Header.Content>
            f(x) beauty
          </Header.Content>
        </Header> */}
      </Segment>
    
      <img src="/static/Succulents_Light_1_600x.jpg" ></img>
      <img src="/static/Andrea_Hair_600x.jpg"></img>
      <img src="/static/Succulents_Dark_600x.jpg"></img>

      <Segment vertical>
        <p>
          <i>"Natural inputs. Real outputs. Built to function for you."</i>
        </p>
        <p>
          F(X) BEAUTY is the newest project coming from UW Alpha Kappa Psi's Innovate Committee. Backed by 8 students 
          in fields of study ranging from
          Public Health and Marketing to Computer Science and Design, f(x) is dedicated to creating a haircare 
          experience that works for everyone, no matter their hair type, gender, or profession.
        </p>
        <p>
          That's why, since the summer of 2018, our team has spent weeks developing a line of hair oils with three key
          principles in mind: affordability, sustainability, and usability. 
        </p>
        <p>
          <strong>Affordability</strong>: As students, we understand the need for high quality products priced at an 
          affordable cost. 
          Available to you at price points much lower than that of our competitors', f(x) products nourish and 
          revitalize your hair without breaking the bank. 
        </p>
        <p>
          <strong>Sustainability</strong>: To us, affordable doesn't mean artificial. All f(x) hair oils are made with
           natural ingredients. Blending
          together a combination of fresh scents, earth-friendly oils, and natural preservatives, it's no wonder our
           beauty essentials boast both
          the shortest list of ingredients and the highest impact on the market. 
        </p>
        <p>
          <strong>Usability</strong>: f(x) products are made for everyone, regardless of identity. Our hair oils are
           compatible with
          any and every hair type (beards included!) and delivered to you in convenient dropper bottles
          perfect for use at home or on-the-go. 
        </p>
        <p>
          As a relatively new brand, f(x) is just getting started. Thank you for your support, and we hope you enjoy
           our line of products as much as we enjoyed making them.
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
