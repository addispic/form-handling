import React, { useState } from "react";

// icons
import { CiSearch } from "react-icons/ci";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosWarning } from "react-icons/io";
import { IoSave } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const Home = () => {
  // states
  // cases
  const [cases, setCases] = useState([]);

  //   add new category toggler
  const [addNewCategoryToggler, setAddNewCategoryToggler] = useState(false);
  // category title
  const [categoryTitle, setCategoryTitle] = useState("");
  // category description
  const [categoryDescription, setCategoryDescription] = useState("");
  //   more option one
  const [moreOption_1, setMoreOption_1] = useState(null);
  //   delete category toggler
  const [deleteCategoryToggler, setDeleteCategoryToggler] = useState({
    id_1: null,
    title_1: "",
  });

  // edit case category toggler
  const [editCaseCategoryToggler, setEditCaseCategoryToggler] = useState({
    id_1: null,
    title_1: "",
  });

  // edit category description
  const [editCategoryDescriptionToggler, setEditCategoryDescriptionToggler] =
    useState({
      id_1: null,
      description: "",
    });

  // expander 1
  const [expander_1, setExpander_1] = useState(null);

  // handlers
  // add case category toggler
  const addNewCategoryTogglerHandler = () => {
    setAddNewCategoryToggler(!addNewCategoryToggler);
    setCategoryTitle("");
    setCategoryDescription("");
  };

  // case category title handler
  const categoryTitleHandler = (value) => {
    setCategoryTitle(value);
  };

  // case category description handler
  const categoryDescriptionHandler = (value) => {
    setCategoryDescription(value);
  };

  // add new category submit handler
  const addNewCategorySubmitHandler = () => {
    if (!categoryTitle?.trim() || !categoryDescription?.trim()) {
      alert("Title and Description required");
    } else {
      setCases((prev) => {
        return [
          ...prev,
          {
            id_1: `${Date.now()}`,
            title_1: categoryTitle,
            description: categoryDescription,
          },
        ];
      });
      setCategoryTitle("");
      setCategoryDescription("");
      setAddNewCategoryToggler(false);
    }
  };

  //   more option 1 handler
  const moreOption_1_handler = (id) => {
    if (moreOption_1 === id) {
      setMoreOption_1(null);
    } else {
      setMoreOption_1(id);
    }
  };

  //   delete category toggler handler
  const deleteCategoryTogglerHandler = (id_1, title_1) => {
    setMoreOption_1(null);
    setDeleteCategoryToggler((prev) => {
      return {
        ...prev,
        id_1,
        title_1,
      };
    });
  };

  // cancel delete category conformation handler
  const cancelDeleteCategoryConformationHandler = () => {
    setDeleteCategoryToggler((prev) => {
      return {
        ...prev,
        id_1: null,
        title_1: "",
      };
    });
  };

  // delete category handler
  const deleteCategoryHandler = (id_1) => {
    console.log(id_1);
    let filteredCases = cases?.filter((caseItem) => caseItem?.id_1 !== id_1);
    console.log(filteredCases);
    setCases(filteredCases);
    setDeleteCategoryToggler((prev) => {
      return {
        ...prev,
        id_1: null,
        title_1: "",
      };
    });
  };

  // edit case category toggler
  const editCaseCategoryTogglerHandler = (id_1, title_1) => {
    if (editCaseCategoryToggler?.id_1 === id_1) {
      setEditCaseCategoryToggler((prev) => {
        return {
          ...prev,
          id_1: null,
          title_1: "",
        };
      });
    } else {
      setEditCaseCategoryToggler((prev) => {
        return {
          ...prev,
          id_1,
          title_1,
        };
      });
    }

    setMoreOption_1(null);
  };

  // edit case category input change handler
  const editCaseCategoryTitleInputChangeHandler = (value) => {
    setEditCaseCategoryToggler((prev) => {
      return {
        ...prev,
        title_1: value,
      };
    });
  };

  // save edit case category title
  const saveEditCaseCategoryHandler = (id_1) => {
    let index_1 = cases?.findIndex((caseItem) => caseItem?.id_1 === id_1);
    if (editCaseCategoryToggler?.title_1?.trim()) {
      if (cases[index_1].title_1) {
        cases[index_1].title_1 = editCaseCategoryToggler?.title_1;
        setCases(cases);
      }
    }
    setEditCaseCategoryToggler((prev) => {
      return {
        ...prev,
        id_1: null,
        title_1: "",
      };
    });
  };

  // edit category description handler
  const editCategoryDescriptionTogglerHandler = (id_1, description) => {
    console.log({ id_1, description });
    if (editCategoryDescriptionToggler?.id_1 === id_1) {
      setEditCategoryDescriptionToggler((prev) => {
        return {
          ...prev,
          id_1: null,
          description: "",
        };
      });
    } else {
      setEditCategoryDescriptionToggler((prev) => {
        return {
          ...prev,
          id_1,
          description,
        };
      });
    }
  };

  //   editCategoryDescriptionInputChange
  const editCategoryDescriptionInputChange = (value) => {
    setEditCategoryDescriptionToggler((prev) => {
      return {
        ...prev,
        description: value,
      };
    });
  };

  //   editCaseCategoryDescriptionSubmitHandler
  const editCaseCategoryDescriptionSubmitHandler = () => {
    console.log(editCategoryDescriptionToggler);
    if (editCategoryDescriptionToggler?.description?.trim()) {
      let index_1 = cases?.findIndex(
        (caseItem) => caseItem?.id_1 === editCategoryDescriptionToggler?.id_1
      );
      console.log();
      cases[index_1].description = editCategoryDescriptionToggler?.description;

      setCases(cases);
    }

    setEditCategoryDescriptionToggler((prev) => {
      return {
        ...prev,
        id_1: null,
        description: "",
      };
    });
  };

  //   expander_1_toggler_handler
  const expander_1_toggler_handler = id_1 => {
    if(expander_1 === id_1){
        setExpander_1(null)
    }else {
        setExpander_1(id_1)
    }

    setMoreOption_1(null)
  }

  return (
    <div className="flex-grow px-5">
      {/* add new */}
      <div>
        <header className="flex items-center justify-between p-2 border border-gray-200 rounded-md bg-gray-100">
          <div className="flex items-center gap-3">
            {/* total */}
            <div className="text-xs text-gray-500">
              <span>Total: {cases?.length}</span>
            </div>

            {/* search */}
            <div className="flex items-center gap-1 border bg-white border-gray-200 rounded-md px-1 py-1">
              <CiSearch className="text-lg text-gray-700" />
              <input
                className="w-full focus:outline-none focus:ring-0 p-0 text-sm bg-transparent border-none"
                type="text"
                placeholder="search"
              />
            </div>
          </div>
          <div>
            <button
              className={`flex items-center gap-x-1 px-3 py-1 rounded-md text-white transition-colors ease-in-out duration-150  ${
                addNewCategoryToggler
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
              onClick={() => {
                addNewCategoryTogglerHandler();
              }}
            >
              <MdOutlineAddCircle
                className={`transition-transform ease-in-out duration-150 ${
                  addNewCategoryToggler ? "rotate-45" : "rotate-0"
                }`}
              />
              <span>add new</span>
            </button>
          </div>
        </header>

        {/* input */}
        <div
          className={`my-5 transition-all ease-in-out duration-150 overflow-hidden ${
            addNewCategoryToggler ? "h-[300px]" : "h-0"
          }`}
        >
          <div className="p-2 border border-gray-200 bg-gray-100 rounded-md">
            {/* title */}
            <div className="mb-5 border border-gray-200 rounded-md p-1 bg-white">
              <input
                className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm"
                type="text"
                placeholder="category"
                value={categoryTitle}
                onChange={(e) => {
                  categoryTitleHandler(e.target.value);
                }}
              />
            </div>
            {/* description */}
            <div className="mb-5 border border-gray-200 rounded-md p-1 bg-white">
              <textarea
                value={categoryDescription}
                onChange={(e) => {
                  categoryDescriptionHandler(e.target.value);
                }}
                className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm resize-none h-40"
                placeholder="description"
              ></textarea>
            </div>
            {/* buttons */}
            <div className="flex items-center gap-x-5">
              <button
                className="px-5 py-1 rounded-md bg-gray-700 text-white transition-colors ease-in-out duration-150 hover:bg-gray-600"
                onClick={() => {
                  addNewCategoryTogglerHandler();
                }}
              >
                cancel
              </button>
              <button
                className="px-5 py-1 rounded-md bg-blue-600 text-white transition-colors ease-in-out duration-150 hover:bg-blue-500"
                onClick={() => {
                  addNewCategorySubmitHandler();
                }}
              >
                add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* category list */}
      <div>
        {cases?.length > 0 ? (
          <div>
            {/* title */}
            <div>
              <h1 className="text-gray-500 mb-3">Available Case Categories</h1>
            </div>
            {/* list */}
            {cases?.map((caseItem_1) => {
              return (
                <div
                  key={caseItem_1?.id_1}
                  className="border border-gray-200 p-2 rounded-md mb-3"
                >
                  <header className="flex items-center gap-x-3">
                    {/* text in */}
                    <div className="flex-grow flex items-center gap-x-1">
                      {/* input */}
                      <div
                        className={`flex-grow border px-1.5 py-0.5 ${
                          editCaseCategoryToggler?.id_1 === caseItem_1?.id_1
                            ? "border-green-600"
                            : "border-transparent"
                        }`}
                      >
                        <input
                          className="w-full focus:ring-0 focus:outline-none bg-transparent p-0 border-none"
                          onChange={(e) => {
                            editCaseCategoryTitleInputChangeHandler(
                              e.target.value
                            );
                          }}
                          value={
                            editCaseCategoryToggler?.id_1 === caseItem_1?.id_1
                              ? editCaseCategoryToggler?.title_1
                              : caseItem_1?.title_1
                          }
                          disabled={
                            !(
                              editCaseCategoryToggler?.id_1 === caseItem_1?.id_1
                            )
                          }
                        />
                      </div>
                      {/* save changes btn */}
                      {editCaseCategoryToggler?.id_1 === caseItem_1?.id_1 ? (
                        <div>
                          <button
                            className="tex-lg text-green-600 transition-colors ease-in-out duration-150 hover:text-green-400"
                            onClick={() => {
                              saveEditCaseCategoryHandler(caseItem_1?.id_1);
                            }}
                          >
                            <IoSave />
                          </button>
                        </div>
                      ) : null}
                    </div>
                    {/* action */}
                    <div className="flex items-center relative ">
                      {/* more */}
                      <button
                        className="text-xl text-gray-500 transition-colors ease-in-out duration-150 hover:text-gray-700"
                        onClick={() => {
                          moreOption_1_handler(caseItem_1?.id_1);
                        }}
                      >
                        <IoMdMore />
                      </button>
                      {/* option pop */}
                      <div
                        className={`bg-white shadow-2xl p-3 rounded-md absolute right-0 bottom-[100%] w-max transition-transform ease-in-out duration-150 ${
                          moreOption_1 === caseItem_1?.id_1
                            ? "scale-100"
                            : "scale-0"
                        }`}
                      >
                        {/* edit */}
                        <div
                          className="flex items-center gap-x-3 cursor-pointer py-0.5 border-b border-gray-100 transition-colors ease-in-out duration-150 hover:border-gray-300 text-sm"
                          onClick={() => {
                            editCaseCategoryTogglerHandler(
                              caseItem_1?.id_1,
                              caseItem_1?.title_1
                            );
                          }}
                        >
                          <CiEdit className="text-lg" />
                          <span>edit</span>
                        </div>
                        {/* delete */}
                        <div
                          className="my-1 flex items-center gap-x-3 cursor-pointer py-0.5 border-b border-gray-100 transition-colors ease-in-out duration-150 hover:border-gray-300 text-sm"
                          onClick={() => {
                            deleteCategoryTogglerHandler(
                              caseItem_1?.id_1,
                              caseItem_1?.title_1
                            );
                          }}
                        >
                          <RiDeleteBin6Line className="text-gray-600" />
                          <span>delete</span>
                        </div>
                        {/* edit */}
                        <div
                          className="flex items-center gap-x-3 cursor-pointer py-0.5 border-b border-gray-100 transition-colors ease-in-out duration-150 hover:border-gray-300 text-sm"
                          onClick={() => {
                            expander_1_toggler_handler(caseItem_1?.id_1);
                          }}
                        >
                          <RiMenu2Line className="text-gray-600" />
                          <span>{expander_1 === caseItem_1?.id_1 ? "show less" : "expand"}</span>
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* content  */}
                  <div
                    className={`overflow-hidden ${
                      expander_1 === caseItem_1?.id_1 ? "h-auto" : "h-0"
                    }`}
                  >
                    <div className="border-t border-gray-200 mt-1">
                      {/* description */}
                      <div className="px-2">
                        {/* title */}
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium mt-3">Description</h3>
                          <div>
                            {editCategoryDescriptionToggler?.id_1 ===
                            caseItem_1?.id_1 ? (
                              <button
                                className="text-green-600 transition-colors ease-in-out duration-150 hover:text-green-500"
                                onClick={() => {
                                  editCaseCategoryDescriptionSubmitHandler();
                                }}
                              >
                                <IoSave />
                              </button>
                            ) : (
                              <button
                                className="text-gray-600 transition-colors ease-in-out duration-150 hover:text-gray-700"
                                onClick={() => {
                                  editCategoryDescriptionTogglerHandler(
                                    caseItem_1?.id_1,
                                    caseItem_1?.description
                                  );
                                }}
                              >
                                <FaEdit />
                              </button>
                            )}
                          </div>
                        </div>
                        {/* text */}
                        {editCategoryDescriptionToggler?.id_1 ===
                        caseItem_1?.id_1 ? (
                          <div className="border border-green-600 p-1">
                            <textarea
                              className="resize-none focus:outline-none focus:ring-0 p-0 w-full h-[130px] text-sm"
                              value={
                                editCategoryDescriptionToggler?.id_1 ===
                                caseItem_1?.id_1
                                  ? editCategoryDescriptionToggler.description
                                  : caseItem_1?.description
                              }
                              onChange={(e) => {
                                editCategoryDescriptionInputChange(
                                  e.target.value
                                );
                              }}
                            ></textarea>
                          </div>
                        ) : (
                          <div className="text-sm">
                            <p>{caseItem_1?.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No Cases Yet</div>
        )}
      </div>

      {/* pop ups */}
      {/* delete case category conformation */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-max bg-white p-5 shadow-2xl transition-transform ease-in-out duration-150 ${
          deleteCategoryToggler?.id_1 && deleteCategoryToggler?.title_1
            ? "scale-100"
            : "scale-0"
        }`}
      >
        {/* icon */}
        <div className="flex items-center justify-center">
          <div className="w-[42px] aspect-square rounded-full border-2 border-red-400 bg-red-50 flex items-center justify-center text-red-400 text-xl">
            <IoIosWarning />
          </div>
        </div>
        {/* text */}
        <div className="flex items-center justify-center text-center font-medium my-2">
          <h3>Delete {deleteCategoryToggler?.title_1}</h3>
        </div>
        {/* text */}
        <div className="text-sm text-gray-600 text-center">
          <p>
            Are you sure to delete this category ? Remember, this action is
            undone.
          </p>
        </div>

        {/* buttons */}
        <div className="my-2 mt-5 flex items-center justify-evenly">
          <button
            className="px-5 py-1 rounded-md bg-gray-700 text-white transition-colors ease-in-out duration-150 hover:bg-gray-600"
            onClick={() => {
              cancelDeleteCategoryConformationHandler();
            }}
          >
            Cancel
          </button>
          <button
            className="px-5 py-1 rounded-md bg-red-600 text-white transition-colors ease-in-out duration-150 hover:bg-red-500"
            onClick={() => {
              deleteCategoryHandler(deleteCategoryToggler?.id_1);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
