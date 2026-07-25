🧠 Manual Maestro de Operaciones y Negocio: SICO
=====================================================
Este documento es el repositorio definitivo de la estrategia, arquitectura, precios, guías comerciales, protocolo de adopción y visión de negocio de SICO. Es la guía maestra para operar, vender y escalar el sistema.

---

1. El Concepto de Valor (La Propuesta de Venta y ROI Respaldado)
----------------------------------------------------------------
¿Qué es SICO? Es una solución de control, respaldo y visibilidad total para el dueño de la obra, no solo un software de tareas para ingenieros.

- La Promesa: Tranquilidad absoluta. El dueño sabe qué pasa con su dinero, materiales, equipos y cronograma en tiempo real desde cualquier lugar del mundo.
- El Factor Diferencial ("El Candado de Datos"): SICO garantiza que el personal de campo solo pueda inyectar información sin posibilidad de borrar o alterar el pasado. La transparencia e inmutabilidad son totales.
- Retorno Financiero Directo (ROI Garantizado por Fuentes): 
  * Estudios globales de **McKinsey & Company** y el **Lean Construction Institute (LCI)** demuestran que entre el **5% y el 15% del presupuesto total de cualquier obra** se fuga en sobrecostos invisibles, desperdicio de materiales (2.5% a 5% del valor directo) y horas muertas en campo (+50% del tiempo en sitio).
  * **Ejemplo Proporcional de Ahorro con SICO:**
    - En obra de $300M COP: Ahorro recuperado de **$15M a $30M COP**.
    - En obra de $1.500M COP: Ahorro recuperado de **$75M a $150M COP**.
    - En obra de $5.000M COP: Ahorro recuperado de **+$250M a $500M COP**.
  * SICO se paga solo en los primeros 15 días de operación en cualquier escala de proyecto.

---

2. El Perfil del Fundador (Respaldo Técnico & Autoridad Gerencial)
------------------------------------------------------------------
- **Formación Profesional:** Ingeniero Civil.
- **Postgrados:** Especialista en Gerencia de Construcción de Obras & Master of Business Administration (MBA).
- **Enfoque Operativo:** Amplia experiencia práctica en el campo de la obra combinada con **automatización de procesos**.
- **Propósito del Perfil:** Generar confianza absoluta y empatía inmediata con el cliente (gerentes y dueños de obra), demostrando que la plataforma no fue creada por teóricos del software, sino por alguien que entiende de primera mano el dolor, los sobrecostos y la dinámica real del terreno.

---

3. Arquitectura Operativa y Técnica (Fase 1: Serverless Asset-Light)
------------------------------------------------------------------
- Entorno de Captura: Telegram Bot (App privada, rápida, liviana, sin distracciones y con Inline Keyboards para cero error de digitación).
- Backend (El "Cerebro"): Google Apps Script operando como una Máquina de Estados Efímera.
- Almacenamiento & Data: Google Sheets + Google Drive Corporativo (Ecosistema preparado para IA).
- Visualización: Dashboard Web Gerencial Centralizado (GitHub Pages).
- Margen Operativo: 98% de margen bruto (Costo fijo $0 COP en infraestructura inicial).
- Protección por Roles: Menús dinámicos mediante tabla `Usuarios_Config` (El Almacenista solo ve Materiales; el Residente ve Caja y Bitácora; el Inspector ve SST).
- Límites de Seguridad de Apps Script: Para evitar bloqueos por concurrencia (`LockService`), cada bot de obra se limita operativamente a un máximo de 2 a 5 usuarios de captura autorizados en campo.

---

