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
    <main>
      <HeaderNav />
      <div className="h-full flex-1 bg-background text-foreground overflow-y-hidden">
        <TabManager
          home={home}
          create={create}
          search={search}
          profile={profile}
        />
      </div>
      <TabBar />
    </main>
  );
}