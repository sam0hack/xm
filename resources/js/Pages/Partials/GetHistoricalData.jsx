import React, {useState} from 'react';
import axios from "axios";
import {useForm, router} from "@inertiajs/react";
import {Transition} from '@headlessui/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import Select from 'react-select';
import validateForm from "@/lib/validateForm.js";

// Custom Components
import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from "@/Components/TextInput.jsx";
import MultiAxisLineChart from "@/Pages/Partials/MultiAxisLineChart.jsx";
import HistoricalDataTable from "@/Pages/Partials/HistoricalDataTable.jsx";
import Loading from "@/Pages/Partials/Loading.jsx";

export default function GetHistoricalData({listings}) {
    // Initial date set to today
    const today = new Date();
    // Inertia useForm hook for form data and management
    const {data, setData, processing, recentlySuccessful} = useForm({
        company_symbol: '',
        email: '',
        start_date: today,
        end_date: today,
    });

    // Local states for managing the historical data and loading state
    const [dates, setDates] = useState([]);
    const [openPrices, setOpenPrices] = useState([]);
    const [closePrices, setClosePrices] = useState([]);
    const [historical_data, setHData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setError] = useState({})

    // Submit function for the form
    const submit = (e) => {
        e.preventDefault();
        const validate = validateForm(data)
        if (validate[0] === false) {
            setError(validate[1])
            return;
        }
        setLoading(true);
        setError({});

        axios.post(route('get-historical-data'), data)
            .then(response => {
                const responseData = response.data;
                setHData(responseData);

                // Extract data from response into arrays
                const list_dates = responseData.map(res => res.date);
                const list_open_prices = responseData.map(res => res.open);
                const list_close_prices = responseData.map(res => res.close);

                // Update state with new data arrays
                setDates(list_dates);
                setOpenPrices(list_open_prices);
                setClosePrices(list_close_prices);
                setLoading(false);


            })
            .catch(resError => {

                const updatedErrors = {
                    email: resError.response.data.errors.email || '',
                    company_symbol: resError.response.data.errors.company_symbol || '',
                    start_date: resError.response.data.errors.start_date || '',
                    end_date: resError.response.data.errors.end_date || '',
                };
                setError(updatedErrors); // Use setData to update errors state
                setLoading(false);
                router.reload();
            });
    };

    return (
        <>
            {/* Historical quotes form section */}
            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <section>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Historical quotes</h2>
                    </header>
                    <form onSubmit={submit}>
                        {/* Form controls for data input */}
                        <div className='flex mt-2 items-center'>
                            {/* Company Symbol */}
                            <div className='flex-initial  w-48 h-48 mr-3'>
                                <InputLabel htmlFor="name" value="Company Symbol"/>
                                <Select className='rounded-md' onChange={(e) => setData('company_symbol', e.value)}
                                        options={JSON.parse(listings)}/>
                                <InputError className="mt-4 w-48" message={errors.company_symbol}/>
                            </div>

                            {/* Email Input */}
                            <div className='flex-initial mr-3 w-48  h-48 '>
                                <InputLabel htmlFor="email" value="Email"/>
                                <TextInput type='email' className='rounded-md' selected={data.email}
                                           onChange={(e) => setData('email', e.target.value)}/>
                                <InputError className="mt-4 w-48" message={errors.email}/>
                            </div>

                            {/* Start Date Picker */}
                            <div className='flex-initial mr-3 w-48  h-48'>
                                <InputLabel htmlFor="start_date" value="Start date"/>
                                <DatePicker className='rounded-md' selected={data.start_date}
                                            onChange={(date) => setData('start_date', date)}/>
                                <InputError className="mt-4 w-48 break-words break-all " message={errors.start_date}/>
                            </div>

                            {/* End Date Picker */}
                            <div className='flex-initial mr-3 w-48  h-48'>
                                <InputLabel htmlFor="end_date" value="End date"/>
                                <DatePicker className='rounded-md' selected={data.end_date}
                                            onChange={(date) => setData('end_date', date)}/>
                                <InputError className="mt-4  w-48 break-words break-all" message={errors.end_date}/>
                            </div>

                            {/* Submit Button */}
                            <div className="items-center mt-11 w-48  h-48">
                                <PrimaryButton disabled={loading}>Submit</PrimaryButton>
                                <Transition show={recentlySuccessful} enter="transition ease-in-out"
                                            enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                                </Transition>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

            {/* Loading or Displaying Historical Data */}
            <div className="mt-20 p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                {loading ? (
                    <Loading/>
                ) : (
                    <div className='flex '>
                        {historical_data && <HistoricalDataTable historical_data={historical_data}/>}
                        <div style={{width: '600px', height: '400px'}} className='mt-6 ml-4'>
                            {historical_data &&
                                <MultiAxisLineChart dates={dates} openPrices={openPrices} closePrices={closePrices}/>}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
