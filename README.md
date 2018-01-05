# DocEditor

Actividad
Crear una aplicación de edición y almacenamiento de documentos de texto formateados.


Vistas
- Listado (/list): En esta vista podrá verse todos los documentos guardados, una barra de búsqueda que permitirá filtrar los documentos por medio del nombre, descripción, autor o su contenido, un control que permitirá ordenar el contenido del documento ascendente o descendentemente por fecha de creación o de su mas reciente edición. Adicionalmente tendrá un botón que permitirá redirigir a la vista de Editar Documento con contenido vació. Al dar click sobre cualquiera de los documentos, debería redirigir a la vista de Editar Documento con su contenido cargado.


- Editar Documento (/:id_documento): Debe ser un formulario con los campos Nombre, Descripcion, autor y contenido (ninguno es requerido). Los primeros 3 campos son inputs y campos de texto, mientras el ultimo debe ser un editor WYSIWYG. El formulario debe guardarse cada 5seg siempre y cuando hayan cambios en alguno de los campos. El documento no tendrá botones para guardar, pero si uno para descartar(si el documento no tiene cambios aun)/eliminar el documento, en cuyo caso el documento sera eliminado.

Restricciones:

- Usar Firebase
- No usar datatables
- Las búsquedas y filtrados deben hacerse directamente en el front

