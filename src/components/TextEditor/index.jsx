import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { TINY_MCE_API_KEY } from 'settings';

import Loading from 'components/Loading';

import StyledTextEditor from './styles';

const lang = `${window.location.origin}/public/lang/pt_BR`;

function TextEditor({ onChange, value }) {
  const [loadingEditor, setLoadingEditor] = useState(true);

  const handleEditorChange = (content) => {
    onChange(content);
  };

  return (
    <StyledTextEditor>
      <Editor
        initialValue=""
        value={value}
        apiKey={TINY_MCE_API_KEY}
        language="pt"
        init={{
          width: '100%',
          height: 200,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          language: 'pt_BR',
          language_url: { lang },
          toolbar: 'undo redo | formatselect | bold italic fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent lineheight | removeformat',
        }}
        onEditorChange={handleEditorChange}
        onLoadContent={() => setLoadingEditor(false)}
      />

      {loadingEditor && (
        <Loading type="bubbles" height={42} width={42} fluid color="#8CC8F3" />
      )}
    </StyledTextEditor>
  );
}

export default TextEditor;
