import React from 'react';

import InputGroup from '../../InputGroup/InputGroup';
import BtnSubmit from '../../BtnSubmit/BtnSubmit';
import Select from '../SelectInstallments/Select.jsx';

import './style.css';

const RightSection = () => {
	return (
		<>
			<div className="form">
				<form>
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
						<Select />
					</div>
					<div className="container-inputGroup">
						<InputGroup
							labelId={'dataPrimeiraParcela'}
							labelText={'Escolha a data da primeira parcela'}
							errorText={'Insira uma data válida!'}
							inputId={'date'}
							inputType={'date'}
						/>
					</div>
					<BtnSubmit 
						link=""
						text="Simular Empréstimo"
					/>			
			</form>
			</div>
		</>
	);
};

export default RightSection;
