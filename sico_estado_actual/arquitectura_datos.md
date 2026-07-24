# Arquitectura de Datos de SICO

Este documento explica cómo viaja y se almacena la información en la infraestructura de costo $0 de SICO.

## 1. El Ciclo de Vida del Dato (Captura y Almacenamiento)
1. **Captura (Telegram Bot):** El operador en campo interactúa con el Bot de Telegram. Los flujos conversacionales son controlados por `main.js` y los handlers especializados (`handlers_caja.js`, `handlers_materiales.js`, `handlers_equipo.js`, `handlers_bitacora.js`).
2. **Control de Estado de Conversación:** El estado temporal de la conversación se almacena en la caché rápida mediante `CacheService` o en una hoja interna utilizando `database.js` para asegurar consistencia si falla el bot.
3. **Escritura (Google Sheets):** Cuando un flujo termina (ej. reporte de bitácora, ingreso de materiales, gasto de caja menor), el backend ejecuta una inserción en la hoja de cálculo de Google Sheets correspondiente usando el API nativo de `SpreadsheetApp`.

## 2. El Flujo del Dashboard (Visualización Ejecutiva)
1. **Acceso Seguro:** El usuario ingresa a `dashboard/index.html` y escribe la contraseña.
2. **Petición HTTP (GET):** El navegador web realiza una consulta a la URL de ejecución del script de Google Apps Script (`APPS_SCRIPT_URL + "?action=getDashboardData"`).
3. **Carga y Respuesta:** El script del servidor recibe la petición en `doGet()` en `main.js` y retorna todos los registros estructurados en un único objeto JSON que contiene los datos de:
   - `caja` (Caja Menor)
   - `materiales` (Inventario y Materiales)
   - `equipos` (Renta y Operación de Equipos)
   - `bitacoras` (Historial de Bitácoras de Obra)
   - `obras` (Listado de Obras registradas)
   - `cronograma` (Plan de Trabajo y Avances)
4. **Persistencia y Caché:** El script frontend (`app.js`) almacena el JSON en `sessionStorage` (`sico_dashboard_data`) para optimizar el rendimiento y evitar múltiples llamadas repetidas a las cuotas limitadas de Google Apps Script.
5. **Renderizado en Cliente:** Cuando el usuario navega entre las pestañas horizontales, se disparan las funciones de dibujo (`renderCajaMenor`, `renderMateriales`, `renderEquipos`, `renderPresupuesto`, `renderBitacora`, `renderCronograma`) que vacían las tablas dinámicas y re-dibujan los gráficos usando Chart.js.
