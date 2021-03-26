import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import showSnackbar from 'store/actions/snackbar/showSnackbar';
import setClasses from 'store/actions/classes/setClasses';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledConfirmUnsubscribe from './styles';

function ConfirmUnsubscribe() {
  const dispatch = useDispatch();
  const history = useHistory();

  const classId = parseInt(window.location.pathname.substring(7), 10);

  const { classes } = useSelector((state) => state.classes);

  const [loading, setLoading] = useState(false);

  const confirmUnsubscribe = () => {
    dispatch(setClasses(classes.filter((classItem) => classItem.id !== classId)));

    dispatch(showSnackbar('Inscrição cancelada com sucesso', 'success'));
    dispatch(hideGlobalModal());

    setLoading(false);

    history.push('/dashboard');
  };

  return (
    <StyledConfirmUnsubscribe>
      <h3>Tem certeza que deseja sair desta turma?</h3>
      <p className="txt-secondary">
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>

      <div className="form">
        <div className="form-group mb-2">
          <Button theme="danger" fluid onClick={confirmUnsubscribe}>
            {!loading ? 'Cancelar inscrição' : (
              <Loading type="bubbles" className="button-loading" height={32} width={32} fluid />
            )}
          </Button>
        </div>

      </div>
    </StyledConfirmUnsubscribe>
  );
}

export default ConfirmUnsubscribe;
