import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Patients",
        path: "/dashboard/patient",
        icon: <BsIcons.BsPeople />,
      },
      {
        title: "Operation Report",
        path: "/dashboard/operationdetails",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Manage Hospital",
    // path: "/management",
    icon: <BsIcons.BsClipboardPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "BedAllotment",
        path: "/management/bedallotment",
        icon: <TbIcons.TbBed />,
        cName: "sub-nav",
      },
      {
        title: "Bloodbag",
        path: "/management/bloodbag",
        icon: <MdIcons.MdOutlineBloodtype />,
        cName: "sub-nav",
      },
      {
        title: "Medicines",
        path: "/management/medicines",
        icon: <GiIcons.GiMedicines />,
      },
    ],
  },
  {
    title: "Doctors",
    path: "/doctor",
    icon: <FaIcons.FaStethoscope />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    // subNav: [
    //   {
    //     title: "AddEdit",
    //     path: "/doctor/AddEdit",
    //     icon: <BsIcons.BsPeople />,
    //   },
    //   // {
    //   //   title: "View",
    //   //   path: "/doctor/View",
    //   //   icon: <BsIcons.BsPeople />,
    //   // },
    //   // {
    //   //   title: "About",
    //   //   path: "/doctor/About",
    //   //   icon: <BsIcons.BsPeople />,
    //   // },
    // ],
  },
  {
    title: "Nurse",
    path: "/nurse",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Payments",
    path: "/messages",
    icon: <BiIcons.BiCreditCard />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Create Payroll",
        path: "/messages/message1",
        icon: <FaIcons.FaCcAmazonPay />,
      },
      {
        title: "Payroll",
        path: "/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
