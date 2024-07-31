import { SearchForm } from "../sidebar/SearchForm";
import { PageBanner } from "../ui/PageBanner";

export const NoSearch = () => {
  return (
    <>
      <PageBanner title={"Search News"} />
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-10">
          <div className="col-span-1 md:col-span-10">
            <div className="section-title-wrap blue">
              <h2 className="section-title medium">
                What are you looking for...?
              </h2>
              <div className="section-title-separator"></div>
            </div>

            <div className="post-preview-showcase">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
