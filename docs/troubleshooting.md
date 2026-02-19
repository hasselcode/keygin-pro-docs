---
layout: default
title: Solución de problemas
nav_order: 5
---

# Solución de problemas

Esta sección describe los errores más comunes que pueden ocurrir durante la operación de **Keygin ERP Sync Pro** y sus respectivas soluciones.

<div class="keygin-note warning">
  <strong>⚠️ IMPORTANTE</strong><br>
  Antes de realizar cambios técnicos, asegúrese de contar con un respaldo actualizado de la base de datos.
</div>

---

## Error 1: No se puede conectar con la API de Contifico

**Síntomas**

- Mensaje: "Error de conexión"
- Estado: "API no responde"
- No se puede verificar credenciales

**Posibles causas**

- API Key incorrecta
- Servidor sin acceso a internet
- Firewall bloqueando conexiones salientes
- Problemas temporales del ERP

**Solución**

1. Verifique que la API Key sea válida.
2. Confirme que el servidor permita conexiones HTTPS salientes (puerto 443).
3. Revise reglas de firewall.
4. Pruebe la conectividad desde el servidor mediante `curl`.

---

## Error 2: Los productos no se sincronizan

**Síntomas**

- Nuevos productos no aparecen en WooCommerce
- Cambios en ERP no se reflejan

**Posibles causas**

- Sincronización deshabilitada
- Cron de WordPress no ejecutándose
- Filtros activos en ERP

**Solución**

1. Verifique que la sincronización esté habilitada.
2. Compruebe que WP-Cron esté funcionando.
3. Revise los logs del plugin.
4. Ejecute una sincronización manual.

---

## Error 3: El stock no se actualiza correctamente

**Síntomas**

- Diferencias entre stock ERP y WooCommerce
- Inventario inconsistente

**Posibles causas**

- Bodega incorrecta seleccionada
- Productos duplicados
- SKU no coincidente

**Solución**

1. Verifique la bodega principal configurada.
2. Confirme que los SKUs coincidan exactamente.
3. Revise si existen productos duplicados.
4. Fuerce una resincronización completa.

---

## Error 4: Error 403 en el panel de administración

**Síntomas**

- Stock no se actualiza en Contifico despues de completar una orden en WooCommerce.
- Pérdida de trazabilidad.

**Causa probable**

- El documento electrónico enviado desde tiene campos vacíos o mal redactados.

**Solución**

1. Diríjase a Documentos Fallidos
2. Verifique el documento fallido basnadose en el número de Orden de WooCommerce.
3. Corrija manualmente los campos estrictamente necesarios, para error 403 debe corregir los campos que el formulario pide corregir en el mensaje de error.
4. Envíe el documento y verifique.

---

## Error 5: Error 409 en el panel de administración

**Síntomas**

- Stock no se actualiza en Contifico despues de completar una orden en WooCommerce.
- Pérdida de trazabilidad.

**Causa probable**

- El documento electrónico enviado desde WordPress esta duplicado.

**Solución**

1. Diríjase a Documentos Fallidos
2. Verifique el documento fallido basnadose en el número de Orden de WooCommerce.
3. Corrija manualmente los campos estrictamente necesarios, para error 409 debe corregir el numero de documento ej. {001-001-000000001}. El número desde ser el inmediato superior al registrado en Contifico.
4. Envíe el documento y verifique.

---

## Error 6: Error 500 en el panel de administración

**Síntomas**

- Pantalla en blanco
- Error interno del servidor
- Mensaje "500 Internal Server Error"

**Posibles causas**

- Conflicto con otro plugin
- Límite de memoria PHP insuficiente
- Versión de PHP incompatible

**Solución**

1. Aumente `memory_limit` en PHP.
2. Desactive otros plugins temporalmente.
3. Verifique que PHP sea 7.4 o superior.
4. Revise los logs del servidor (`error_log`).

---

## Error 7: Licencia inválida o expirada

**Síntomas**

- Mensaje: "Licencia inválida"
- Funciones bloqueadas
- Sincronización deshabilitada

**Posibles causas**

- Dominio no autorizado
- Licencia vencida
- Error de validación remota

**Solución**

1. Verifique que el dominio coincida con la licencia adquirida.
2. Confirme la fecha de expiración.
3. Revise conectividad hacia el servidor de validación.
4. Contacte soporte si el problema persiste.

---

## Recomendación general

Para un diagnóstico más preciso:

- Active el modo debug del plugin.
- Revise los logs internos de Keygin Sync.
- Consulte los logs del servidor web.
- Documente el mensaje exacto del error antes de contactar soporte.
