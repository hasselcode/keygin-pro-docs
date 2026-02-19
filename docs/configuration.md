---
layout: default
title: Configuración
nav_order: 3
---

# Configuración

Esta sección describe el proceso completo para conectar **Keygin ERP Sync Pro** con su cuenta de Contifico y habilitar la sincronización automática.

Una configuración correcta garantiza integridad de datos, consistencia de inventario y comunicación segura con el ERP.

---

## 1. Activar el producto

Para activar las configuraciones de Keygin debe insertar la clave de activación enviada a través de email:

1. Revise la bandeja de entrada o spam de su email.
2. Copie en el portapapeles la clave de activación.
3. Diríjase a WordPress → Keygin Sync Pro
4. Pegue y de clic en **Activar Licencia**

### Vista del formulario de activación

![Activación del producto]({{ site.baseurl }}/assets/images/config-01.png)

---

## 2. Acceso al módulo de configuración

Desde el panel administrativo de WordPress:

1. Diríjase a **Keygin Sync Pro → Configuración**.
2. Acceda al módulo de conexión ERP.

### Vista general del panel

![Panel de configuración]({{ site.baseurl }}/assets/images/config-02.png)

---

## 3. Ingreso de credenciales ERP

Para establecer la conexión con Contifico, complete los siguientes campos:

- **API Key**
- **API Token**
- **POS**

Estas credenciales permiten la autenticación segura contra la API oficial de Contifico.

> Recomendación: verifique que la API Key esté activa y tenga permisos suficientes.

---

## 4. Verificación de conexión

Una vez ingresadas las credenciales:

1. Presione **Verificar conexión**.
2. Espere la validación del sistema.
3. Confirme que el estado de conexión sea exitoso.
4. Verifique que las bodegas se cargaron en el `select`

Si la conexión falla, revise:

- API Key incorrecta
- Restricciones de firewall o servidor
- Problemas temporales de Contifico

### Resultado de conexión exitosa

![Conexión verificada correctamente]({{ site.baseurl }}/assets/images/config-03.png)

---

## 5. Configuración de bodega principal

Después de validar la conexión:

1. Seleccione la **bodega principal**.
2. Esta bodega será utilizada para:
   - Sincronización de stock
   - Validación de inventario disponible
   - Actualización automática de existencias

Seleccione cuidadosamente la bodega correcta para evitar inconsistencias.

---

## 6. Seleccione una frecuencia para Stock y Productos

Productos y Stock crean dos tareas de sincronización independientes. Stock es más frecuente para evitar errores de trazabilidad.

1. Seleccione una frecuencia para actualizar Stock.
2. Seleccione una frecuencia para actualizar nuevos productos en el inventario.

> Nota: Puede ejecutar una sincronización manual de Productos desde **Panel de Keygin**.

---

## 7. Seleccionar preferencias de sincronización

Despues de escoger la bodega correspondiente:

1. Seleccione dando clic sobre las preferencias que desea sincronizar

> Recomendación: Si desea mantener un SEO mas organizado seleccione solo **Código** (obligatorio) y **Nombre**

### Panel de preferencias de sincronización

![Preferencias de sincronización]({{ site.baseurl }}/assets/images/config-04.png)

---

## 8. Completar datos del Vendedor

Debe completar el formulario con los datos del administrador del sitio del que se realizan los pedido de WooCommerce

- **CI** o **RUC** deben ser válidos.

### Formulario de datos del Vendedor

![Formulario de datos del Vendedor]({{ site.baseurl }}/assets/images/config-05.png)

---

## 9. Guardar cambios

1. Presione **Guardar cambios**.
2. El sistema almacenará la configuración de forma segura.
3. Se activará el motor de sincronización.

---

## Inicio de la sincronización

Tras guardar la configuración:

- Se realizará una validación inicial de productos.
- Se iniciará la sincronización automática de stock (después de haber migrado/sincronizado productos).
- Los eventos podrán consultarse en el módulo de logs.

### Panel de registros de sincronización

![Panel de registros]({{ site.baseurl }}/assets/images/config-06.png)

---

## Tarjetas informativas

Las tarjetas informativas ubicadas en la cabecera le muestran la fechay hora de la siguiente sincronización (Stock y Productos). Tambien muestra la cantidad de Productos sincronizados y el estado de documentos eletrónicos.

### Tarjetas de información

![Estado de sincronización]({{ site.baseurl }}/assets/images/config-07.png)

---

## Buenas prácticas

- Mantenga actualizada las credenciales API que Contifico le entrega en su plan.
- No modifique credenciales durante procesos activos.
- Mantenga WordPress y WooCommerce actualizados.
- Revise periódicamente los logs del sistema.
- Valide que el servidor permita conexiones HTTPS salientes.
