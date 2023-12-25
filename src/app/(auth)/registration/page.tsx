"use client";
import AuthForm from "@/pages/Auth/AuthForm/AuthForm";
import { NextPage } from "next";

const Page: NextPage = () => {
  return <AuthForm isRegister={true} />;
};

export default Page;
