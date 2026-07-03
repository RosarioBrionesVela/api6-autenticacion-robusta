# API 6 - Autenticación Robusta

## Descripción

Este proyecto consiste en el desarrollo de una API REST enfocada en la autenticación segura de usuarios. Su objetivo es proteger el proceso de inicio de sesión mediante mecanismos que reduzcan el riesgo de ataques de fuerza bruta y denegación de servicio (DoS).

La aplicación permite autenticar usuarios registrados utilizando correo electrónico y contraseña, además de implementar controles de seguridad como el bloqueo temporal de cuentas, limitación de solicitudes por dirección IP y generación de tokens JWT para sesiones autenticadas.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- Helmet
- Dotenv
- Express Rate Limit
- Git y GitHub

---

## Dependencias

Las dependencias utilizadas en el proyecto son:

```bash
npm install express
npm install mongoose
npm install dotenv
npm install bcrypt
npm install jsonwebtoken
npm install helmet
npm install express-rate-limit
```

---

## Instalación

1. Clonar el repositorio.

```bash
git clone https://github.com/RosarioBrionesVela/api6-autenticacion-robusta.git
```

2. Entrar a la carpeta del proyecto.

```bash
cd api6-autenticacion
```

3. Instalar las dependencias.

```bash
npm install
```

4. Crear el archivo `.env`.

```env
PORT=5100
MONGO_URI=tu_cadena_de_conexion
JWT_SECRET=tu_clave_secreta
```

5. Ejecutar el proyecto.

```bash
node server.js
```

---

## Estructura del proyecto

```
api6-autenticacion
│
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── app.js
│
├── .env
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## Endpoints

### Obtener información de la API

**GET /**

Respuesta:

```json
{
    "mensaje": "API 6 - Autenticación Robusta"
}
```

---

### Iniciar sesión

**POST /api/v2/auth/login**

Body:

```json
{
    "correo": "chayito@test.com",
    "password": "123456"
}
```

Respuesta:

```json
{
    "mensaje": "Login exitoso",
    "token": "JWT_GENERADO"
}
```

---

## Seguridad implementada

La API incorpora diferentes mecanismos de seguridad para proteger el proceso de autenticación.

### Encriptación de contraseñas

Las contraseñas se almacenan utilizando **bcrypt**, evitando guardar información sensible en texto plano.

### JSON Web Token (JWT)

Cuando el usuario inicia sesión correctamente se genera un token JWT que podrá utilizarse para acceder a recursos protegidos.

### Bloqueo temporal de cuenta

Después de cinco intentos consecutivos con una contraseña incorrecta, la cuenta queda bloqueada durante 15 minutos.

### Rate Limiting

Se limita el número de solicitudes al endpoint de autenticación a un máximo de cinco peticiones por dirección IP cada quince minutos, reduciendo el riesgo de ataques automatizados.

### Helmet

Se utiliza Helmet para agregar encabezados HTTP que fortalecen la seguridad de la aplicación.

---

## Pruebas realizadas

Durante el desarrollo se verificó el funcionamiento de los siguientes casos:

- Inicio de sesión con credenciales correctas.
- Inicio de sesión con contraseña incorrecta.
- Incremento del contador de intentos fallidos.
- Bloqueo temporal después de cinco intentos fallidos.
- Reinicio del contador después de un inicio de sesión exitoso.
- Bloqueo por exceso de solicitudes mediante Rate Limiting.
- Generación correcta del token JWT.

---

## Control de versiones

El desarrollo del proyecto se administró mediante Git utilizando ramas para mantener un flujo de trabajo organizado.

- main
- develop
- feature/api6

Los cambios fueron registrados mediante commits y enviados al repositorio remoto en GitHub.

---

## Autor

Rosario Briones Vela

Ingeniería en Desarrollo y Gestión de Software.