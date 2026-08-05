# Cómo recompilar el CSS

**Léelo solo si agregaste o cambiaste clases de Tailwind en `index.html`.**
Si únicamente cambiaste textos, precios o imágenes, no tienes que hacer nada.

---

## Por qué existe este paso

Antes la página cargaba el diseño desde `cdn.tailwindcss.com`. Ese script traía
Tailwind completo y generaba el CSS dentro del navegador de cada visitante, cada
vez. Funcionaba hasta el 4 de agosto de 2026, cuando el dominio dejó de
resolverse y la página apareció sin una sola línea de estilo: todo el contenido
apilado a la izquierda, sin columnas y sin colores.

Ese CDN es una herramienta de prototipado. La propia documentación de Tailwind
dice que no se use en producción. Ahora el CSS está compilado dentro de
`assets/sico.css` y no depende de nadie.

El precio: Tailwind solo incluye en el archivo las clases que encuentra en el
HTML. Si escribes una clase nueva y no recompilas, esa clase no existirá.

---

## Los pasos

Necesitas Node.js instalado. Desde la carpeta `assets/`:

```bash
npm install tailwindcss@3
npx tailwindcss -c tailwind.config.js -i entrada.css -o tailwind-nuevo.css --minify
```

Si no tienes `entrada.css`, créalo con estas tres líneas:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Eso genera el bloque de Tailwind. Luego pégalo dentro de `sico.css`
**reemplazando el bloque de Tailwind que ya está ahí**, sin tocar los
`@font-face` del principio ni el bloque de Font Awesome del final.

---

## Qué hay dentro de `sico.css`

Tres bloques, en este orden:

| Bloque | Qué es | Cuándo se toca |
|---|---|---|
| `@font-face` de Plus Jakarta Sans | Apunta a `assets/fonts/` | Solo si cambias de tipografía |
| Tailwind compilado | El grueso del diseño | Cuando agregas clases nuevas al HTML |
| Font Awesome | Recortado a los 44 iconos que usa la página | Si usas un icono que antes no estaba |

**Si agregas un icono nuevo** (`fa-algo` que no estuviera antes), no basta con
recompilar Tailwind: el icono tampoco estará, porque Font Awesome quedó
recortado a propósito para que pesara 16 KB en vez de 98 KB. Pídemelo y lo
regenero.

---

## La regla corta

> Si tocaste clases de Tailwind o iconos, recompila.
> Si solo tocaste texto, publica y ya.

Después de recompilar, abre `index.html` con doble clic y comprueba que se ve
bien **antes** de subirlo. Si se ve apilado a la izquierda, el CSS no está
cargando.
