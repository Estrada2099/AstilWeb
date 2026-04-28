# Como agregar logos de clientes

1. Coloca el logo nuevo dentro de la carpeta `Clientes`.
2. Copia los archivos de `Clientes` a `public/clientes`.
3. Reinicia Astro o recarga la pagina.

Comando recomendado desde la raiz del proyecto:

```powershell
Copy-Item -Path 'Clientes\*' -Destination 'public\clientes' -Force
```

Formatos aceptados: `.svg`, `.png`, `.jpg`, `.jpeg`, `.webp` y `.avif`.

Recomendaciones:

- Usa logos con fondo transparente cuando sea posible.
- Evita nombres con acentos o caracteres especiales.
- El carrusel los detecta automaticamente desde `public/clientes`; no hace falta editar codigo.
- Los logos se muestran en gris y recuperan su color al pasar el mouse.
