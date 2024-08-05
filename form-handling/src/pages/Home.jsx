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
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";

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

  //   have sub 2
  const [have_sub_2, set_have_sub_2] = useState(false);

  // title 2
  const [title_2, set_title_2] = useState("");

  //   add sub 1 toggler
  const [add_sub_1_toggler, set_add_sub_1_toggler] = useState(null);

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
    let filteredCases = cases?.filter((caseItem) => caseItem?.id_1 !== id_1);
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
    if (editCategoryDescriptionToggler?.description?.trim()) {
      let index_1 = cases?.findIndex(
        (caseItem) => caseItem?.id_1 === editCategoryDescriptionToggler?.id_1
      );
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
  const expander_1_toggler_handler = (id_1) => {
    if (expander_1 === id_1) {
      setExpander_1(null);
    } else {
      setExpander_1(id_1);
    }

    setMoreOption_1(null);
    set_have_sub_2(false);
    set_title_2("");
  };

  //   title_2_input_change_handler
  const title_2_input_change_handler = (value) => {
    set_title_2(value);
  };

  // add_new_sub_1_submit_handler
  const add_new_sub_1_submit_handler = (id_1) => {
    if (title_2?.trim()) {
      let index_i = cases?.findIndex((caseItem) => caseItem?.id_1 === id_1);
      if (cases[index_i]?.sub_1) {
        if (have_sub_2) {
          cases[index_i]["sub_1"] = [
            ...cases[index_i]["sub_1"],
            { id_2: `${Date.now()}`, title_2, sub_2: [] },
          ];
          setCases(cases);
        } else {
          cases[index_i]["sub_1"] = [
            ...cases[index_i]["sub_1"],
            { id_2: `${Date.now()}`, title_2, services: [] },
          ];
          setCases(cases);
        }
      } else {
        if (have_sub_2) {
          cases[index_i]["sub_1"] = [
            { id_2: `${Date.now()}`, title_2, sub_2: [] },
          ];
          setCases(cases);
        } else {
          cases[index_i]["sub_1"] = [
            { id_2: `${Date.now()}`, title_2, services: [] },
          ];
          setCases(cases);
        }
      }

      set_add_sub_1_toggler(null);
    }

    set_title_2("");
    set_have_sub_2(false);
  };

  //   add_sub_1_toggler_handler
  const add_sub_1_toggler_handler = (id_1) => {
    if (add_sub_1_toggler === id_1) {
      set_add_sub_1_toggler(null);
      set_have_sub_2(false);
      set_title_2("");
    } else {
      set_add_sub_1_toggler(id_1);
    }
  };

  ////////////////////////////////////////////////
  ///////////////// phase two ////////////////////
  ////////////////////////////////////////////////

  // states
  // delete toggler
  const [delete_sub_1_toggler, set_delete_sub_1_toggler] = useState({
    id_1: null,
    title_1: "",
    id_2: null,
    title_2: "",
  });

  // handler
  // delete sub 1 toggler handler
  const delete_sub_1_toggler_handler = (id_1, title_1, id_2, title_2) => {
    set_delete_sub_1_toggler((prev) => {
      return {
        ...prev,
        id_1,
        title_1,
        id_2,
        title_2,
      };
    });
  };

  // cancel delete sub 1 toggler handler
  const cancel_delete_sub_1_toggler_handler = () => {
    set_delete_sub_1_toggler((prev) => {
      return {
        ...prev,
        id_1: null,
        title_1: "",
        id_2: null,
        title_2: "",
      };
    });
  };

  // confirm delete sub 1 toggler
  const confirm_delete_sub_1_toggler_handler = () => {
    let index_1 = cases?.findIndex(
      (caseItem_1) => caseItem_1?.id_1 === delete_sub_1_toggler?.id_1
    );
    cases[index_1]["sub_1"] = cases[index_1]["sub_1"]?.filter(
      (caseItem_2) => caseItem_2?.id_2 !== delete_sub_1_toggler?.id_2
    );
    setCases(cases);
    set_delete_sub_1_toggler((prev) => {
      return {
        ...prev,
        id_1: null,
        title_1: "",
        id_2: null,
        title_2: "",
      };
    });
  };

  // state
  // edit toggler
  const [edit_sub_1_toggler, set_edit_sub_1_toggler] = useState({
    id_1: null,
    id_2: null,
    title_2: "",
  });

  // handler
  // toggler
  const edit_sub_1_toggler_handler = (id_1, id_2, title_2) => {
    set_edit_sub_1_toggler((prev) => {
      return {
        ...prev,
        id_1,
        id_2,
        title_2,
      };
    });
  };

  // input change
  const edit_sub_1_toggler_input_change_handler = (value) => {
    set_edit_sub_1_toggler((prev) => {
      return {
        ...prev,
        title_2: value,
      };
    });
  };

  // save handler
  const save_edit_sub_1_handler = () => {
    if (edit_sub_1_toggler?.title_2?.trim()) {
      let index_1 = cases?.findIndex(
        (caseItem_1) => caseItem_1?.id_1 === edit_sub_1_toggler?.id_1
      );
      let index_2 = cases[index_1]["sub_1"]?.findIndex(
        (caseItem_2) => caseItem_2?.id_2 === edit_sub_1_toggler?.id_2
      );
      cases[index_1]["sub_1"][index_2].title_2 = edit_sub_1_toggler?.title_2;
      setCases(cases);
    } else {
      setCases(cases);
    }
    set_edit_sub_1_toggler((prev) => {
      return {
        ...prev,
        id_1: null,
        id_2: null,
        title_2: "",
      };
    });
  };

  // state
  // add new service 1 toggler
  const [add_new_service_1_toggler, set_add_new_service_1_toggler] = useState({
    id_1: null,
    id_2: null,
    service_1: "",
  });

  // add_new_service_1_toggler_handler
  const add_new_service_1_toggler_handler = (id_1, id_2) => {
    if (
      add_new_service_1_toggler?.id_1 === id_1 &&
      add_new_service_1_toggler?.id_2 === id_2
    ) {
      set_add_new_service_1_toggler((prev) => {
        return {
          ...prev,
          id_1: null,
          id_2: null,
          service_1: "",
        };
      });
    } else {
      set_add_new_service_1_toggler((prev) => {
        return {
          ...prev,
          id_1,
          id_2,
        };
      });
    }
  };

  // add_new_service_1_toggler_input_change_handler
  const add_new_service_1_toggler_input_change_handler = (service_1) => {
    set_add_new_service_1_toggler((prev) => {
      return {
        ...prev,
        service_1,
      };
    });
  };

  // add_new_service_1_submit_handler
  const add_new_service_1_submit_handler = () => {
    if (add_new_service_1_toggler?.service_1?.trim()) {
      let index_1 = cases?.findIndex(
        (caseItem_1) => caseItem_1?.id_1 === add_new_service_1_toggler?.id_1
      );
      let index_2 = cases[index_1]["sub_1"]?.findIndex(
        (caseItem_2) => caseItem_2?.id_2 === add_new_service_1_toggler?.id_2
      );
      cases[index_1]["sub_1"][index_2]["services"] = [
        ...cases[index_1]["sub_1"][index_2]["services"],
        {
          service_1_id: `${Date.now()}`,
          service_1: add_new_service_1_toggler?.service_1,
        },
      ];
      setCases(cases);
      set_add_new_service_1_toggler((prev) => {
        return {
          ...prev,
          id_1: null,
          id_2: null,
          service_1: "",
        };
      });
    }
  };

  // state
  // delete service 1 toggler
  const [delete_service_1_toggler, set_delete_service_1_toggler] = useState({
    id_1: null,
    id_2: null,
    service_1_id: null,
    title_1: "",
    title_2: "",
    service_1: "",
  });

  // handler
  // delete_service_1_toggler_handler
  const delete_service_1_toggler_handler = (
    id_1,
    id_2,
    service_1_id,
    title_1,
    title_2,
    service_1
  ) => {
    set_delete_service_1_toggler((prev) => {
      return {
        ...prev,
        id_1,
        id_2,
        service_1_id,
        title_1,
        title_2,
        service_1,
      };
    });
  };

  // cancel_delete_service_1_conformation
  const cancel_delete_service_1_conformation = () => {
    set_delete_service_1_toggler((prev) => {
      return {
        ...prev,
        id_1: null,
        id_2: null,
        service_1_id: null,
        title_1: "",
        title_2: "",
        service_1: "",
      };
    });
  };

  // confirm_delete_service_1_handler
  const confirm_delete_service_1_handler = () => {
    let { id_1, id_2, service_1_id } = delete_service_1_toggler;

    let index_1 = cases?.findIndex((caseItem_1) => caseItem_1?.id_1 === id_1);
    let index_2 = cases[index_1]["sub_1"]?.findIndex(
      (caseItem_2) => caseItem_2?.id_2 === id_2
    );

    cases[index_1]["sub_1"][index_2]["services"] = cases[index_1]["sub_1"][
      index_2
    ]["services"]?.filter(
      (serviceItem_1) => serviceItem_1?.service_1_id !== service_1_id
    );

    setCases(cases);

    set_delete_service_1_toggler((prev) => {
      return {
        ...prev,
        id_1: null,
        id_2: null,
        service_1_id: null,
        title_1: "",
        title_2: "",
        service_1: "",
      };
    });
  };

  // edit service 1 toggler
  const [edit_service_1_toggler, set_edit_service_1_toggler] = useState({
    id_1: null,
    id_2: null,
    service_1_id: null,
    service_1_input: "",
  });

  // handler
  // edit_service_1_toggler_handler
  const edit_service_1_toggler_handler = (
    id_1,
    id_2,
    service_1_id,
    service_1_input
  ) => {
    set_edit_service_1_toggler((prev) => {
      return {
        ...prev,
        id_1,
        id_2,
        service_1_id,
        service_1_input,
      };
    });
  };

  // service 1 input change handler
  const edit_service_1_toggler_input_change_handler = (service_1_input) => {
    set_edit_service_1_toggler((prev) => {
      return {
        ...prev,
        service_1_input,
      };
    });
  };

  // save edit service 1 changes
  const save_edit_service_1_changes_handler = () => {
    const { id_1, id_2, service_1_id, service_1_input } =
      edit_service_1_toggler;

    if (service_1_input?.trim()) {
      let index_1 = cases?.findIndex((caseItem_1) => caseItem_1?.id_1 === id_1);
      let index_2 = cases[index_1]["sub_1"].findIndex(
        (caseItem_2) => caseItem_2?.id_2 === id_2
      );
      let service_1_index = cases[index_1]["sub_1"][index_2][
        "services"
      ].findIndex(
        (serviceItem_1) => serviceItem_1?.service_1_id === service_1_id
      );
      cases[index_1]["sub_1"][index_2]["services"][service_1_index][
        "service_1"
      ] = service_1_input;
      setCases(cases);
    }

    set_edit_service_1_toggler((prev) => {
      return {
        ...prev,
        id_1: null,
        id_2: null,
        service_1_id: null,
        service_1_input: "",
      };
    });
  };

  // expander 1
  const [expander_2, set_expander_2] = useState({
    id_1: null,
    id_2: null,
  });

  // expander_2_handler
  const expander_2_handler = (id_1, id_2) => {
    if (expander_2?.id_1 === id_1 && expander_2?.id_2 === id_2) {
      set_expander_2((prev) => {
        return {
          ...prev,
          id_1: null,
          id_2: null,
        };
      });
    } else {
      set_expander_2((prev) => {
        return {
          ...prev,
          id_1,
          id_2,
        };
      });
    }
  };

  ////////////////////////////////////////////////
  /////////////////// sub 2 //////////////////////
  ////////////////////////////////////////////////

  // states
  // add sub 2
  const [add_new_sub_2_toggler, set_add_new_sub_2_toggler] = useState({
    id_1: null,
    id_2: null,
    title_3: "",
  });

  // handler
  // add_new_sub_2_toggler_handler
  const add_new_sub_2_toggler_handler = (id_1, id_2) => {
    if (
      add_new_sub_2_toggler?.id_1 === id_1 &&
      add_new_sub_2_toggler?.id_2 === id_2
    ) {
      set_add_new_sub_2_toggler((prev) => {
        return {
          ...prev,
          id_1: null,
          id_2: null,
          title_3: "",
        };
      });
    } else {
      set_add_new_sub_2_toggler((prev) => {
        return {
          ...prev,
          id_1,
          id_2,
          title_3: "",
        };
      });
    }
  };

  // new sub 2 input change handler
  const add_new_sub_2_input_change_handler = (title_3) => {
    set_add_new_sub_2_toggler((prev) => {
      return {
        ...prev,
        title_3,
      };
    });
  };

  // add new sub 2 submit handler
  const add_new_sub_2_submit_handler = () => {
    let { id_1, id_2, title_3 } = add_new_sub_2_toggler;
    if (title_3?.trim()) {
      let index_1 = cases?.findIndex((caseItem_1) => caseItem_1?.id_1 === id_1);
      let index_2 = cases[index_1]["sub_1"].findIndex(
        (caseItem_2) => caseItem_2?.id_2 === id_2
      );
      cases[index_1]["sub_1"][index_2]["sub_2"] = [
        ...cases[index_1]["sub_1"][index_2]["sub_2"],
        { id_3: `${Date.now()}`, title_3, services: [] },
      ];
      setCases(cases);
      add_new_sub_2_toggler_handler(id_1, id_2);
    }
  };

  // delete sub 2
  const [delete_sub_2_toggler, set_delete_sub_2_toggler] = useState({
    id_1: null,
    id_2: null,
    id_3: null,
    title_1: "",
    title_2: "",
    title_3: "",
  });

  // handler
  // delete_sub_2_toggler_handler
  const delete_sub_2_toggler_handler = (
    id_1,
    id_2,
    id_3,
    title_1,
    title_2,
    title_3
  ) => {
    set_delete_sub_2_toggler((prev) => {
      return {
        ...prev,
        id_1,
        id_2,
        id_3,
        title_1,
        title_2,
        title_3,
      };
    });
  };

  // cancel_delete_sub_2_conformation
  const cancel_delete_sub_2_conformation = () => {
    set_delete_sub_2_toggler((prev) => {
      return {
        ...prev,
        id_1: null,
        id_2: null,
        id_3: null,
        title_1: "",
        title_2: "",
        title_3: "",
      };
    });
  };

  // confirm delete sub 2
  const confirm_delete_sub_2_handler = () => {
    const { id_1, id_2, id_3 } = delete_sub_2_toggler;
    let index_1 = cases?.findIndex((caseItem_1) => caseItem_1?.id_1 === id_1);
    let index_2 = cases[index_1]["sub_1"]?.findIndex(
      (caseItem_2) => caseItem_2?.id_2 === id_2
    );
    cases[index_1]["sub_1"][index_2]["sub_2"] = cases[index_1]["sub_1"][
      index_2
    ]["sub_2"]?.filter((caseItem_3) => caseItem_3?.id_3 !== id_3);
    setCases(cases);
    cancel_delete_sub_2_conformation();
    // console.log(cases[index_1]['sub_1'][index_2]['sub_2'])
  };

  // edit sub 2
  const [edit_sub_2_toggler, set_edit_sub_2_toggler] = useState({
    id_1: null,
    id_2: null,
    id_3: null,
    title_3: "",
  });

  // handler
  const edit_sub_2_toggler_handler = (id_1, id_2, id_3, title_3) => {
    set_edit_sub_2_toggler((prev) => {
      return {
        ...prev,
        id_1,
        id_2,
        id_3,
        title_3,
      };
    });
  };

  // input change handler
  const edit_sub_2_input_change_handler = (title_3) => {
    set_edit_sub_2_toggler((prev) => {
      return {
        ...prev,
        title_3,
      };
    });
  };

  // save edit sub 2 change handler
  const save_edit_sub_2_handler = () => {
    const { id_1, id_2, id_3, title_3 } = edit_sub_2_toggler;
    if (title_3?.trim()) {
      let index_1 = cases?.findIndex((caseItem_1) => caseItem_1?.id_1 === id_1);
      let index_2 = cases[index_1]["sub_1"]?.findIndex(
        (caseItem_2) => caseItem_2?.id_2 === id_2
      );
      let index_3 = cases[index_1]["sub_1"][index_2]["sub_2"]?.findIndex(
        (caseItem_3) => caseItem_3?.id_3 === id_3
      );
      cases[index_1]["sub_1"][index_2]["sub_2"][index_3]["title_3"] = title_3;
      setCases(cases);
    }

    set_edit_sub_2_toggler((prev) => {
      return {
        ...prev,
        id_1: null,
        id_2: null,
        id_3: null,
        title_3: "",
      };
    });
  };

  return (
    <div className="flex-grow px-5 text-[.85rem]">
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
                          <span>
                            {expander_1 === caseItem_1?.id_1
                              ? "show less"
                              : "expand"}
                          </span>
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

                      {/* first sub */}
                      <div>
                        {/* header */}
                        <header className="flex items-center justify-between pl-2 mt-2">
                          {/* left */}
                          <div className="flex items-center gap-x-3">
                            {/* title */}
                            <div className="text-[.85rem] font-medium">
                              <p>{caseItem_1?.title_1} sub cases</p>
                            </div>
                            {/* number */}
                            <div className="text-gray-600 text-xs">
                              <span>{caseItem_1?.sub_1?.length}</span>
                            </div>
                          </div>
                          {/* right */}
                          <div>
                            <button
                              className={`flex items-center gap-x-1 px-3 py-1 rounded-md text-white transition-colors ease-in-out duration-150  ${
                                add_sub_1_toggler === caseItem_1?.id_1
                                  ? "bg-red-600 hover:bg-red-500"
                                  : "bg-blue-600 hover:bg-blue-500"
                              }`}
                              onClick={() => {
                                add_sub_1_toggler_handler(caseItem_1?.id_1);
                              }}
                            >
                              <MdOutlineAddCircle
                                className={`transition-transform ease-in-out duration-150 ${
                                  add_sub_1_toggler ? "rotate-45" : "rotate-0"
                                }`}
                              />
                              <span>add sub case</span>
                            </button>
                          </div>
                        </header>

                        {/* input */}
                        <div
                          className={`my-3 transition-all ease-in-out duration-150 overflow-hidden ${
                            add_sub_1_toggler ? "h-[130px]" : "h-0"
                          }`}
                        >
                          <div className="ml-2 p-2 border border-gray-200 bg-gray-100 rounded-md">
                            {/* input */}
                            <div className="mb-3 border border-gray-200 rounded-md p-1 bg-white">
                              <input
                                className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm"
                                type="text"
                                placeholder="sub case"
                                value={title_2}
                                onChange={(e) => {
                                  title_2_input_change_handler(e.target.value);
                                }}
                              />
                            </div>
                            {/* have sub list */}
                            <div className="flex items-center gap-1">
                              <div>
                                <div
                                  className={`w-[16px] cursor-pointer aspect-square border transition-colors ease-in-out duration-150  flex items-center justify-center text-xs  ${
                                    have_sub_2
                                      ? "border-blue-500 text-white bg-blue-500 "
                                      : "border-gray-400 text-gray-400 bg-white"
                                  }`}
                                  onClick={() => {
                                    set_have_sub_2(!have_sub_2);
                                  }}
                                >
                                  <FaCheck />
                                </div>
                              </div>
                              <div
                                className="text-gray-500 transition-colors ease-in-out duration-150 hover:text-gray-700 cursor-pointer"
                                onClick={() => {
                                  set_have_sub_2(!have_sub_2);
                                }}
                              >
                                <p>have sub list?</p>
                              </div>
                            </div>
                            {/* buttons */}
                            <div className="flex items-center gap-x-5 mt-5">
                              <button
                                className="px-5 py-1 rounded-md bg-gray-700 text-white transition-colors ease-in-out duration-150 hover:bg-gray-600"
                                onClick={() => {
                                  add_sub_1_toggler_handler(caseItem_1?.id_1);
                                }}
                              >
                                cancel
                              </button>
                              <button
                                className="px-5 py-1 rounded-md bg-blue-600 text-white transition-colors ease-in-out duration-150 hover:bg-blue-500"
                                onClick={() => {
                                  add_new_sub_1_submit_handler(
                                    caseItem_1?.id_1
                                  );
                                }}
                              >
                                add sub case
                              </button>
                            </div>
                          </div>
                        </div>

                        {/*
                         **********************************************
                         *************** phase two ********************
                         **********************************************
                         **************** sub 1 list ******************
                         **********************************************
                         */}
                        {caseItem_1?.sub_1?.length > 0 ? (
                          <div className="ml-2">
                            <div>
                              {caseItem_1?.sub_1?.map((caseItem_2) => {
                                return (
                                  <div key={caseItem_2?.id_2}>
                                    <div className="border border-gray-200 rounded-md p-2 mb-3">
                                      {/* header */}
                                      <header className="flex items-center gap-x-3">
                                        {/* left */}
                                        <div className="flex-grow">
                                          {/* input */}
                                          <div
                                            className={`flex-grow border px-1.5 py-0.5 ${
                                              edit_sub_1_toggler?.id_1 ===
                                                caseItem_1?.id_1 &&
                                              edit_sub_1_toggler?.id_2 ===
                                                caseItem_2?.id_2
                                                ? "border-green-600"
                                                : "border-transparent"
                                            }`}
                                          >
                                            <input
                                              className="w-full focus:ring-0 focus:outline-none bg-transparent p-0 border-none"
                                              onChange={(e) => {
                                                edit_sub_1_toggler_input_change_handler(
                                                  e.target.value
                                                );
                                              }}
                                              value={
                                                edit_sub_1_toggler?.id_1 ===
                                                  caseItem_1?.id_1 &&
                                                edit_sub_1_toggler?.id_2 ===
                                                  caseItem_2?.id_2
                                                  ? edit_sub_1_toggler?.title_2
                                                  : caseItem_2?.title_2
                                              }
                                              disabled={
                                                !(
                                                  edit_sub_1_toggler?.id_1 ===
                                                    caseItem_1?.id_1 &&
                                                  edit_sub_1_toggler?.id_2 ===
                                                    caseItem_2?.id_2
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                        {/* right */}
                                        <div className="flex items-center justify-end gap-x-1.5">
                                          {/* edit & save button */}
                                          {edit_sub_1_toggler?.id_1 ===
                                            caseItem_1?.id_1 &&
                                          edit_sub_1_toggler?.id_2 ===
                                            caseItem_2?.id_2 ? (
                                            <button
                                              className="flex items-center justify-center text-xl border border-green-400 rounded-sm transition-colors ease-in-out duration-150 hover:border-green-600 text-green-400 hover:text-green-600"
                                              onClick={() => {
                                                save_edit_sub_1_handler();
                                              }}
                                            >
                                              <AiOutlineSave />
                                            </button>
                                          ) : (
                                            <button
                                              className="flex items-center justify-center text-xl border border-gray-200 rounded-sm transition-colors ease-in-out duration-150 hover:border-gray-500"
                                              onClick={() => {
                                                edit_sub_1_toggler_handler(
                                                  caseItem_1?.id_1,
                                                  caseItem_2?.id_2,
                                                  caseItem_2?.title_2
                                                );
                                              }}
                                            >
                                              <CiEdit />
                                            </button>
                                          )}
                                          {/* delete */}
                                          <button
                                            className="flex items-center justify-center p-0.5 border border-red-400 rounded-sm transition-colors ease-in-out duration-150 hover:border-red-600 text-sm text-red-400 hover:text-red-600"
                                            onClick={() => {
                                              delete_sub_1_toggler_handler(
                                                caseItem_1?.id_1,
                                                caseItem_1?.title_1,
                                                caseItem_2?.id_2,
                                                caseItem_2?.title_2
                                              );
                                            }}
                                          >
                                            <RiDeleteBin6Line />
                                          </button>
                                          {/* toggler */}
                                          <button
                                            className="flex items-center justify-center text-xl border border-gray-200 rounded-sm transition-colors ease-in-out duration-150 hover:border-gray-500"
                                            onClick={() => {
                                              expander_2_handler(
                                                caseItem_1?.id_1,
                                                caseItem_2?.id_2
                                              );
                                            }}
                                          >
                                            <MdKeyboardArrowDown
                                              className={`transition-transform ease-in-out duration-150 ${
                                                expander_2?.id_1 ===
                                                  caseItem_1?.id_1 &&
                                                expander_2?.id_2 ===
                                                  caseItem_2?.id_2
                                                  ? "-rotate-180"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>
                                      </header>

                                      {/* content */}
                                      <div
                                        className={`ml-2 overflow-hidden ${
                                          expander_2?.id_1 ===
                                            caseItem_1?.id_1 &&
                                          expander_2?.id_2 === caseItem_2?.id_2
                                            ? "h-auto"
                                            : "h-0"
                                        }`}
                                      >
                                        <div className="mt-2 border-t border-gray-200 pt-1">
                                          {caseItem_2?.services ? (
                                            <div>
                                              {/* header */}
                                              <header className="flex items-center justify-between pl-2 mt-2">
                                                {/* left */}
                                                <div className="flex items-center gap-x-3">
                                                  {/* title */}
                                                  <div className="text-[.85rem] font-medium">
                                                    <p>
                                                      services related to{" "}
                                                      {caseItem_2?.title_2}
                                                    </p>
                                                  </div>
                                                  {/* number */}
                                                  <div className="text-gray-600 text-xs">
                                                    <span>
                                                      {
                                                        caseItem_2?.services
                                                          ?.length
                                                      }
                                                    </span>
                                                  </div>
                                                </div>
                                                {/* right */}
                                                <div>
                                                  <button
                                                    className={`flex items-center gap-x-1 px-3 py-1 rounded-md text-white transition-colors ease-in-out duration-150  ${
                                                      add_new_service_1_toggler?.id_1 ===
                                                        caseItem_1?.id_1 &&
                                                      add_new_service_1_toggler?.id_2 ===
                                                        caseItem_2?.id_2
                                                        ? "bg-red-600 hover:bg-red-500"
                                                        : "bg-blue-600 hover:bg-blue-500"
                                                    }`}
                                                    onClick={() => {
                                                      add_new_service_1_toggler_handler(
                                                        caseItem_1?.id_1,
                                                        caseItem_2?.id_2
                                                      );
                                                    }}
                                                  >
                                                    <MdOutlineAddCircle
                                                      className={`transition-transform ease-in-out duration-150 ${
                                                        add_new_service_1_toggler?.id_1 ===
                                                          caseItem_1?.id_1 &&
                                                        add_new_service_1_toggler?.id_2 ===
                                                          caseItem_2?.id_2
                                                          ? "rotate-45"
                                                          : "rotate-0"
                                                      }`}
                                                    />
                                                    <span>add new service</span>
                                                  </button>
                                                </div>
                                              </header>
                                              {/* input */}
                                              <div
                                                className={`my-3 transition-all ease-in-out duration-150 overflow-hidden ${
                                                  add_new_service_1_toggler?.id_1 ===
                                                    caseItem_1?.id_1 &&
                                                  add_new_service_1_toggler?.id_2 ===
                                                    caseItem_2?.id_2
                                                    ? "h-[130px]"
                                                    : "h-0"
                                                }`}
                                              >
                                                <div className="ml-2 p-2 border border-gray-200 bg-gray-100 rounded-md">
                                                  {/* input */}
                                                  <div className="mb-3 border border-gray-200 rounded-md p-1 bg-white">
                                                    <input
                                                      className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm"
                                                      type="text"
                                                      placeholder="service"
                                                      value={
                                                        add_new_service_1_toggler?.service_1
                                                      }
                                                      onChange={(e) => {
                                                        add_new_service_1_toggler_input_change_handler(
                                                          e.target.value
                                                        );
                                                      }}
                                                    />
                                                  </div>
                                                  {/* buttons */}
                                                  <div className="flex items-center gap-x-5 mt-5">
                                                    <button
                                                      className="px-5 py-1 rounded-md bg-gray-700 text-white transition-colors ease-in-out duration-150 hover:bg-gray-600"
                                                      onClick={() => {
                                                        add_new_service_1_toggler_handler(
                                                          caseItem_1?.id_1,
                                                          caseItem_2?.id_2
                                                        );
                                                      }}
                                                    >
                                                      cancel
                                                    </button>
                                                    <button
                                                      className="px-5 py-1 rounded-md bg-blue-600 text-white transition-colors ease-in-out duration-150 hover:bg-blue-500"
                                                      onClick={() => {
                                                        add_new_service_1_submit_handler();
                                                      }}
                                                    >
                                                      add service
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              {caseItem_2?.services?.length >
                                              0 ? (
                                                <div>
                                                  {caseItem_2?.services?.map(
                                                    (serviceItem_1) => {
                                                      return (
                                                        <div
                                                          key={
                                                            serviceItem_1?.service_1_id
                                                          }
                                                          className="border border-gray-200 rounded-md p-2 mb-3"
                                                        >
                                                          <header className="flex items-center gap-x-3">
                                                            {/* left */}
                                                            <div className="flex-grow">
                                                              {/* input */}
                                                              <div
                                                                className={`flex-grow border px-1.5 py-0.5 ${
                                                                  edit_service_1_toggler?.id_1 ===
                                                                    caseItem_1?.id_1 &&
                                                                  edit_service_1_toggler?.id_2 ===
                                                                    caseItem_2?.id_2 &&
                                                                  edit_service_1_toggler?.service_1_id ===
                                                                    serviceItem_1?.service_1_id
                                                                    ? "border-green-600"
                                                                    : "border-transparent"
                                                                }`}
                                                              >
                                                                <input
                                                                  className="w-full focus:ring-0 focus:outline-none bg-transparent p-0 border-none"
                                                                  onChange={(
                                                                    e
                                                                  ) => {
                                                                    edit_service_1_toggler_input_change_handler(
                                                                      e.target
                                                                        .value
                                                                    );
                                                                  }}
                                                                  value={
                                                                    edit_service_1_toggler?.id_1 ===
                                                                      caseItem_1?.id_1 &&
                                                                    edit_service_1_toggler?.id_2 ===
                                                                      caseItem_2?.id_2 &&
                                                                    edit_service_1_toggler?.service_1_id ===
                                                                      serviceItem_1?.service_1_id
                                                                      ? edit_service_1_toggler?.service_1_input
                                                                      : serviceItem_1?.service_1
                                                                  }
                                                                  disabled={
                                                                    !(
                                                                      edit_service_1_toggler?.id_1 ===
                                                                        caseItem_1?.id_1 &&
                                                                      edit_service_1_toggler?.id_2 ===
                                                                        caseItem_2?.id_2 &&
                                                                      edit_service_1_toggler?.service_1_id ===
                                                                        serviceItem_1?.service_1_id
                                                                    )
                                                                  }
                                                                />
                                                              </div>
                                                            </div>
                                                            {/* right */}
                                                            <div className="flex items-center justify-end gap-x-1.5">
                                                              {/* edit & save button */}
                                                              {edit_service_1_toggler?.id_1 ===
                                                                caseItem_1?.id_1 &&
                                                              edit_service_1_toggler?.id_2 ===
                                                                caseItem_2?.id_2 &&
                                                              edit_service_1_toggler?.service_1_id ===
                                                                serviceItem_1?.service_1_id ? (
                                                                <button
                                                                  className="flex items-center justify-center text-xl border border-green-400 rounded-sm transition-colors ease-in-out duration-150 hover:border-green-600 text-green-400 hover:text-green-600"
                                                                  onClick={() => {
                                                                    save_edit_service_1_changes_handler();
                                                                  }}
                                                                >
                                                                  <AiOutlineSave />
                                                                </button>
                                                              ) : (
                                                                <button
                                                                  className="flex items-center justify-center text-xl border border-gray-200 rounded-sm transition-colors ease-in-out duration-150 hover:border-gray-500"
                                                                  onClick={() => {
                                                                    edit_service_1_toggler_handler(
                                                                      caseItem_1?.id_1,
                                                                      caseItem_2?.id_2,
                                                                      serviceItem_1?.service_1_id,
                                                                      serviceItem_1?.service_1
                                                                    );
                                                                  }}
                                                                >
                                                                  <CiEdit />
                                                                </button>
                                                              )}
                                                              {/* delete */}
                                                              <button
                                                                className="flex items-center justify-center p-0.5 border border-red-400 rounded-sm transition-colors ease-in-out duration-150 hover:border-red-600 text-sm text-red-400 hover:text-red-600"
                                                                onClick={() => {
                                                                  delete_service_1_toggler_handler(
                                                                    caseItem_1?.id_1,
                                                                    caseItem_2?.id_2,
                                                                    serviceItem_1?.service_1_id,
                                                                    caseItem_1?.title_1,
                                                                    caseItem_2?.title_2,
                                                                    serviceItem_1?.service_1
                                                                  );
                                                                }}
                                                              >
                                                                <RiDeleteBin6Line />
                                                              </button>
                                                            </div>
                                                          </header>
                                                        </div>
                                                      );
                                                    }
                                                  )}
                                                </div>
                                              ) : (
                                                <div className={`ml-2`}>
                                                  <div>
                                                    <div>
                                                      <p>
                                                        add new service hint
                                                        Lorem ipsum dolor sit
                                                        amet consectetur
                                                        adipisicing elit. Sed
                                                        mollitia reiciendis
                                                        dignissimos.
                                                      </p>
                                                    </div>
                                                    <button
                                                      className="text-blue-500 transition-colors ease-in-out duration-150 hover:text-blue-600 hover:underline"
                                                      onClick={() => {
                                                        add_new_service_1_toggler_handler(
                                                          caseItem_1?.id_1,
                                                          caseItem_2?.id_2
                                                        );
                                                      }}
                                                    >
                                                      add new service
                                                    </button>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          ) : caseItem_2?.sub_2 ? (
                                            <div>
                                              {/*
                                               **********************************************
                                               *************** phase two ********************
                                               **********************************************
                                               ***************** sub 2  *********************
                                               **********************************************
                                               */}
                                              <div>
                                                {/* header */}
                                                <header className="flex items-center justify-between pl-2 mt-2">
                                                  {/* left */}
                                                  <div className="flex items-center gap-x-3">
                                                    {/* title */}
                                                    <div className="text-[.85rem] font-medium">
                                                      <p>
                                                        {caseItem_2?.title_2}{" "}
                                                        sub cases
                                                      </p>
                                                    </div>
                                                    {/* number */}
                                                    <div className="text-gray-600 text-xs">
                                                      <span>
                                                        {
                                                          caseItem_2?.sub_2
                                                            ?.length
                                                        }
                                                      </span>
                                                    </div>
                                                  </div>
                                                  {/* right */}
                                                  <div>
                                                    <button
                                                      className={`flex items-center gap-x-1 px-3 py-1 rounded-md text-white transition-colors ease-in-out duration-150  ${
                                                        add_new_sub_2_toggler?.id_1 ===
                                                          caseItem_1?.id_1 &&
                                                        add_new_sub_2_toggler?.id_2 ===
                                                          caseItem_2?.id_2
                                                          ? "bg-red-600 hover:bg-red-500"
                                                          : "bg-blue-600 hover:bg-blue-500"
                                                      }`}
                                                      onClick={() => {
                                                        add_new_sub_2_toggler_handler(
                                                          caseItem_1?.id_1,
                                                          caseItem_2?.id_2
                                                        );
                                                      }}
                                                    >
                                                      <MdOutlineAddCircle
                                                        className={`transition-transform ease-in-out duration-150 ${
                                                          add_new_sub_2_toggler?.id_1 ===
                                                            caseItem_1?.id_1 &&
                                                          add_new_sub_2_toggler?.id_2 ===
                                                            caseItem_2?.id_2
                                                            ? "rotate-45"
                                                            : "rotate-0"
                                                        }`}
                                                      />
                                                      <span>add sub case</span>
                                                    </button>
                                                  </div>
                                                </header>

                                                {/* input */}
                                                <div
                                                  className={`my-3 transition-all ease-in-out duration-150 overflow-hidden ${
                                                    add_new_sub_2_toggler?.id_1 ===
                                                      caseItem_1?.id_1 &&
                                                    add_new_sub_2_toggler?.id_2 ===
                                                      caseItem_2?.id_2
                                                      ? "h-[130px]"
                                                      : "h-0"
                                                  }`}
                                                >
                                                  <div className="ml-2 p-2 border border-gray-200 bg-gray-100 rounded-md">
                                                    {/* input */}
                                                    <div className="mb-3 border border-gray-200 rounded-md p-1 bg-white">
                                                      <input
                                                        className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm"
                                                        type="text"
                                                        placeholder="sub case"
                                                        value={
                                                          add_new_sub_2_toggler?.title_3
                                                        }
                                                        onChange={(e) => {
                                                          add_new_sub_2_input_change_handler(
                                                            e.target.value
                                                          );
                                                        }}
                                                      />
                                                    </div>
                                                    {/* buttons */}
                                                    <div className="flex items-center gap-x-5 mt-5">
                                                      <button
                                                        className="px-5 py-1 rounded-md bg-gray-700 text-white transition-colors ease-in-out duration-150 hover:bg-gray-600"
                                                        onClick={() => {
                                                          add_new_sub_2_toggler_handler(
                                                            caseItem_1?.id_1,
                                                            caseItem_2?.id_2
                                                          );
                                                        }}
                                                      >
                                                        cancel
                                                      </button>
                                                      <button
                                                        className="px-5 py-1 rounded-md bg-blue-600 text-white transition-colors ease-in-out duration-150 hover:bg-blue-500"
                                                        onClick={() => {
                                                          add_new_sub_2_submit_handler();
                                                        }}
                                                      >
                                                        add sub case
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>

                                                {caseItem_2?.sub_2?.length >
                                                0 ? (
                                                  <div>
                                                    {caseItem_2?.sub_2?.map(
                                                      (caseItem_3) => {
                                                        return (
                                                          <div
                                                            key={
                                                              caseItem_3?.id_3
                                                            }
                                                            className="border border-gray-200 rounded-md p-2 mb-3"
                                                          >
                                                            {/* header */}
                                                            <header className="flex items-center gap-x-3">
                                                              {/* left */}
                                                              <div className="flex-grow">
                                                                {/* input */}
                                                                <div
                                                                  className={`flex-grow border px-1.5 py-0.5 ${
                                                                    edit_sub_2_toggler?.id_1 ===
                                                                      caseItem_1?.id_1 &&
                                                                    edit_sub_2_toggler?.id_2 ===
                                                                      caseItem_2?.id_2 &&
                                                                    edit_sub_2_toggler?.id_3 ===
                                                                      caseItem_3?.id_3
                                                                      ? "border-green-600"
                                                                      : "border-transparent"
                                                                  }`}
                                                                >
                                                                  <input
                                                                    className="w-full focus:ring-0 focus:outline-none bg-transparent p-0 border-none"
                                                                    onChange={(
                                                                      e
                                                                    ) => {
                                                                      edit_sub_2_input_change_handler(
                                                                        e.target
                                                                          .value
                                                                      );
                                                                    }}
                                                                    value={
                                                                      edit_sub_2_toggler?.id_1 ===
                                                                        caseItem_1?.id_1 &&
                                                                      edit_sub_2_toggler?.id_2 ===
                                                                        caseItem_2?.id_2 &&
                                                                      edit_sub_2_toggler?.id_3 ===
                                                                        caseItem_3?.id_3
                                                                        ? edit_sub_2_toggler?.title_3
                                                                        : caseItem_3?.title_3
                                                                    }
                                                                    disabled={
                                                                      !(
                                                                        edit_sub_2_toggler?.id_1 ===
                                                                          caseItem_1?.id_1 &&
                                                                        edit_sub_2_toggler?.id_2 ===
                                                                          caseItem_2?.id_2 &&
                                                                        edit_sub_2_toggler?.id_3 ===
                                                                          caseItem_3?.id_3
                                                                      )
                                                                    }
                                                                  />
                                                                </div>
                                                              </div>
                                                              {/* right */}
                                                              <div className="flex items-center justify-end gap-x-1.5">
                                                                {/* edit & save button */}
                                                                {edit_sub_2_toggler?.id_1 ===
                                                                  caseItem_1?.id_1 &&
                                                                edit_sub_2_toggler?.id_2 ===
                                                                  caseItem_2?.id_2 &&
                                                                edit_sub_2_toggler?.id_3 ===
                                                                  caseItem_3?.id_3 ? (
                                                                  <button
                                                                    className="flex items-center justify-center text-xl border border-green-400 rounded-sm transition-colors ease-in-out duration-150 hover:border-green-600 text-green-400 hover:text-green-600"
                                                                    onClick={() => {
                                                                      save_edit_sub_2_handler();
                                                                    }}
                                                                  >
                                                                    <AiOutlineSave />
                                                                  </button>
                                                                ) : (
                                                                  <button
                                                                    className="flex items-center justify-center text-xl border border-gray-200 rounded-sm transition-colors ease-in-out duration-150 hover:border-gray-500"
                                                                    onClick={() => {
                                                                      edit_sub_2_toggler_handler(
                                                                        caseItem_1?.id_1,
                                                                        caseItem_2?.id_2,
                                                                        caseItem_3?.id_3,
                                                                        caseItem_3?.title_3
                                                                      );
                                                                    }}
                                                                  >
                                                                    <CiEdit />
                                                                  </button>
                                                                )}
                                                                {/* delete */}
                                                                <button
                                                                  className="flex items-center justify-center p-0.5 border border-red-400 rounded-sm transition-colors ease-in-out duration-150 hover:border-red-600 text-sm text-red-400 hover:text-red-600"
                                                                  onClick={() => {
                                                                    delete_sub_2_toggler_handler(
                                                                      caseItem_1?.id_1,
                                                                      caseItem_2?.id_2,
                                                                      caseItem_3?.id_3,
                                                                      caseItem_1?.title_1,
                                                                      caseItem_2?.title_2,
                                                                      caseItem_3?.title_3
                                                                    );
                                                                  }}
                                                                >
                                                                  <RiDeleteBin6Line />
                                                                </button>
                                                                {/* toggler */}
                                                                <button
                                                                  className="flex items-center justify-center text-xl border border-gray-200 rounded-sm transition-colors ease-in-out duration-150 hover:border-gray-500"
                                                                  onClick={() => {
                                                                    // expander_2_handler(
                                                                    //   caseItem_1?.id_1,
                                                                    //   caseItem_2?.id_2
                                                                    // );
                                                                  }}
                                                                >
                                                                  <MdKeyboardArrowDown
                                                                    className={`transition-transform ease-in-out duration-150 ${
                                                                      !true
                                                                        ? "-rotate-180"
                                                                        : "rotate-0"
                                                                    }`}
                                                                  />
                                                                </button>
                                                              </div>
                                                            </header>
                                                          </div>
                                                        );
                                                      }
                                                    )}
                                                  </div>
                                                ) : (
                                                  <div>
                                                    <div>
                                                      <div>
                                                        <p>
                                                          add new sub sub case
                                                          hint text Lorem ipsum
                                                          dolor sit amet
                                                          consectetur
                                                          adipisicing elit.
                                                          Laboriosam, maiores?
                                                        </p>
                                                      </div>
                                                      <button
                                                        className="text-blue-500 transition-colors ease-in-out duration-150 hover:text-blue-700 hover:underline"
                                                        onClick={() => {
                                                          add_new_sub_2_toggler_handler(
                                                            caseItem_1?.id_1,
                                                            caseItem_2?.id_2
                                                          );
                                                        }}
                                                      >
                                                        add new sub case
                                                      </button>
                                                    </div>
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="ml-2">
                              <div>
                                <p>
                                  add sub list hint Lorem ipsum dolor sit, amet
                                  consectetur adipisicing elit. Impedit dolores
                                  debitis laborum laudantium, et provident
                                  reiciendis modi maiores!
                                </p>
                              </div>
                              <button
                                className="text-blue-600 transition-colors ease-in-out duration-150 hover:text-blue-700 hover:underline"
                                onClick={() => {
                                  add_sub_1_toggler_handler(caseItem_1?.id_1);
                                }}
                              >
                                add new sub list
                              </button>
                            </div>
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
          <h3>
            Delete{" "}
            <span className="text-red-700">
              {deleteCategoryToggler?.title_1}
            </span>
          </h3>
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
      {/* delete sub 1 conformation pop up */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-max bg-white p-5 shadow-2xl transition-transform ease-in-out duration-150 ${
          delete_sub_1_toggler?.id_1 &&
          delete_sub_1_toggler?.title_1 &&
          delete_sub_1_toggler?.id_2 &&
          delete_sub_1_toggler?.title_2
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
          <h3>
            Delete {delete_sub_1_toggler?.title_1}-
            <span className="text-red-700">
              {delete_sub_1_toggler?.title_2}
            </span>
          </h3>
        </div>
        {/* text */}
        <div className="text-sm text-gray-600 text-center">
          <p>
            Are you sure to delete this sub case ? Remember, this action is
            undone.
          </p>
        </div>

        {/* buttons */}
        <div className="my-2 mt-5 flex items-center justify-evenly">
          <button
            className="px-5 py-1 rounded-md bg-gray-700 text-white transition-colors ease-in-out duration-150 hover:bg-gray-600"
            onClick={() => {
              cancel_delete_sub_1_toggler_handler();
            }}
          >
            Cancel
          </button>
          <button
            className="px-5 py-1 rounded-md bg-red-600 text-white transition-colors ease-in-out duration-150 hover:bg-red-500"
            onClick={() => {
              confirm_delete_sub_1_toggler_handler();
            }}
          >
            Delete
          </button>
        </div>
      </div>

      {/* delete service 1 conformation pop up */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-max bg-white p-5 shadow-2xl transition-transform ease-in-out duration-150 ${
          delete_service_1_toggler?.id_1 &&
          delete_service_1_toggler?.id_2 &&
          delete_service_1_toggler?.service_1_id
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
          <h3>
            Delete {delete_service_1_toggler?.title_1}-
            {delete_service_1_toggler?.title_2}-
            <span className="text-red-700">
              {delete_service_1_toggler?.service_1}
            </span>
          </h3>
        </div>
        {/* text */}
        <div className="text-sm text-gray-600 text-center">
          <p>
            Are you sure to delete this service ? Remember, this action is
            undone.
          </p>
        </div>

        {/* buttons */}
        <div className="my-2 mt-5 flex items-center justify-evenly">
          <button
            className="px-5 py-1 rounded-md bg-gray-700 text-white transition-colors ease-in-out duration-150 hover:bg-gray-600"
            onClick={() => {
              cancel_delete_service_1_conformation();
            }}
          >
            Cancel
          </button>
          <button
            className="px-5 py-1 rounded-md bg-red-600 text-white transition-colors ease-in-out duration-150 hover:bg-red-500"
            onClick={() => {
              confirm_delete_service_1_handler();
            }}
          >
            Delete
          </button>
        </div>
      </div>

      {/* sub 2 delete conformation pop up */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-max bg-white p-5 shadow-2xl transition-transform ease-in-out duration-150 ${
          delete_sub_2_toggler?.id_1 &&
          delete_sub_2_toggler?.id_2 &&
          delete_sub_2_toggler?.id_3
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
          <h3>
            Delete {delete_sub_2_toggler?.title_1}-
            {delete_sub_2_toggler?.title_2}-
            <span className="text-red-700">
              {delete_sub_2_toggler?.title_3}
            </span>
          </h3>
        </div>
        {/* text */}
        <div className="text-sm text-gray-600 text-center">
          <p>
            Are you sure to delete this sub case ? Remember, this action is
            undone.
          </p>
        </div>

        {/* buttons */}
        <div className="my-2 mt-5 flex items-center justify-evenly">
          <button
            className="px-5 py-1 rounded-md bg-gray-700 text-white transition-colors ease-in-out duration-150 hover:bg-gray-600"
            onClick={() => {
              cancel_delete_sub_2_conformation();
            }}
          >
            Cancel
          </button>
          <button
            className="px-5 py-1 rounded-md bg-red-600 text-white transition-colors ease-in-out duration-150 hover:bg-red-500"
            onClick={() => {
              confirm_delete_sub_2_handler();
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
