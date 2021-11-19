import React from 'react';

import InputGroup from '../../InputGroup/InputGroup.jsx';

import './style.css';

const RightSection = () => {
	return (
		<div>
			<div className="form">
				<form>
					<div className="container-inputGroup">
						<InputGroup
							labelId={'label-cpf'}
							labelText={'Digite seu CPF'}
							errorText={'Por favor insira um CPF válido!'}
							inputId={'cpf'}
							inputType={'text'}
						/>
					</div>
					<div className="container-inputGroup">
						<InputGroup
							labelId={'label-emprestimo'}
							labelText={'Valor do empréstimo'}
							errorText={'Insira um valor válido!'}
							inputId={'valor'}
							inputType={'number'}
						/>
					</div>
					<div className="container-inputGroup">
						<InputGroup
							labelId={'teste'}
							labelText={'Prestações'}
							errorText={'Insira um valor válido!'}
							inputId={'valor'}
							inputType={'number'}
						/>
					</div>
					<div className="container-inputGroup">
						<InputGroup
							labelId={'teste2'}
							labelText={'Data a pagar'}
							errorText={'Insira um valor válido!'}
							inputId={'date'}
							inputType={'date'}
						/>
					</div>
					<div className="btn-confirm">
					<button type="button">
						<span>Enviar</span>
						<i className="bi bi-arrow-right" />
					</button>
				</div>
				</form>
			</div>
		</div>
	);
};

export default RightSection;
