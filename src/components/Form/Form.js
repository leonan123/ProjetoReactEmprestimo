import React from 'react';
import {useForm} from 'react-hook-form';

import FormContainer from './styled';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import field from '../field';
import Select from '../LendingPageComponents/SelectInstallments/Select';

const Form = () => {
    const {register, handleSubmit} = useForm();

    const newLoan = (data) => {
        console.log(data);
    }

    return (<>
        <FormContainer>
            <form onSubmit={
                handleSubmit(newLoan)
            }>
                <div className="container-inputGroup">
                    <field.Text label="Valor do empréstimo" name="valor" type="text" id="valor" register={register}/>
                </div>
                <div className="container-inputGroup">
                    <Select/>
                </div>
                <div className="container-inputGroup">
                    <field.Text label="Data do primeiro pagamento" name="date" type="date" id="date" register={register}/>
                </div>
                <BtnSubmit text="Simular Empréstimo"/>
            </form>
        </FormContainer>

    </>)
}

export default Form;
