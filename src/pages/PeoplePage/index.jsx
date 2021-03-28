import React from 'react';

import PeopleSection from 'components/PeopleSection';

import StyledPeoplePage from './styles';

function PeoplePage() {
  const peopleList = [
    {
      id: 1,
      name: 'Fulano de tal',
    },
    {
      id: 2,
      name: 'Sicrano de tal',
    },
    {
      id: 3,
      name: 'Beltrano de tal',
    },
  ];

  return (
    <StyledPeoplePage>
      {peopleList.length > 0 && (
        <PeopleSection
          title="Professores"
          peopleList={peopleList}
          quantity={peopleList.length}
          quantityLabel="professores"
        />
      )}

      {peopleList.length > 0 && (
        <PeopleSection
          title="Alunos"
          peopleList={peopleList}
          quantity={peopleList.length}
          quantityLabel="alunos"
        />
      )}
    </StyledPeoplePage>
  );
}

export default PeoplePage;
