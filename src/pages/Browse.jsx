import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Browse = () => {
  return (
    <div className="space-y-6">
      <Category title="New Releases" />
      <Category title="Genres" />
      <Category title="Moods" />
    </div>
  );
};

const Category = ({ title }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
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
  </div>
);

export default Browse;