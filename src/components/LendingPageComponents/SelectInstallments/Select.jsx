import React from 'react';

import './styles.css';

const Select = (props) => {
	var expanded = false;

	const handleClickDropdown = (e) => {
		let icon = document.querySelector('.dropdown-title > i');
		var dropdownMenu = document.querySelector('.dropdown-menuEl');

		if (!expanded) {
			icon.classList.add('active');
			dropdownMenu.classList.add('open');
			expanded = true;
		} else if (expanded || e.target !== dropdownMenu) {
			icon.classList.remove('active');
			dropdownMenu.classList.remove('open');
			expanded = false;
		}
	};

	return (
		<div className="select-container">
			<div className="dropdownEl" data-dropdown>
				<div className="dropdown-title" onClick={handleClickDropdown} data-dropdown-button>
					<span>Escolha o número de parcelas</span>
					<i className="bi bi-caret-down" />
				</div>
				<div className="dropdown-menuEl">
					<ul>
						<li>
							<input type="checkbox" name="check1" id="check1" />
							<label htmlFor="check1">Teste</label>
						</li>
						<li>
							<input type="checkbox" name="check2" id="check2" />
							<label htmlFor="check2">Teste</label>
						</li>
						<li>
							<input type="checkbox" name="check3" id="check3" />
							<label htmlFor="check3">Teste</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Select;
