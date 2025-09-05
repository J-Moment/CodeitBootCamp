export default function Home() {
    return (
        <ul role="list" className="divide-y divide-gray-100 p-2">
            <li className="flex justify-between py-5">
                <div className="flex min-w-0 gap-x-4">
                    <img
                        className="size-12 rounded-full"
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="min-w-0">
                        <p className="text-sm/6 font-semibold text-gray-900">Michael Foster</p>
                        <p className="mt-1 truncate text-xs/5 text-gray-500">michael.foster@example.com</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6 text-gray-900">Co-Founder / CTO</p>
                    <p className="mt-1 text-xs/5 text-gray-500">
                        Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                    </p>
                </div>
            </li>
            <li className="flex justify-between py-5">
                <div className="flex min-w-0 gap-x-4">
                    <img
                        className="size-12 rounded-full"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm/6 font-semibold text-gray-900">
                            Dries Vincent
                        </p>
                        <p className="mt-1 truncate text-xs/5 text-gray-500">
                            dries.vincent@example.com
                        </p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6 text-gray-900">Business Relations</p>
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="rounded-full bg-emerald-500/20 p-1">
                            <div className="size-1.5 rounded-full bg-emerald-500"></div>
                        </div>
                        <p className="text-xs/5 text-gray-500">Online</p>
                    </div>
                </div>
            </li>
        </ul>
    );
}