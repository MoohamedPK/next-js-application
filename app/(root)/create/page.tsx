import { auth } from "@/auth"
import StartupForm from "@/components/StartupForm"
import { redirect } from "next/navigation";

const page = async () => {

  const session = await auth();

  if (!session) redirect("/")
  return (
    <>
        <section className="pink-container">
            <h1 className="pink-container-header">Submit Your Startup</h1>
        </section>

        <StartupForm/>
    </>
  )
}

export default page