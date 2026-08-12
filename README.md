# Daniela Espinosa — Portfolio

Portfolio estático modular construido con HTML5, CSS3 y JavaScript ES Modules. No requiere dependencias, build ni bundler.

## Ejecutar localmente

Los módulos ES necesitan un servidor local:

```bash
python -m http.server 8080
```

Abre `http://localhost:8080`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube el contenido de esta carpeta a la raíz del repositorio.
3. Ve a **GitHub → Settings → Pages**.
4. En Source selecciona **Deploy from a branch**.
5. Selecciona la rama **main**.
6. Selecciona la carpeta **/(root)**.
7. Pulsa **Save**.

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin URL_DEL_NUEVO_REPO
git push -u origin main
```

Todas las rutas del sitio son relativas y compatibles con repositorios de cualquier nombre.
