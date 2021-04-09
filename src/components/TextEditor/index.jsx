import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { TINY_MCE_API_KEY } from 'settings';

import StyledTextEditor from './styles';

const lang = `${window.location.origin}/public/lang/pt_BR`;

function TextEditor({ onChange, value }) {
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
          toolbar: 'undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent lineheight | removeformat | help',
        }}
        onEditorChange={handleEditorChange}
      />
    </StyledTextEditor>
  );
}

export default TextEditor;
