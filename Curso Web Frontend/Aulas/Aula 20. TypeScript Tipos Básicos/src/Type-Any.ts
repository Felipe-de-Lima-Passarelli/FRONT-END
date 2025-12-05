//Este tipo deve ser evitado, visto que tira a característica principal do TypeScript

function handleFileUpload(file: any) {
  console.log(file);
}

handleFileUpload("Felipe");
handleFileUpload(25);
handleFileUpload({ email: "teste@gmail.com", phone: "+55 18 99999-9999" });
