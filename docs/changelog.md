---
layout: default
title: Changelog
nav_order: 6
---

# Historial de cambios

## Versión 1.0.1 (Febrero 15, 2026)

<div class="keygin-note success">
  <strong>Versión inicial</strong>
  Primer lanzamiento a producción de Keygin ERP Sync Pro.
</div>

---

### Características iniciales

- Sistema de sincronización entre WordPress y Contifico
- Máximo 1000 productos por sincronización
- Panel de administración en WordPress con dashboard de estado
- Sistema de logs automáticos para monitoreo
- Interfaz responsive adaptable a móviles y tablets
- Compatibilidad con WordPress 6.9.1+ y PHP 8.2.27+

### Entidades sincronizables

- Productos (nombre, descripción, precio, SKU, Stock)
- Documentos electrónicos emitidos
- Documentos electrónicos fallidos
- Movimientos de inventario

## Versión 1.0.2 (Marzo 4, 2026)

### Características iniciales

- Se corrigió la estructura de metadatos para una compatibilidad total con WordPress.
- Se solucionó el problema de acceso a la API bloqueado por la protección antibot del servidor.

## Versión 1.1.0 (Abril 26, 2026)

### Características iniciales

- Se migró el procesamiento en segundo plano de WP-Cron a Action Scheduler.
- Sincronizaciones programadas más fiables (ya no dependen del tráfico del sitio).
- Sistema de reintentos automáticos para sincronizaciones fallidas.
- Mejor control de concurrencia para evitar sincronizaciones superpuestas.
- Menor carga del servidor durante operaciones de sincronización intensivas.
- Se solucionó el problema de la ejecución duplicada de la sincronización de stock.
- Limpieza automática de tareas cron antiguas al actualizar el plugin.
- Se añadió una capa de compatibilidad para una transición fluida entre WP-Cron y Action Scheduler.
- Se mejoraron las capacidades de registro y depuración.

## Versión 1.1.1 (Abril 26, 2026)

### Características iniciales

- El verificador de actualizaciones ahora recupera correctamente la clave de licencia para la validación de la versión.
- Se solucionó el error HTTP 500 al buscar actualizaciones de complementos.
- Se agregó la limpieza del programador de acciones al proceso de desinstalación.