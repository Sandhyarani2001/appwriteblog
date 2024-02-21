import React from 'react';
import { Editor} from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({name, control, label, defaultValue=""}) {
  return (
     <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'
      >{label}</label>}
      
      <Editor
      apiKey='rbyepkglgomwx5z77ua82f3g7x3mb1h6xxzz0p7pmbd6a2cq'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Welcome to TinyMCE!"
    />


      {/* <Controller 
        name={name || "content"}
        control = {control}
        render={({field: {onChange}})=>(
          <Editor
        initialValue= {defaultValue}
        init={{
            initialValue: defaultValue,
            // branding: false,
            height: 500,
            member: true,
            plugins:[
                
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
             toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }
        }
        onEditorChange={onChange}
        
      />
        )}
      /> */}

      
     </div>
    
  )
}
