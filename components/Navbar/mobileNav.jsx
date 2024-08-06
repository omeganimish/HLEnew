"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { menuItemsData } from "@/lib/menuItem";

const MobileDropdown = ({
  submenus,
  dropdown,
  depthLevel,
  collapseName,
  title,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown && collapseName === title ? "show" : ""
      }`}
    >
      {submenus.map((submenu, index) => (
        <MobileMenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
          title={title}
        />
      ))}
    </ul>
  );
};

const toggleDropdown = (e, setDropdown, setCollapseName) => {
  // setCollapseName(e);
  // e.stopPropagation();
  return setDropdown((prev) => !prev), setCollapseName(e);
};

const MobileMenuItems = ({
  items,
  depthLevel,
  showMenu,
  setShowMenu,
  title,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [collapseName, setCollapseName] = useState();

  const closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  };

  return (
    <li className="menu-items w-full" onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          {/* if dropdown has link to its title */}
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            <Link href={items.url} onClick={closeDropdown}>
              {items.title}
            </Link>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          {/* if dropdown has no link only dropdown */}
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={(e) =>
              toggleDropdown(items.title, setDropdown, setCollapseName)
            }
          >
            {items.title}{" "}
            <div>
              {dropdown && items.title === collapseName ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            title={items.title}
            collapseName={collapseName}
          />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

const MobileNav = () => {
  const depthLevel = 0;
  const [showMenu, setShowMenu] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showMenu]);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="mobile-nav">
      {!showMenu && (
        <div className="flex items-center">
          <button
            className="navtoggle text-2xl"
            type="button"
            onClick={() => setShowMenu(true)}
            //   onClick={showDrawer}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      )}

      {showMenu && (
        <ul className="menus" ref={ref}>
          <div
            className="modal-overlay"
            onClick={() => setShowMenu(false)}
          ></div>

          <div className="mobileMenu overflow-hidden">
            <div className="flex items-center justify-between w-full gap-16 border-b border-colorGreen py-2 px-2 mb-4 shadow-sm">
              <div className="flex items-center">
                <Image
                  src={"/assets/logo.png"}
                  height={200}
                  width={200}
                  alt="logo image"
                />
              </div>

              <button
                className="c-transition text-3xl text-colorRed hover:opacity-75"
                type="button"
                onClick={() => setShowMenu(false)}
              >
                <IoIosCloseCircle />
              </button>
            </div>
            {menuItemsData.map((menu, index) => {
              return (
                <MobileMenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                />
              );
            })}
          </div>
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
