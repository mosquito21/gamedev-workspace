[English](../sharing.md) · **Español**

# Compartir tu versión

Parte del historial limpio de esta plantilla. Agrega solo los ejemplos e instrucciones
que quieras publicar. Una configuración MCP vacía no oculta un token pegado en
un informe, así que revisa los archivos reales que compartes.

Mantén en local `.env`, `.mrmak`, los archivos de sesión de los agentes, la configuración global, los recibos
crudos de generación y los materiales privados del inbox. El `.gitignore` incluido cubre
las rutas de ejecución habituales. No puede reconocer texto privado que pongas en un archivo
Markdown común.

Usa marcadores genéricos en `context/`. Quita nombres de proyectos personales, enlaces
privados, borradores de mensajes y datos de cuentas de las tarjetas y skills exportadas.
Revisa el contenido multimedia además del texto. Conserva las licencias de terceros y la atribución de fuentes.

Para compartir skills seleccionadas, copia sus carpetas canónicas de `.agents/skills`
con todos los recursos que referencian. Los flujos del repositorio también pueden depender de
`knowledge/`, `processes/` o `scripts/`; lee `docs/skills.md` antes de copiar una
sola carpeta. Las copias completas de `.claude/skills` también se pueden compartir con usuarios
de Claude. Ejecuta `npm run skills:sync` después de cambiar la fuente mantenida.

Un agente que prepara una versión debe ejecutar lint, las pruebas del servicio, las comprobaciones de la plantilla
y la compilación de escritorio. Revisa las cuatro tarjetas iniciales en una sesión nueva del navegador,
inspecciona la lista de archivos preparados y luego publica el código fuente y la suma de verificación del instalador.
