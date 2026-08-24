# Módulo Profesional — Plataforma de Tutoría Universitaria

Este paquete contiene el módulo **Profesional** listo para integrarse en una aplicación React / TanStack Start.

## Contenido

- `src/modules/professional/` — Todo el código del módulo (componentes, datos, secciones, assets).
- `integration/` — Archivos del proyecto principal que se modificaron para montar el módulo:
  - `styles.css`: tokens de diseño `--prof-*` y clase `.professional-module`.
  - `__root.tsx`: idioma español y fuente Plus Jakarta Sans.
  - `index.tsx`: ruta raíz donde se renderiza `<ProfessionalModule />`.

## Estructura del módulo

```
src/modules/professional/
├── index.tsx                      # Componente principal con hero y navegación
├── components/
│   └── ui-kit.tsx                 # Componentes visuales reutilizables
├── data/
│   ├── specializations.ts         # 10 ramas de especialización
│   ├── conventions.ts             # Convenios y prácticas
│   ├── companies.ts                 # Empresas relacionadas
│   └── cv.ts                      # Tutorial y evaluación de CV
├── sections/
│   ├── SpecializationsSection.tsx # Selector de especializaciones
│   ├── ConventionsSection.tsx     # Convenios + filtros de prácticas
│   └── CvSection.tsx              # Tutorial CV + evaluación interactiva
└── assets/
    └── hero-professional.jpg      # Imagen del hero
```

## Instalación rápida

1. Copiar `src/modules/professional/` dentro del `src/` de tu proyecto.
2. Aplicar los cambios de `integration/styles.css` en tu CSS global.
3. Aplicar los cambios de `integration/__root.tsx` si usas TanStack Start.
4. Importar y renderizar `<ProfessionalModule />` en la ruta deseada.

## Dependencias

- React 19
- Tailwind CSS v4
- Lucide React (iconos)
- TanStack Start (opcional, solo para la integración de rutas)

Los datos son de demostración y están preparados para reemplazarse por una API real.

## Versión simple HTML / CSS / JavaScript

También se incluye una versión autónoma y fácil de integrar:

- `index.html` — simulación del marco existente de la plataforma y entrada al módulo Profesional.
- `css/professional.css` — estilos encapsulados bajo `.professional-module`.
- `js/data.js` — datos mock de las cuatro subdivisiones y las 10 especializaciones.
- `js/app.js` — navegación y vistas internas de Convenios, Especializaciones, Perfil de egreso y CV.

Para probarla localmente, abre `index.html` mediante un servidor estático. La navegación global es solo una simulación: Inicio funciona como referencia visual y Bienestar, Chatbot y Nosotros quedan como módulos en preparación.

Los archivos originales de React/TanStack se conservaron en `src/` e `integration/` como respaldo.

## Publicación

El archivo `.github/workflows/pages.yml` publica automáticamente la versión HTML/CSS/JavaScript en GitHub Pages cada vez que se actualiza la rama `main`.
