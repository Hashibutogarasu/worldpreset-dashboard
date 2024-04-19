"use client";

import { Fragment, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, MoonIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Link, Routes, Route } from "react-router-dom";
import { navigation } from "./components/root";
import { AppBar, Container, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { ToggleTheme } from "./components/toggle-theme";
import { themeContext } from "./hooks/useTheme";
import { supabase } from "./utils/supabase";
import { User } from "@supabase/supabase-js";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [image, setimage] = useState("https://avatar.vercel.sh/leerob");
  const [name, setname] = useState("");
  const { data: session } = useSession();
  const [user, setuser] = useState<User>();
  const dark = useContext(themeContext).dark;
  const matches = useMediaQuery('(min-width:600px)');

  useEffect(() => {
    supabase.auth.getSession().then(value => {
      setuser(value.data.session?.user);
      setimage(value.data.session?.user?.user_metadata.avatar_url);
      setname(value.data.session?.user?.user_metadata.full_name);
    });
  }, []);

  return (
    <>
      <Disclosure as="nav" className={`${dark ? "bg-white" : ""} shadow-sm`}>
        {({ open }) => (
          <>
            <AppBar style={{ background: dark ? "white" : "black" }} position="static">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  {matches ? <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className={`text-${dark ? "gray" : "white"}-100`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      rx="16"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                      fill="black"
                    />
                  </svg> : <div className="-mr-2 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  }


                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                      <div className="flex">
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                          {navigation.map((item) => (
                            <div key={item.href} className={classNames(
                              pathname === item.href
                                ? `border-slate-500 text-${dark ? "gray" : "white"}-900`
                                : `border-transparent text-gray-500 hover:text-${dark ? "gray" : "white"}-700 hover:border-${dark ? "gray" : "white"}-300`,
                              'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                            )}>
                              <Link
                                key={item.name}
                                to={item.href}
                                aria-current={pathname === item.href ? "page" : undefined}
                              >
                                {item.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                              <span className="sr-only">Open user menu</span>
                              <Image
                                className="h-8 w-8 rounded-full"
                                src={image}
                                height={32}
                                width={32}
                                alt={`${name || "placeholder"} avatar`}
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {user ? (
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={classNames(
                                        active ? `bg-${dark ? "white" : "gray"}-100` : "",
                                        `flex w-full px-4 py-2 text-sm text-${dark ? "white" : "gray"}-700`
                                      )}
                                      onClick={() => supabase.auth.signOut()}
                                    >
                                      Sign out
                                    </button>
                                  )}
                                </Menu.Item>
                              ) : (
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={classNames(
                                        active ? `bg-${dark ? "gray" : "white"}-100` : "",
                                        `flex w-full px-4 py-2 text-sm text-${dark ? "gray" : "white"}-700`
                                      )}
                                      onClick={() => {
                                        supabase.auth.signInWithOAuth({ provider: "google" });
                                      }}
                                    >
                                      Sign in
                                    </button>
                                  )}
                                </Menu.Item>
                              )}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center"><ToggleTheme dark={dark} /></div>
                      </div>

                    </div>
                  </div>


                </Toolbar>
              </Container>
            </AppBar>


            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "bg-slate-50 border-slate-500 text-slate-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                {user ? (
                  <>
                    <div className="flex items-center px-4">
                      <div className="flex-shrink-0">
                        {
                          image ? <Image
                            className="h-8 w-8 rounded-full"
                            src={image}
                            height={32}
                            width={32}
                            alt={`${name} avatar`}
                          /> : <></>
                        }
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          {name}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <button
                        onClick={() => supabase.auth.signOut()}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        Sign out
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="mt-3 space-y-1">
                    <button
                      onClick={() => supabase.auth.signInWithOAuth({ provider: "google" })}
                      className="flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Sign in
                    </button>
                  </div>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure >
    </>
  );
}
