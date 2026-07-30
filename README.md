# 🚀 TrueLink

> Plataforma integral que conecta la oferta y demanda de servicios, insumos y equipos para el ecosistema emprendedor y Clientes, combinando un modelo de subastas con red profesional y marketplace de proveedores.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js** - Framework de React para el cliente.
- **TypeScript** - Tipado estático y código seguro.

### Backend
- **NestJS** - Framework progresivo de Node.js para la API REST.
- **Prisma ORM** - Modelado y gestión de base de datos.
- **PostgreSQL(Supabase)** - Base de datos relacional.

---

## 💡 Módulos Principales del Sistema (en desarrollo)

- **Autenticación & Perfiles:** Registro, roles (Cliente, Emprendedor, Proveedor, Admin) y reputación/score.
- **Solicitudes & Ofertas (Subastas):** Publicación de necesidades con presupuestos y ofertas en tiempo real.
- **Marketplace de Insumos:** Búsqueda y filtrado de materia prima, equipos, transporte y tecnología.
- **Recomendación de Encadenamiento:** Conexión inteligente de múltiples servicios para proyectos complejos.
- **Dashboard de Métricas:** KPIs de ingresos, servicios vendidos y calificaciones para emprendedores.

---

## ⚙️ Requisitos Previos

Asegúrate de tener instalado:
- **Node.js** (v18+)
- **pnpm** (o npm/yarn)
- **PostgreSQL** en ejecución local o en la nube.

---

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
git clone https://github.com/YSomarriba02/hackathon2026
cd hackathon2026

### 2. Configurar el Backend (NestJS)
cd backend
pnpm install

Crea un archivo `.env` en la raíz del backend con la cadena de conexión:
DATABASE_URL="postgresql://usuario##:#######@localhost:5432/#####?schema=public"

Ejecuta las migraciones de Prisma:
npx prisma db push

Inicia el servidor en modo desarrollo:
pnpm run start:dev

### 3. Configurar el Frontend (Next.js)
En otra terminal desde la raíz del proyecto:
cd frontend
pnpm install
pnpm dev

---

## 📁 Estructura del Monorepo

├── backend/          # API REST con NestJS y Prisma
│   ├── src/          # Módulos, servicios y controladores
│   └── prisma/       # Esquema de la base de datos
├── frontend/         # Cliente web con Next.js
└── README.md         # Documentación general

---

## 👥 Equipo
- **Yaser Somarriba** - Developer
- **Pablo Noguera** - Developer
- **Alexis Alvarez** - Developer