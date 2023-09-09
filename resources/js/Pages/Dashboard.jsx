import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import HistoricalData from "@/Pages/HistoricalData.jsx";


export default function Dashboard({ auth , listings}) {
    return (
        <AuthenticatedLayout
            user={auth.user}

        >
            <Head title="Dashboard" />

            <HistoricalData listings={listings}/>



        </AuthenticatedLayout>
    );
}
