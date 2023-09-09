export default function HistoricalDataTable({historicalData}) {

    return (
        <section className=''>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Historical Data</h2>
            </header>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Open
                        </th>
                        <th scope="col" className="px-6 py-3">
                            High
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Low
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Close
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Volume
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">View Chart</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Chart</a>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>


        </section>
    )

}
