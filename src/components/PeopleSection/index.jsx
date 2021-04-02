import React from 'react';

import Card from 'components/Card';
import People from 'components/People';

import StyledPeopleSection from './styles';

function PeopleSection({
  title,
  peopleList,
  quantity,
  quantityLabel,
}) {
  console.log(peopleList);

  return (
    <StyledPeopleSection>
      <div className="people-section-header">
        <h3>{title}</h3>
        {quantity >= 2 && (
          <h3>
            {quantity}
            <span> </span>
            {quantityLabel}
          </h3>
        )}
      </div>
      <Card className="card">
        {peopleList.map((people) => (
          <People key={people.id} name={people.name} avatar={people.avatar_url} />
        ))}
      </Card>
    </StyledPeopleSection>
  );
}

export default PeopleSection;
