import GetDataForm from "@/Pages/Partials/Forms/GetDataForm.jsx";
import HistoricalDataTable from "@/Pages/Partials/HistoricalDataTable.jsx";

export default function HistoricalData({listings})
{
    return (
        <>
            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <GetDataForm listings={listings} className="max-w-xl"/>
            </div>


        </>
    )
}
