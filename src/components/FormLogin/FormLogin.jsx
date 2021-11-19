import { Link } from 'react-router-dom';

import InputGroup from '../InputGroup/InputGroup';
import './style.css';

const FormLogin = (props) => {
	return (
		<div className="container-form">
			<div className="title-form">
				<h2>{props.text}</h2>
			</div>
			<form>
				<InputGroup
					labelId={'label-CPF'}
					labelText={'Digite seu CPF'}
					labelClass={'label-input'}
					errorText={'Por favor insira um CPF válido!'}
					inputId={'cpf'}
				/>
				<div className="btn-confirm">
					<Link class="link" to="/lending-simulator">
						<button type="button">
							<span>Continuar</span>
							<i className="bi bi-arrow-right" />
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default FormLogin;
