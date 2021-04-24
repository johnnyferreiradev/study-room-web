const getStatusClassColor = (currentStatus) => {
  if (currentStatus === 'Entregue' || currentStatus === 'Corrigida') {
    return 'txt-success';
  }

  if (currentStatus === 'Atrasada' || currentStatus === 'Entregue com atraso') {
    return 'txt-danger';
  }

  return 'txt-primary';
};

export default getStatusClassColor;
