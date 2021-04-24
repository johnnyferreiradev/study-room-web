const getFileType = (file) => {
  const fileType = file.extension || file.type.split('/')[0];

  if (fileType === 'doc') return { type: 'file', typeLabel: 'Documento Word', found: true };
  if (fileType === 'docx') return { type: 'file', typeLabel: 'Documento Word', found: true };
  if (fileType === 'odt') return { type: 'file', typeLabel: 'Documento Office', found: true };
  if (fileType === 'pdf') return { type: 'file', typeLabel: 'Documento PDF', found: true };
  if (fileType === 'wpd') return { type: 'file', typeLabel: 'Documento WordPerfect', found: true };
  if (fileType === 'xls') return { type: 'file', typeLabel: 'Planilha', found: true };
  if (fileType === 'pptx') return { type: 'file', typeLabel: 'Apresentação do PowerPoint', found: true };
  if (fileType === 'txt') return { type: 'file', typeLabel: 'Documento de texto', found: true };

  if (fileType === 'mp4') return { type: 'video', typeLabel: 'Vídeo', found: true };
  if (fileType === 'wmv') return { type: 'video', typeLabel: 'Vídeo', found: true };
  if (fileType === 'mov') return { type: 'video', typeLabel: 'Vídeo', found: true };
  if (fileType === 'mkv') return { type: 'video', typeLabel: 'Vídeo', found: true };
  if (fileType === 'avi') return { type: 'video', typeLabel: 'Vídeo', found: true };
  if (fileType === 'mpg') return { type: 'video', typeLabel: 'Vídeo', found: true };
  if (fileType === 'mpeg') return { type: 'video', typeLabel: 'Vídeo', found: true };

  // Image file types
  if (fileType === 'jpg') return { type: 'image', typeLabel: 'Imagem', found: true };
  if (fileType === 'jpeg') return { type: 'image', typeLabel: 'Imagem', found: true };
  if (fileType === 'png') return { type: 'image', typeLabel: 'Imagem', found: true };
  if (fileType === 'gif') return { type: 'image', typeLabel: 'Imagem', found: true };
  if (fileType === 'ico') return { type: 'image', typeLabel: 'Imagem', found: true };
  if (fileType === 'svg') return { type: 'image', typeLabel: 'Imagem', found: true };

  // Audio file types
  if (fileType === 'mp3') return { type: 'audio', typeLabel: 'Audio', found: true };
  if (fileType === 'ogg') return { type: 'audio', typeLabel: 'Audio', found: true };
  if (fileType === 'mid') return { type: 'audio', typeLabel: 'Audio', found: true };
  if (fileType === 'wav') return { type: 'audio', typeLabel: 'Audio', found: true };

  // Compressed files
  if (fileType === 'rar') return { type: 'file', typeLabel: 'Arquivo compactado', found: true };
  if (fileType === 'tar.gz') return { type: 'file', typeLabel: 'Arquivo compactado', found: true };
  if (fileType === 'zip') return { type: 'file', typeLabel: 'Arquivo compactado', found: true };
  if (fileType === '7z') return { type: 'file', typeLabel: 'Arquivo compactado', found: true };

  if (fileType === 'link') return { type: 'link', typeLabel: 'Link', found: true };

  return { type: fileType, typeLabel: 'Arquivo deconhecido', found: false };
};

export default getFileType;
