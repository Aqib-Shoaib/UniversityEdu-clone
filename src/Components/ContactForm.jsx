import styled from "styled-components";

const H2 = styled.h2`
  color: #32404d;
  font-weight: 600;
  font-size: 27px;
  line-height: 32px;
`;
const Input = styled.input`
  color: #212529;
  font-size: 13px;
  line-hieght: 20px;
  border: 1px solid #ccc;
  padding: 0.75rem;
  border-radius: 5px;
`;
const Btn = styled.button`
  font-size: 1.25rem;
  line-hieght: 25px;
  color: rgb(0, 122, 92);
  cursor: pointer;
  transition: all 0.3s linear;
  padding: 0.5rem 1rem;
  background: #fff;
  border: 1px solid rgb(0, 122, 92);
  border-radius: 5px;

  &:hover {
    background: rgb(0, 122, 92);
    color: #fff;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  padding: 1rem;
  gap: 1rem;
  .last {
    grid-column: span 2;
  }
`;
const Textarea = styled.textarea`
  border-radius: 5px;
  color: #212529;
  font-size: 13px;
  line-hieght: 20px;
  border: 1px solid #ccc;
  grid-column: span 2;
  padding: 0.75rem;
`;

const H3 = styled.h3`
  color: #2a2a2a;
  font-weight: 600;
  margin: 0.5rem 0.1rem;
  font-size: 1.75rem;
  line-height: 19px;
`;

const P = styled.p`
  color: #8a8a8a;
  font-size: 1.25rem;
  line-height: 26px;
  margin-bottom: 1rem;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 60% 35%;
    padding: 2rem;
    gap: 1.5rem;
    align-items: center;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
`;

function ContactForm() {
  return (
    <Contact>
      <H2>Get in Touch</H2>
      <Grid>
        <div>
          <Form
            action='contact_process.php'
            method='post'
            noValidate='novalidate'
          >
            <Textarea
              cols='30'
              rows='9'
              onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'Enter Message'"
              placeholder=' Enter Message'
            ></Textarea>
            <Input
              type='text'
              onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'Enter your name'"
              placeholder='Enter your name'
            />
            <Input
              type='email'
              onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'Enter email address'"
              placeholder='Email'
            />
            <Input
              type='text'
              className='last'
              onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'Enter Subject'"
              placeholder='Enter Subject'
            />
            <div>
              <Btn type='submit'>Send</Btn>
            </div>
          </Form>
        </div>
        <div>
          <div>
            <span>
              <i className='ti-home'></i>
            </span>
            <div>
              <H3>Buttonwood, California.</H3>
              <P>Rosemead, CA 91770</P>
            </div>
          </div>
          <div>
            <span className='contact-info__icon'>
              <i className='ti-tablet'></i>
            </span>
            <div>
              <H3>+1 253 565 2365</H3>
              <P>Mon to Fri 9am to 6pm</P>
            </div>
          </div>
          <div>
            <span className='contact-info__icon'>
              <i className='ti-email'></i>
            </span>
            <div>
              <H3>support@colorlib.com</H3>
              <P>Send us your query anytime!</P>
            </div>
          </div>
        </div>
      </Grid>
    </Contact>
  );
}

export default ContactForm;
