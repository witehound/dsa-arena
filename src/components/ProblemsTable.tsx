import { problems } from "@/data/mock.problems";
import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";

export default function ProblemsTable() {
  return (
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
          </tr>
        );
      })}
    </tbody>
  );
}
