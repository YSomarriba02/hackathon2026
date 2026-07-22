// // app/(main)/layout.tsx
// "use client";

// import { usePathname } from "next/navigation";
// import TabBar from "@/components/TabBar"; // O la ubicación de tu TabBar

// export default function MainLayout({
//   home,
//   search,
//   create,
//   profile,
// }: {
//   home: React.ReactNode;
//   search: React.ReactNode;
//   create: React.ReactNode;
//   profile: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-background">
//       {/* Contenedor dinámico del contenido */}
//       <main className="flex-1 relative overflow-hidden">
//         <div className={`h-full overflow-y-auto ${pathname === '/' || pathname === '/home' ? 'block' : 'hidden'}`}>
//           {home}
//         </div>
//         <div className={`h-full overflow-y-auto ${pathname === '/create' ? 'block' : 'hidden'}`}>
//           {create}
//         </div>
//         <div className={`h-full overflow-y-auto ${pathname === '/search' ? 'block' : 'hidden'}`}>
//           {search}
//         </div>
//         <div className={`h-full overflow-y-auto ${pathname === '/profile' ? 'block' : 'hidden'}`}>
//           {profile}
//         </div>
//       </main>

//       {/* Navegación inferior fija */}
//       <TabBar />
//     </div>
//   );
// }


// app/page.tsx
export default function Page() {
  return <div></div>;
}