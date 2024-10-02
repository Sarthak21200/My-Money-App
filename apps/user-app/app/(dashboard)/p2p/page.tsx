"use client"
import { useEffect, useState } from "react";
import { P2Pmoney } from "../../../components/SendCard";
import seachBarSugg from "../../lib/action/seachBarinP2P";

interface User {
    username: string;
}


export default function () {
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {

        const fetchUsers = async () => {

            const response = await seachBarSugg(filter);
            if (response.user) {
                setUsers(response.user);
            }
            else{
                setUsers([])
            }
        };

        fetchUsers();
    }, [filter]);

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            P2P Transfers
        </div>
        <div className=" w-full">
            <form className="max-w-md mx-auto m-9">
                <label className="mb-2 text-sm font-medium text-gray-500 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={(e) => {
                        setFilter(e.target.value)
                    }} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user name here to get number ..." required />

                </div>
                <div>
                    {users.map(user => <div className="flex cursor-pointer">
                        <div className="flex">
                            <div className=" rounded h-12 w-3/9 bg-gray-800 ">
                                <div className="text-white text-xl">
                                    {user.username}
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </form>

            <div className="">
                <div>
                    <P2Pmoney />
                </div>

            </div>
        </div>
    </div>
}