4. Catálogo de Módulos, Planoteca y Fábrica a Medida
---------------------------------------------------
Catálogo Base y Módulos Disponibles:
1. 💰 Control de Caja Menor y Comprobantes (Facturas fotográficas).
2. 📦 Inventario y Materiales (Kardex en vivo, entradas y salidas).
3. 🚜 Control de Equipos y Alquileres (Horómetros y auditoría Stand-By).
4. 📝 Bitácora Diaria de Obra (Clima, avances y novedades).
5. 👷 Asistencia y Pre-Nómina de Personal (Cuadrillas y horas extra).
6. 🦺 Seguridad y Salud en el Trabajo (SST - Charlas de 5 min y EPPs).
7. 🧪 Control de Calidad y Concretos (Cilindros, slump y ensayos).
8. 🚚 Despachos de Volquetas y Agregados (Cúbicos m³ recibidos).
9. 🗺️ Planoteca Digital: Visor web de planos de alta resolución (PDFs en Drive por disciplinas: Arquitectura, Estructura, Hidrosanitario, Eléctrico).

Fábrica de Módulos a Medida & Política de Setup Fee:
- Si el cliente requiere un flujo o módulo personalizado fuera del catálogo estándar, se le cobra un **Pago Único de Configuración e Integración (Setup Fee: $300.000 a $500.000 COP)** durante el primer mes por el trabajo de adaptación.
- Tras la entrega, el cliente mantiene exactamente su misma tarifa mensual recurrente sin sobrecostos, ocupando su cupo de módulos activos.

---

5. Entregables Gerenciales: Los 5 KPIs de Dinero (Plan Pro)
-----------------------------------------------------------
En los informes automáticos semanales y mensuales para la Gerencia y la Junta Directiva se proyectan 5 KPIs indispensables:
1. 📊 Índice de Consumo vs. Avance Físico: % del presupuesto ejecutado vs. % de avance real para detectar pérdidas antes de tiempo.
2. 📦 Inconsistencia de Materiales: Cruce entre materiales ingresados a almacén vs. materiales instalados reportados en Bitácora (alerta contra robo hormiga).
3. 🚜 Tasa de Equipos Inactivos (Stand-By): Días/horas de equipos y formaletas alquiladas pagando renta sin registrar uso en Bitácora.
4. 💸 Índice de Caja Menor sin Soporte: Porcentaje de dinero gastado vs. facturas/recibos respaldados en Google Drive.
5. ⏱️ Días de Retraso Acumulado vs. Cronograma: Impacto de lluvias e imprevistos sobre los costos fijos indirectos de la obra.

---

6. Guía de Onboarding VIP en Obra (Protocolo de Adopción de 7 Días)
------------------------------------------------------------------
- Día 1: Inmersión y venta de "Tiempo Libre" (En el lodo). Reúnete presencialmente con el maestro y el almacenista. No les vendas que SICO es "para que el dueño los vigile". Véndeles que usar el bot en 60 segundos al día les evitará quedarse los sábados a las 5:00 PM llenando planillas de Excel arrugadas. Instala Telegram y realiza un reporte de prueba.
- Día 2: Sombras en terreno. Acompaña al almacenista durante la llegada real de un pedido de materiales. Haz que registre la entrada en el bot frente a ti.
- Día 3: El reto de la Caja Menor. Acompaña al residente al pagar un gasto (ej. combustible/almuerzo) y enséñale a tomar la foto bien enfocada de la factura.
- Días 4 y 5: Supervisión a distancia. Monitorea Google Sheets desde la oficina. Si a las 5:00 PM falta el reporte, envía un recordatorio amistoso por chat.
- Día 6: La revelación del poder. Ve a la obra con una tablet o laptop y muéstrales el Dashboard Web y el PDF autogenerado gracias a sus clics. Comprenderán el valor de su trabajo.
- Día 7: Autonomía total. Felicitación al equipo y entrega del control operativo.

---

7. Manual de Ventas: Respuestas Imbatibles a las 3 Objeciones
-------------------------------------------------------------
1. Objeción: "Mi personal de obra no sabe de tecnología, son maestros tradicionales."
   - Respuesta: *"Precisamente por eso creamos SICO. No les pedimos instalar ni aprender un software complejo. Vive en Telegram, una app que ya usan a diario. Solo oprimen tres botones y envían una foto en 60 segundos. Si saben enviar un mensaje a su familia, saben reportar en SICO."*

