import UserProfile from "./UserProfile";

const index = () => {
  return (
    <div>
      <UserProfile
        name="John Doe"
        email="john.doe@example.com"
        phone="123-456-7890"
      />
    </div>
  );
};
export default index;
