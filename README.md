# Analytics Dashboard

Un dashboard de analytics moderno y completo construido con React, TypeScript, Tailwind CSS, Zustand y Recharts.

## Características

- **Temas Dual**: Modo oscuro y claro con persistencia en localStorage
- **Gráficos Interactivos**: Usando Recharts con gráficos de área, línea y dona
- **Gestión de Estado**: Zustand para state management eficiente
- **Navegación**: React Router v6 para navegación entre secciones
- **Tablas Funcionales**: Con búsqueda, filtros y paginación
- **Exportación**: Funcionalidad para exportar a Excel y PDF
- **TypeScript**: Tipado estricto en toda la aplicación
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla
- **Componentes Reutilizables**: Arquitectura modular y escalable

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Tecnologías Principales

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Zustand (State Management)
- Recharts (Gráficos)
- React Router v6
- Lucide React (Iconos)
- xlsx + jspdf (Exportación)

## Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables
├── pages/          # Páginas del dashboard
├── store/          # Stores de Zustand
├── hooks/          # Custom hooks
├── types/          # TypeScript types
├── utils/          # Utilidades
├── services/       # Mock data & API
└── config/         # Configuración
```

## Páginas Disponibles

1. **Dashboard Overview** (`/`) - KPIs, gráficos y tabla de usuarios
2. **Detailed Analytics** (`/analytics`) - Analytics detallados con donut chart
3. **User Management** (`/users`) - Gestión de usuarios
4. **Revenue** (`/revenue`) - Transacciones y revenue
5. **Settings** (`/settings`) - Configuración del dashboard

## Servidor de Desarrollo

El servidor está corriendo en: **http://localhost:5174/**
