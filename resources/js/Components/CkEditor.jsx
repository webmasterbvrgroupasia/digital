import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function TextEditor({ content, onChange }) {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data)
            }} />
    )
}
