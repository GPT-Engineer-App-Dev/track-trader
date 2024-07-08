import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <strong>Name:</strong> John Doe
          </div>
          <div>
            <strong>Email:</strong> john.doe@example.com
          </div>
          <div>
            <strong>Subscription:</strong> Premium
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;