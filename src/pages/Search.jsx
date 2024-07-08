import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SearchPage = () => {
  return (
    <Tabs defaultValue="songs">
      <TabsList>
        <TabsTrigger value="songs">Songs</TabsTrigger>
        <TabsTrigger value="artists">Artists</TabsTrigger>
        <TabsTrigger value="albums">Albums</TabsTrigger>
      </TabsList>
      <TabsContent value="songs">
        <SearchResults type="Song" />
      </TabsContent>
      <TabsContent value="artists">
        <SearchResults type="Artist" />
      </TabsContent>
      <TabsContent value="albums">
        <SearchResults type="Album" />
      </TabsContent>
    </Tabs>
  );
};

const SearchResults = ({ type }) => (
  <div className="space-y-4">
    {Array.from({ length: 10 }).map((_, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle>{type} {index + 1}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
        </CardContent>
      </Card>
    ))}
  </div>
);

export default SearchPage;