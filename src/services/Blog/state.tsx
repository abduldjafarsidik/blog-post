import { useState, useEffect } from "react";

const API_TOKEN =
  "4ceb532de54f066c97f43182fa7f9a40e2ab8895a9461f95898310ff00b2cb46";

export const BlogState = () => {
  const [userID, setUserId] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tempUsers, setTempUsers] = useState<any>();
  const [dataUsers, setDataUsers] = useState<any>();
  const [users, setUsers] = useState<any>([]);
  const [comment, setComment] = useState<any>([]);
  const [currentId, setCurrentId] = useState("List");
  const [showAddData, setShowAddData] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [name, setName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [listBlog, setListBlog] = useState<any>([]);
  const [search, setSearch] = useState<any>("");

  const updateUser = async () => {
    const id = userID;
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(tempUsers),
    });

    if (response.ok) {
      setShowModal(false);
    } else {
      console.error("Error update item");
    }
  };

  const handleSubmit = async () => {
    let data = { name, email, gender, status };
    const response = await fetch("https://gorest.co.in/public/v2/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setShowAddData(false);
      setErrorMessage("");
      setName("");
      setEmail("");
      setGender("");
      setStatus("");
    } else {
      setErrorMessage("Tidak Boleh Ada Data Yang Kosong");
    }
  };

  const getId = (id: any, modal: any) => {
    getDataUsersById(id);
    setShowModal(!modal);
    setUserId(id);
  };

  const getDataUsersById = async (id: any) => {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    const resJson = await res.json();
    setDataUsers(resJson);
    setTempUsers(resJson);
  };

  const handleClearModal = () => {
    setShowAddData(false);
    setErrorMessage("");
  };

  const deleteUsers = async (id: number) => {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (response.ok) {
      console.log("Item deleted");
    } else {
      console.error("Error deleting item");
    }
  };

  const getDataList = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/posts");
    const resJson = await res.json();
    setListBlog(resJson);
  };

  const getDataUsers = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/users", {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    const resJson = await res.json();
    setUsers(resJson);
  };

  const getDataComment = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/comments");
    const resJson = await res.json();
    setComment(resJson);
  };

  useEffect(() => {
    getDataList();
    getDataUsers();
    getDataComment();

    const intervalId = setInterval(getDataUsers, 3000); // Fetch data every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return {
    updateUser,
    showModal,
    userID,
    dataUsers,
    getId,
    API_TOKEN,
    getDataUsersById,
    setShowModal,
    users,
    setUsers,
    comment,
    setComment,
    currentId,
    setCurrentId,
    tempUsers,
    setTempUsers,
    handleClearModal,
    showAddData,
    errorMessage,
    setShowAddData,
    setErrorMessage,
    handleSubmit,
    name,
    email,
    status,
    gender,
    setName,
    setGender,
    setEmail,
    setStatus,
    deleteUsers,
    listBlog,
    getDataList,
    search,
    setSearch,
  };
};
