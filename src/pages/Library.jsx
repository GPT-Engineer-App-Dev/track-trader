import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LibraryPage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Item {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LibraryPage;