import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMaterials } from 'api/materials';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import EmptyMessage from 'components/EmptyMessage';
import MaterialCard from 'components/MaterialCard';
import Loading from 'components/Loading';

import StyledMaterials from './styles';

function Materials({ match }) {
  const dispatch = useDispatch();

  const [materialList, setMaterialList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMaterials(match.params.id)
      .then((response) => {
        setMaterialList(response.data);
        console.log(response.data);
      })
      .catch(() => {
        // const [error] = response.data;

        // if (error.field === 'classroom' && error.validation === 'not found') {
        //   dispatch(showSnackbar('Este E-mail já está sendo utilizado', 'danger'));
        // }

        dispatch(showSnackbar('Ocorreu um erro ao carregar a lista de materiais. Tente novamente mais tarde', 'danger'));
        setMaterialList([]);
      }).finally(() => {
        setLoading(false);
      });
  }, [match.params.id, dispatch]);

  return (
    <StyledMaterials>
      {loading && (
        <Loading type="bubbles" height={96} width={96} fluid color="#8CC8F3" />
      )}

      {!loading && (
        <>
          {materialList.map((material) => (
            <MaterialCard
              key={material.id}
              owner={material.user.name}
              title={material.title}
              description={material.description}
              materialList={material.contentAttachments}
              createdAt={material.created_at}
            />
          ))}
        </>
      )}

      {!loading && materialList.length === 0 && (
        <EmptyMessage
          title="Nenhum material publicado"
          description="Aguarde até a publicação de um novo material"
        />
      )}
    </StyledMaterials>
  );
}

export default Materials;