2. Objeción: "Para eso prefiero seguir usando WhatsApp, es gratis."
   - Respuesta: *"WhatsApp es excelente para chatear, pero nefasto para la contabilidad. Las fotos de las facturas se pierden entre los memes. SICO no es para chatear; es un sistema de automatización de ingeniería que organiza la contabilidad y actualiza su tablero gerencial en tiempo real."*

3. Objeción: "No confío en la nube para mis datos de costos."
   - Respuesta: *"Su información es sagrada. Firmamos un Contrato NDA estricto y aplicamos Cero Secuestro de Datos: si decide no continuar, se lleva sus bases de datos e imágenes intactas sin amarras. Usted tiene las llaves del vehículo, nosotros solo le damos el motor."*

---

8. Canales de Prospección Directa (Primeros 5 Clientes)
-------------------------------------------------------
1. Alianzas B2B con Estudios de Arquitectura e Interventorías: Acuerdos con arquitectos diseñadores para que prescriban SICO a los dueños de proyectos para cuidar que la obra no desvíe el diseño ni el presupuesto.
2. Infiltración en Gremios (CAMACOL / Cámaras de Comercio): Participación en ruedas de negocio vendiendo el argumento directo: *"Plataforma sin costo inicial que frena fugas en materiales y maquinaria"*.
3. "Cold Walking" en Obras Activas (Curadurías): Visitas directas en sitio a directores de obra ofreciendo la prueba de 15 días gratis.

---

9. Modelo de Negocio, Estructura Comercial y Oferta por Niveles (SaaS)
-----------------------------------------------------------------------

### 🛡️ LA BASE OPERATIVA DE SICO (Incluido en TODOS los planes)
Cada constructora que contrata SICO cuenta con la siguiente arquitectura base para garantizar transparencia, portabilidad y orden:
- **Acceso Web 24/7:** El dueño o gerente ingresa al Dashboard Gerencial desde su celular o laptop desde cualquier lugar del mundo.
- **Organización Automática:** Fotos y comprobantes organizados solos en Google Drive; datos tabulados e inmutables en Google Sheets.
- **Canal Corporativo Exclusivo:** Correo electrónico único dedicado (`obraX@sico.com`) entre la empresa y SICO para procesamiento y notificaciones privadas.
- **Acuerdo NDA & Cero Secuestro:** Contrato legal de confidencialidad; los datos pertenecen 100% a la constructora.
- **Flexibilidad de Módulos:** Posibilidad de intercambiar los módulos activos dentro del cupo contratado.
- **Personal de Campo Ilimitado:** Todos los obreros, capataces o residentes pueden reportar vía Telegram sin cobrar licencias por usuario adicional.

---

### 🟢 1. PLAN BÁSICO: "Control Visual" — $250.000 COP / mes por obra
- **El Porqué (Propuesta de Valor):** Pensado para obras pequeñas o contratistas independientes que sufren por el descontrol del papel, recibos perdidos en bolsillos y cuadernos manchados de cemento. Brinda orden digital e inmediatez a bajo costo.
- **Cupo de Módulos:** **2 Módulos a elección** (Ej: Bitácora Diaria + Caja Menor).
- **¿Cómo se ve el Dashboard? (Modo Espejo):**
  * Pantalla limpia que refleja digitalmente la operación diaria de campo.
  * Tabla interactiva de gastos con hipervínculo directo para ver la **foto real de cada factura cargada**.
  * Gráficos de distribución de gastos por categoría (torta y barras).
- **¿Cómo se brinda el servicio? (Flujo de Entrega):**
  * El personal de campo reporta datos y fotos por el Bot de Telegram ➔ Apps Script almacena la data en Sheets y Drive ➔ El Dashboard Web lee esa data en tiempo real ➔ El usuario puede descargar reportes operativos básicos organizados en Excel.

---

