import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { subscribe } from 'api/studentClasses';

import showSnackbar from 'store/actions/snackbar/showSnackbar';
import setClasses from 'store/actions/classes/setClasses';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledJoinAClass from './styles';

function JoinAClass() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { classes } = useSelector((state) => state.classes);

  const [classCode, setClassCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClassCodeField = ({ target }) => {
    setClassCode(target.value);
  };

  const joinAClass = () => {
    if (!classCode) {
      dispatch(showSnackbar('Você precisa preencher todos os campos', 'danger'));
      return;
    }

    setLoading(true);

    subscribe(classCode)
      .then((response) => {
        dispatch(setClasses([response.data, ...classes]));

        dispatch(showSnackbar('Turma adicionada com sucesso', 'success'));
        dispatch(hideGlobalModal());
        history.push('/dashboard');
      })
      .catch(({ response }) => {
        const [error] = response.data;

        if (error.field === 'classroom' && error.validation === 'participate') {
          dispatch(showSnackbar('Você já faz parte dessa turma', 'danger'));
        } else if (error.field === 'code' && error.validation === 'exists') {
          dispatch(showSnackbar('Turma não encontrada', 'danger'));
        } else {
          dispatch(showSnackbar('Ocorreu um erro inesperado ao participar da turma', 'danger'));
        }
      }).finally(() => {
        setLoading(false);
      });
  };

  return (
    <StyledJoinAClass>
      <h3>Nova turma</h3>
      <p className="txt-secondary">
        Insira o código da turma para matricular-se
      </p>

      <div className="form">
        <div className="form-group mb-2">
          <label htmlFor="class-code-field">
            <p>Código da Turma</p>
            <input
              type="text"
              name="classCode"
              value={classCode}
              placeholder="Digite o código da turma"
              id="class-code-field"
              onChange={handleClassCodeField}
            />
          </label>
        </div>

        <div className="form-group mb-2">
          <Button theme="primary" fluid onClick={joinAClass}>
            {!loading ? 'Entrar' : (
              <Loading type="bubbles" className="button-loading" height={32} width={32} fluid />
            )}
          </Button>
        </div>

      </div>
    </StyledJoinAClass>
  );
}

export default JoinAClass;
