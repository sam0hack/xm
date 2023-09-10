export default function HistoricalDataTable({historical_data}) {

    return (
        <section className=''>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Historical Quotes</h2>
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

                    </tr>
                    </thead>
                    <tbody>

                        {historical_data.map((data, index) => (
                            <tr className="bg-white border-b " key={index}>
                            <td className="px-6 py-4" >{data.date}</td>
                            <td className="px-6 py-4">
                                {data.open}
                            </td>
                            <td className="px-6 py-4">
                                {data.high}
                            </td>

                                <td className="px-6 py-4">
                                    {data.low}
                                </td>

                                <td className="px-6 py-4">
                                    {data.close}
                                </td>
                                <td className="px-6 py-4">
                                    {data.volume}
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>


        </section>
    )

}
