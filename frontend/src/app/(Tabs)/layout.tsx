import HeaderNav from "@/components/navigation/HeaderNav";
import TabBar from "@/components/navigation/TabBar";
import TabManager from "@/components/navigation/TabManager";

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
      <main className="h-full flex-1 pb-14 bg-background text-foreground">
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