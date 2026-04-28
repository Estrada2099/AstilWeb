# Publicar en GitHub Pages

## 1. Crear repositorio en GitHub

Crea un repositorio nuevo en GitHub, por ejemplo:

```text
astil-basculas-web
```

## 2. Inicializar y subir el proyecto

Desde la raiz del proyecto:

```powershell
git init
git branch -M main
git add .
git commit -m "Sitio web Astil Basculas"
git remote add origin https://github.com/TU_USUARIO/astil-basculas-web.git
git push -u origin main
```

## 3. Configurar GitHub Pages

En GitHub entra a:

```text
Settings > Pages
```

En `Build and deployment`, selecciona:

```text
Source: GitHub Actions
```

## 4. Configurar URL del sitio

En GitHub entra a:

```text
Settings > Secrets and variables > Actions > Variables
```

Agrega una variable:

```text
SITE_URL
```

Si usaras el dominio de GitHub Pages:

```text
https://TU_USUARIO.github.io/astil-basculas-web
```

Si usaras tu dominio propio:

```text
https://tudominio.com
```

## 5. Dominio propio

Cuando tengas definido el dominio final, crea este archivo:

```text
public/CNAME
```

Su contenido debe ser solo el dominio:

```text
tudominio.com
```

Despues configura los DNS del dominio para apuntar a GitHub Pages.

## 6. Actualizaciones futuras

Cada cambio se publica con:

```powershell
git add .
git commit -m "Actualizar sitio"
git push
```

GitHub Actions compilara Astro y publicara `dist` automaticamente.
