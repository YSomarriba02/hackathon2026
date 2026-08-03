import HeaderNav from "@/components/HeaderNav";
import TabBar from "@/components/TabBar";
import TabManager from "@/components/TabManager";

export default function TabsLayout({
  children,
  home,
  create,
  search,
  profile,
}: {
  children: React.ReactNode;
  home: React.ReactNode;
  create: React.ReactNode;
  search: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <>
      <HeaderNav />
      <main className="h-full flex-1">
        <TabManager
          home={home}
          create={create}
          search={search}
          profile={profile}
        />
        {children}
      </main>
      <TabBar />
    </>
  );
}