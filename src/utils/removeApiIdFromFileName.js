const removeApiIdFromFileName = (fileName) => {
  // const fileNameInverse = fileName.split('').reverse().join('');

  const idIndex = fileName.indexOf('_studyroom_');

  if (idIndex === -1) {
    return fileName;
  }

  // const dotIndex = fileName.length - (fileNameInverse.indexOf('.'));

  const name = fileName.substr(0, idIndex);
  // const extension = fileName.substr(dotIndex);

  // if (name.indexOf(extension) !== -1) {
  //   name = name.replace(`.${extension}`, '');
  // }

  // return `${name}.${extension}`;
  return name;
};

export default removeApiIdFromFileName;
