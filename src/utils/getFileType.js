const getFileType = (file) => {
  const fileType = file.extension || file.type.split('/')[0];

  if (file.extension) {
    const { extension } = file;

    if (extension === 'doc') return { type: 'file', typeLabel: 'Documento Word', found: true };
    if (extension === 'docx') return { type: 'file', typeLabel: 'Documento Word', found: true };
    if (extension === 'odt') return { type: 'file', typeLabel: 'Documento Office', found: true };
    if (extension === 'pdf') return { type: 'file', typeLabel: 'Documento PDF', found: true };
    if (extension === 'wpd') return { type: 'file', typeLabel: 'Documento WordPerfect', found: true };
    if (extension === 'xls') return { type: 'file', typeLabel: 'Planilha', found: true };
    if (extension === 'pptx') return { type: 'file', typeLabel: 'Apresentação do PowerPoint', found: true };
    if (extension === 'txt') return { type: 'file', typeLabel: 'Documento de texto', found: true };

    if (extension === 'mp4') return { type: 'video', typeLabel: 'Vídeo', found: true };
    if (extension === 'wmv') return { type: 'video', typeLabel: 'Vídeo', found: true };
    if (extension === 'mov') return { type: 'video', typeLabel: 'Vídeo', found: true };
    if (extension === 'mkv') return { type: 'video', typeLabel: 'Vídeo', found: true };
    if (extension === 'avi') return { type: 'video', typeLabel: 'Vídeo', found: true };
    if (extension === 'mpg') return { type: 'video', typeLabel: 'Vídeo', found: true };
    if (extension === 'mpeg') return { type: 'video', typeLabel: 'Vídeo', found: true };

    // Image file types
    if (extension === 'jpg') return { type: 'image', typeLabel: 'Imagem', found: true };
    if (extension === 'jpeg') return { type: 'image', typeLabel: 'Imagem', found: true };
    if (extension === 'png') return { type: 'image', typeLabel: 'Imagem', found: true };
    if (extension === 'gif') return { type: 'image', typeLabel: 'Imagem', found: true };
    if (extension === 'ico') return { type: 'image', typeLabel: 'Imagem', found: true };
    if (extension === 'svg') return { type: 'image', typeLabel: 'Imagem', found: true };

    // Audio file types
    if (extension === 'mp3') return { type: 'audio', typeLabel: 'Audio', found: true };
    if (extension === 'ogg') return { type: 'audio', typeLabel: 'Audio', found: true };
    if (extension === 'mid') return { type: 'audio', typeLabel: 'Audio', found: true };
    if (extension === 'wav') return { type: 'audio', typeLabel: 'Audio', found: true };

    // Compressed files
    if (extension === 'rar') return { type: 'file', typeLabel: 'Arquivo compactado', found: true };
    if (extension === 'tar.gz') return { type: 'file', typeLabel: 'Arquivo compactado', found: true };
    if (extension === 'zip') return { type: 'file', typeLabel: 'Arquivo compactado', found: true };
    if (extension === '7z') return { type: 'file', typeLabel: 'Arquivo compactado', found: true };

    if (extension === 'link') return { type: 'link', typeLabel: 'Link', found: true };

    return { type: fileType, typeLabel: 'Arquivo deconhecido', found: false };
  }

  return { extension: 'file', typeLabel: 'Arquivo deconhecido', found: false };
};

export default getFileType;
