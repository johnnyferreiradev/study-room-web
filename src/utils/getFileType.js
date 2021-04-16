const getFileType = (file) => {
  // let dotIndex;

  // for (let i = fileName.length; i >= 0; i -= 1) {
  //   if (fileName[i] === '.') {
  //     dotIndex
  //     break;
  //   }
  // }

  // const extensionLimit = 5;
  // const fileTokenIdLimit = 36;

  // console.log(fileName.substring(fileName.length - extensionLimit).split('.')[1]);
  // console.log(fileName.substring(fileName.length - fileTokenIdLimit));

  // let currentType;

  // if (file.type) {
  //   const type = file.type.split('/')[0];

  //   if (type === 'application') return { type, typeLabel: 'Documento' };
  //   if (type === 'video') return { type, typeLabel: 'Vídeo' };
  //   if (type === 'text') return { type, typeLabel: 'Documento de texto' };
  //   if (type === 'image') return { type, typeLabel: 'Imagem' };
  //   if (type === 'audio') return { type, typeLabel: 'Audio' };
  //   if (type === 'link') return { type, typeLabel: 'Link' };

  //   return { type, typeLabel: 'Arquivo' };
  // }

  // return { type: 'file', typeLabel: 'Arquivo' };
};

export default getFileType;
