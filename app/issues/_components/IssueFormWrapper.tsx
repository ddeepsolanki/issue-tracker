"use client";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "@/app/issues/edit/[id]/loading";
import { Issue } from "@prisma/client";

const IssueForm = dynamic(() => import("./IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const IssueFormWrapper = ({ issue }: { issue: Issue }) => {
  return <IssueForm issue={issue} />;
};

export default IssueFormWrapper;
