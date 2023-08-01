import { Grid } from "@mui/material";
import { Form ,Button,Card} from "react-bootstrap";
import GetProduct from "./GetProduct";
const Contact = () => {
  return <>
  {/*
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Contact Page</h1>
        <hr />
        
        <GetProduct/>
        
      </Grid>
    </Grid>
*/}
    <Card style={{ margin: ' 3.5rem' ,padding:'1.5rem'}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Order id</Form.Label>
        <Form.Control type="number" placeholder="Order id" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Select disabled>
          <option>select an issue</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    </Card>
  </>;
};

export default Contact;
