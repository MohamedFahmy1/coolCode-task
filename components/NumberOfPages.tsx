import React from "react";

const NumberOfPages: React.FC<{
  windowSize: number;
  finalData: React.JSX.Element[];
  pageNumber: number;
  pageNumber1Handler: () => void;
  pageNumber2Handler: () => void;
}> = ({
  windowSize,
  finalData,
  pageNumber,
  pageNumber1Handler,
  pageNumber2Handler,
}) => {
  return (
    <>
      {windowSize > 768 ? (
        <div className="pages">
          <p className="arrow">{"<"}</p>
          <div className="numbers">
            <span className="active">1</span>
          </div>
          <p className="arrow">{">"}</p>
        </div>
      ) : (
        <div className="pages">
          <p
            className={pageNumber === 2 ? "arrow active" : "arrow"}
            onClick={pageNumber1Handler}
          >
            {"<"}
          </p>
          <div className="numbers">
            <span
              className={pageNumber === 1 ? "active" : undefined}
              onClick={pageNumber1Handler}
            >
              1
            </span>
            <span
              className={pageNumber === 2 ? "active" : undefined}
              onClick={pageNumber2Handler}
            >
              2
            </span>
          </div>
          <p
            className={pageNumber === 1 ? "arrow active" : "arrow"}
            onClick={pageNumber2Handler}
          >
            {">"}
          </p>
        </div>
      )}
    </>
  );
};

export default NumberOfPages;
