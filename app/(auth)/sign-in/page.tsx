// @ts-ignore
import AuthForm from "@/components/AuthForm";

const Page = () => {
    return <AuthForm type="sign-in" />
}
export default Page








// "use client"
//
// import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/firebase/client";
// import { signIn as serverSignIn } from "@/lib/actions/auth.action";
//
// export default function SignInPage() {
//     const router = useRouter();
//
//     async function handleSignIn(email: string, password: string) {
//         const userCred = await signInWithEmailAndPassword(auth, email, password);
//         const idToken = await userCred.user.getIdToken();
//
//         await serverSignIn({ email, idToken });
//
//         // Redirect + refresh to make RootLayout see cookie
//         router.push("/");
//         router.refresh();
//     }
//
//     return (
//         <div>
//             <h1>Sign In</h1>
//             {/* Replace with your AuthForm */}
//             <button onClick={() => handleSignIn("test@test.com", "password")}>Sign In</button>
//         </div>
//     );
// }
