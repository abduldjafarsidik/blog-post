/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import style from "./page.module.scss";
import cn from "classnames";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BlogState } from "@/services/Blog/state";
import ModalEditData from "@/components/EditData";
import ModalAddData from "@/components/AddData";

export default function Home() {
  const {
    updateUser,
    showModal,
    dataUsers,
    getId,
    setShowModal,
    users,
    comment,
    currentId,
    setCurrentId,
    tempUsers,
    setTempUsers,
    showAddData,
    errorMessage,
    handleClearModal,
    setShowAddData,
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
    search,
    setSearch,
  } = BlogState();

  console.log(search);

  return (
    <>
      <main className={style.blog}>
        <div className={style.blog__wrapper}>
          <h1 className="text-primary-01 font-semibold text-3xl">
            FrontEnd Engineer Challenge
          </h1>

          <h2 className="text-primary-02">PT. Synapsis Sinergi Digital</h2>
        </div>

        <div className="mt-20">
          <div className="border-b border-primary-02 flex">
            <div className="flex w-full md:gap-4 md:mb-5">
              <button
                className={cn(
                  style.blog__tab,
                  currentId === "List" ? "border-b-2 border-primary-01" : ""
                )}
                onClick={() => setCurrentId("List")}
              >
                Blog List
              </button>

              <button
                className={cn(
                  style.blog__tab,
                  currentId === "Users" ? "border-b-2 border-primary-01" : ""
                )}
                onClick={() => setCurrentId("Users")}
              >
                Users
              </button>

              <button
                className={cn(
                  style.blog__tab,
                  currentId === "Comment" ? "border-b-2 border-primary-01" : ""
                )}
                onClick={() => setCurrentId("Comment")}
              >
                Comment
              </button>
            </div>

            {currentId === "Users" ? (
              <div className="justify-end flex md:w-full">
                <button
                  type="button"
                  onClick={() => setShowAddData(true)}
                  className={style.blog__add}
                >
                  Tambah Data
                </button>
              </div>
            ) : null}
          </div>

          {currentId === "List" ? (
            <div className={style.blog__list}>
              {listBlog.map((v: any, i: any) => {
                return (
                  <div className={style.blog__list__content} key={i}>
                    <div className="w-full">
                      <img
                        src="images/hero.png"
                        alt="hero"
                        className="object-cover w-full h-36 rounded-lg"
                      />
                    </div>

                    <h1 className="text-primary-01 font-semibold mb-2 mt-1">
                      {v.title}
                    </h1>

                    <p className="">{v.body}</p>
                  </div>
                );
              })}
            </div>
          ) : null}

          {currentId === "Users" ? (
            <div>
              <div className="flex justify-end">
                <input
                  className="border border-primary-02 rounded-lg py-1 px-3 mt-3"
                  placeholder="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className={style.blog__users}>
                {users
                  .filter((item: any) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.name.toLowerCase().includes(search);
                  })
                  .map((v: any, i: any) => {
                    return (
                      <div className={style.blog__users__content} key={i}>
                        <h1 className="text-primary-01 font-semibold flex items-center gap-1">
                          <BsFillPersonFill /> {v.name}
                        </h1>

                        <p className="text-primary-01 mb-2 text-xs ">
                          {v.email}
                        </p>

                        <div className="flex items-center gap-1">
                          <p className="text-primary-01 font-semibold ">
                            Gender:
                          </p>
                          {v.gender}
                        </div>

                        <div className="flex items-center gap-1">
                          <p className="text-primary-01 font-semibold ">
                            Status:
                          </p>
                          {v.status}
                        </div>

                        <div className="flex gap-2">
                          <button
                            className={style.blog__edit}
                            onClick={() => getId(v.id, v.modal)}
                          >
                            <AiOutlineQuestionCircle />
                            Edit
                          </button>

                          <button
                            className={style.blog__delete}
                            onClick={() => deleteUsers(v.id)}
                          >
                            <RiDeleteBin6Line />
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : null}

          {currentId === "Comment" ? (
            <div className={cn(style.blog__users, "")}>
              {comment.map((v: any, i: any) => {
                return (
                  <div className={style.blog__users__content} key={i}>
                    <h1 className="text-primary-01 font-semibold  flex items-center gap-1">
                      <BsFillPersonFill /> {v.name}
                    </h1>

                    <p className="mb-3 text-xs">{v.email}</p>

                    <p>{v.body}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </main>

      <ModalEditData
        isOpen={showModal}
        onUpdate={updateUser}
        onClose={() => setShowModal(false)}
        dataUser={dataUsers}
        temp={tempUsers}
        setTemp={setTempUsers}
      />

      <ModalAddData
        isOpen={showAddData}
        onUpdate={handleSubmit}
        onClose={handleClearModal}
        nameValue={name}
        setName={(e: any) => setName(e.target.value)}
        emailValue={email}
        setEmail={(e: any) => setEmail(e.target.value)}
        genderValue={gender}
        setGender={(e: any) => setGender(e.target.value)}
        statusValue={status}
        setStatus={(e: any) => setStatus(e.target.value)}
        errorMessage={errorMessage}
      />
    </>
  );
}
