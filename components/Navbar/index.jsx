"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileNav from "./mobileNav";
import { menuItemsData } from "@/lib/menuItem";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  const pathName = usePathname();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <li
      className={`menu-items flex items-center`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => toggleDropdown()}
          >
            <Link
              href={items.url}
              className={`${
                pathName === items.url ? "active-link" : ""
              } text-xs xl:text-base py-2 px-3 flex items-center flex-row font-semibold `}
            >
              <span>{items.title}</span>
            </Link>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className="text-xs xl:text-base py-2 px-3 flex items-center font-semibold"
          >
            {items.title}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          href={items.url}
          className={`${
            pathName === items.url ? "active-link" : ""
          } text-xs xl:text-base py-2 px-3 flex items-center flex-row font-semibold`}
        >
          <span>{items.title}</span>
        </Link>
      )}
    </li>
  );
};

const Navbar = () => {
  const depthLevel = 0;

  return (
    <div className="customContainer">
      <div className="w-full flex justify-between">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/assets/logo.png"}
            height={250}
            width={250}
            alt="logo image"
            className="h-[69px]"
          />
        </Link>

        <div className="flex items-center gap-4">
          <ul className="desktopNav  flex">
            {menuItemsData?.map((item, index) => (
              <MenuItems items={item} key={index} depthLevel={depthLevel} />
            ))}
          </ul>
          <MobileNav />
          {/* <div>
              <LinkComponent url={"/donate-us"} title={"Donate"} />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
