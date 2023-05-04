import { problems } from "@/data/mock.problems";
import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
export default function ProblemsTable() {
  return (
    <>
      {" "}
      <tbody className="text-white ">
        {problems.map((problem, id) => {
          const difficultyColor =
            problem.difficulty == "Easy"
              ? "text-greenn-500"
              : problem.difficulty == "Medium"
              ? "text-yellow-500"
              : "text-red-500";
          return (
            <tr
              className={`${id % 2 == 1 ? "bg-dark-layer-1 " : ""}`}
              key={problem.id}
            >
              <th className=" px-2 py-4 font-thin whitespace-nowrap text-dark-green-s">
                <BsCheckCircle fontSize="18" width="18" />
              </th>

              <td className="px-6 px4">
                <Link
                  className=" hover:text-blue-600 cursor-pointer"
                  href={`/problem/${problem.id}`}
                >
                  {problem.title}
                </Link>
              </td>
              <td className={`px-6 px4 ${difficultyColor}`}>
                {problem.difficulty}
              </td>
              <td className="px-6 px4">{problem.category}</td>

              <td className="px-6 px4">
                {problem.videoId ? (
                  <AiFillYoutube
                    fontSize={"28"}
                    className={"cursor-pointer hover:text-red-600"}
                  />
                ) : (
                  <p className=" text-gray-400">Coming soon</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center ">
        <tr className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute" />
        <tr className="w-full z-50 h-full px-6 relative max-w-4xl">
          <tr className="w-full h-full flex items-center justify-center relative">
            <tr className="w-full relative">
              <IoClose
                fontSize={"35"}
                className="cursor-pointer absolute -top-16 right-0"
              />
              <YouTube
                videoId={"xty7fr-k0TU"}
                loading="lazy"
                iframeClassName="w-full min-h-[500px]"
              />
            </tr>
          </tr>
        </tr>
      </tfoot>
    </>
  );
}