### 🟡 2. PLAN MEDIO: "Control Inteligente" — $750.000 COP / mes por obra (El Más Vendido)
- **El Porqué (Propuesta de Valor):** Para constructoras medianas (Pymes) donde el gerente o dueño no puede estar físicamente en el sitio todo el día y necesita que el sistema actúe como un **auditor activo** que detecte fugas y le "ladre" si está perdiendo dinero.
- **Cupo de Módulos:** **4 Módulos a elección** (Ej: Bitácora, Caja Menor, Materiales, Equipos).
- **¿Cómo se ve el Dashboard? (Modo Alertas & Semáforos):**
  * **Semáforos de Advertencia Inmediata:** Indicadores visuales en rojo cuando hay desviaciones *(Ej: "Alerta: Saldo de Caja Menor al 10%", "Inconsistencia: Consumo de Cemento desfasado", "Alquiler de Volqueta vencido")*.
  * **Presupuesto Dinámico:** Reloj visual que compara el % de presupuesto consumido vs. el % de avance ejecutado.
- **¿Cómo se brinda el servicio? (Flujo de Entrega):**
  * Apps Script ejecuta reglas de validación en tiempo real entre los 4 módulos ➔ Si detecta una anomalía, inyecta la Alerta Roja en el Dashboard Web y dispara una notificación al correo exclusivo ➔ Entrega de informes semanales y mensuales estandarizados SICO en PDF/Excel.

---

### 🔴 3. PLAN PRO: "Gerencia Corporativa" — Desde $1.800.000 COP / mes por obra (Cotización a medida)
- **El Porqué (Propuesta de Valor):** Para obras de gran envergadura o juntas directivas. La gerencia no tiene tiempo de armar informes a mano los fines de semana. Necesitan proyecciones financieras a futuro y documentos oficiales listos para presentar en comités.
- **Cupo de Módulos:** **Hasta 6 Módulos (Suite Completa)** (Caja, Materiales, Equipos, Bitácora, Subcontratos/Destajos, Nómina/SST).
- **¿Cómo se ve el Dashboard? (Modo Predictivo & Multi-Obra):**
  * **Inteligencia Predictiva (EAC - Estimate at Completion):** Medidor que calcula y predice cuánto costará la obra al finalizar si se mantiene el ritmo de gasto actual.
  * **Liquidación Inteligente de Subcontratos:** Botón de un solo clic que cruza los avances reportados en Bitácora contra las actas de cobro de subcontratistas al destajo.
  * **Consolidado Multi-Obra:** Tablero ejecutivo para revisar el estado de 2 o más proyectos simultáneamente.
- **¿Cómo se brinda el servicio? (El Gran Diferenciador — Automatización de Plantillas Propias):**
  * La constructora entrega a SICO sus plantillas oficiales en Word, Excel o PDF.
  * El motor de SICO extrae automáticamente los datos y fotos recolectados por los 6 módulos ➔ **Rellena e inyecta la información dentro de los formatos propios del cliente** ➔ Genera y envía por correo los PDFs oficiales con el logo y branding de la constructora, listos para firmar y presentar a la Junta Directiva o Interventoría.

---

10. Blindaje Legal y Protección de Propiedad Intelectual
--------------------------------------------------------
- Acuerdo NDA & Cero Secuestro de Datos.
- Protección de PI: El código en Apps Script y la plataforma web son propiedad exclusiva de SICO. El cliente paga una licencia de uso SaaS.
- Limitación de Responsabilidad Técnica (CIIU 7110 y 6201): El contrato establece que SICO presta servicios de gestión, software y consultoría tecnológica. SICO no asume responsabilidad directa sobre la estabilidad de la estructura física ni sobre accidentes en la obra.

---

11. Roadmap de Escalabilidad Tecnológica (Fases)
-----------------------------------------------
- Fase 1 (Actual): Google Apps Script + Telegram Bot ($0 cost base, 98% margen). Ideal para operar las primeras 8-10 obras activas.
- Fase 2 (Crecimiento VPS): Al alcanzar 2 clientes Pro ($3.6M COP/mes), se financia la migración a un VPS Privado (Node.js/Python + PostgreSQL) eliminando restricciones de concurrencia.
- Fase 3 (Inteligencia Artificial Gemini): Conexión de la base de datos con Google AI Studio para permitir consultas en lenguaje natural ("¿Cuánto gastamos en acero este mes y cuál fue el día pico?").