import { CopyAll } from '@mui/icons-material';
import { Row, Col } from 'react-bootstrap';

function Copyright() {
	return (
		<Copyright>
			<Row style={{ backgroundColor: 'warning' }}>
				<Col style={{ textcolor: 'warning' }} className="text-center">
					{'&#169 Persistent Ltd.'}
					&#169 Persistent Ltd.
				</Col>
			</Row>
			<footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
				<div class="container text-center">
					<small>Copyright &copy; Your Website</small>
				</div>
			</footer>
		</Copyright>
	);
}

export default Copyright;
