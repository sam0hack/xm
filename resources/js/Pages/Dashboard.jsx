import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import GetHistoricalData from "@/Pages/Partials/GetHistoricalData.jsx";


export default function Dashboard({auth, listings, historical_data}) {


    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard"/>

            <GetHistoricalData listings={listings}/>

        </AuthenticatedLayout>
    );
}
