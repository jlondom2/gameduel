import { Article } from "../interfaces/article";
import useUIStore from "../stores/ui.store";
interface Props {
  data: Article | [];
}

export const Pagination = ({ data }: Props) => {
  console.log("🚀 ~ Pagination ~ data:", data);
  const newsPage = useUIStore((state) => state.newsPage);

  const setPage = useUIStore((state) => state.setPage);

  const handlePage = (page: number) => {
    setPage(page);
  };
  return (
    <div>
      <div>
        <nav aria-label="Page navigation">
          <ul className="inline-flex h-10 -space-x-px text-base">
            <li>
              <button
                onClick={() => handlePage(newsPage - 1)}
                disabled={newsPage === 1}
                className="text-gray-500 border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 bg-white px-4 leading-tight hover:bg-blue-100 disabled:cursor-not-allowed disabled:bg-opacity-50 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            <li>
              <a className="text-gray-500 border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 flex h-10 items-center justify-center border bg-white px-4 leading-tight hover:bg-white hover:text-gray-dark">
                Current Page:{" "}
                <span className="ms-1 font-bold text-blue-100">
                  {" "}
                  {newsPage}{" "}
                </span>
              </a>
            </li>

            <li>
              <button
                disabled={newsPage == 10}
                onClick={() => handlePage(newsPage + 1)}
                className="text-gray-500 border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 flex h-10 items-center justify-center rounded-e-lg border bg-white px-4 leading-tight hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
