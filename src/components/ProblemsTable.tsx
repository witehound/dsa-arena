import { problems } from "@/data/mock.problems";
import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { youtubeAtomModalState } from "@/atoms/youtubeModal.atom";

export default function ProblemsTable() {
  const updateYoutubeModalState = useSetRecoilState(youtubeAtomModalState);
  const handleOpenYoutubeModal = (videoId: string | undefined) => {
    updateYoutubeModalState((prev) => ({ ...prev, isOpen: true, videoId }));
  };
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
                    onClick={() => {
                      handleOpenYoutubeModal(problem.videoId);
                    }}
                  />
                ) : (
                  <p className=" text-gray-400 cursor-not-allowed">
                    Coming soon
                  </p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
