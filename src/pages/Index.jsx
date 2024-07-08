import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="space-y-6">
      <Section title="Recently Played" />
      <Section title="Recommended for You" />
      <Section title="Top Charts" />
    </div>
  );
};

const Section = ({ title }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <ScrollArea className="flex space-x-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} className="w-48">
          <CardHeader>
            <CardTitle>Song {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
          </CardContent>
        </Card>
      ))}
    </ScrollArea>
  </div>
);

export default Index;