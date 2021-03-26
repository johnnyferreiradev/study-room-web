import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import showSnackbar from 'store/actions/snackbar/showSnackbar';
import setClasses from 'store/actions/classes/setClasses';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledJoinAClass from './styles';

function JoinAClass() {
  const dispatch = useDispatch();

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

    dispatch(setClasses([{
      id: 2,
      title: 'Turma teste 2',
      description: 'Descrição da turma teste 2',
    }, ...classes]));

    dispatch(showSnackbar('Turma adicionada com sucesso', 'success'));
    dispatch(hideGlobalModal());

    setLoading(false);
  };

  return (
    <StyledJoinAClass>
      <h3>Nova turma</h3>
      <p className="txt-secondary">
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
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
