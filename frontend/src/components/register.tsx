import Link from "next/link";

export default function () {
  return (
    <div className="flex justify-center">
      <form className="w-2/6 border my-16 px-8">

        <h2 className="text-4xl font-medium text-center pt-8">
          CREATE ACCOUNT
        </h2>

        <input
          type="fname"
          name="fname"
          placeholder="First Name"
          required
          className="px-4 border py-3 mt-8 rounded-full w-full placeholder:text-gray-500"
        ></input>

        <input
          type="lname"
          name="lname"
          placeholder="Last Name"
          required
          className="px-4 py-3 mt-6 border rounded-full outline-non w-full placeholder:text-gray-500"
        ></input>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="px-4 py-3 mt-6 border rounded-full w-full placeholder:text-gray-500"
        ></input>

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="px-4 py-3 mt-6 border rounded-full w-full placeholder:text-gray-500"
        ></input>

        <input
          type="submit"
          value="CREATE"
          className="bg-red-600 mt-6 font-medium w-full text-white py-3 rounded-full hover:bg-red-700 mb-6"
        />

        <div className="flex justify-center text-red-600 font-medium mb-6">
          <Link href="/" className="underline">
            Return to Store
          </Link>
        </div>
        
      </form>
    </div>
  );
}
