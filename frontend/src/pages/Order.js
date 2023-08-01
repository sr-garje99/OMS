import { Grid } from "@mui/material";
import {Card,Table} from 'react-bootstrap';

const Order = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Order Page</h1>
        <hr />
        
      </Grid>
    </Grid>
    <Card style={{ margin: ' 3.5rem' }}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <button type="button" class="btn btn-outline-primary">
					      Edit
				    </button>
          </td>
          

        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>
            <button type="button" class="btn btn-outline-primary">
					      Edit
				    </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>
            <button type="button" class="btn btn-outline-primary">
					      Edit
				    </button>
          </td>

        </tr>
      </tbody>
    </Table>
    </Card>
  </>;
};

export default Order;
