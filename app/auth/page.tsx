import Auth from "@/Components/Domain/Auth/Auth";
import CopyRight from "@/Components/UI/CopyRight";

export default function AuthPage() {
console.log(process.env.NODE_ENV)
  return (
    <main>
      <Auth />
      <CopyRight />
    </main>
  );
}
