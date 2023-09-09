import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import {Transition} from '@headlessui/react';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import {useForm, usePage} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import HistoricalDataTable from "@/Pages/Partials/HistoricalDataTable.jsx";
import moment from 'moment';


export default function GetDataForm({listings}) {

    const today = new Date();

    const {data, setData, post, errors, processing, recentlySuccessful} = useForm({
        company_symbol: JSON.parse(listings),
        email: '',
        start_date: today,
        end_date: today,
    });


    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('get-historical-data'))
    };

    return (
        <>
            <section className=''>
                <header>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Historical quotes</h2>
                </header>


                <form onSubmit={submit}>
                    <div className='flex mt-2 items-center  '>
                        <div className='flex-initial  w-auto mr-3'>
                            <InputLabel htmlFor="name" value="Compnay Symbol"/>

                            <Select className='rounded-md' onChange={(e) => setData('company_symbol', e.value)}
                                    options={data.company_symbol}/>

                            <InputError className="mt-2" message={errors.company_symbol}/>
                        </div>

                        <div className='flex-initial mr-3'>
                            <InputLabel htmlFor="email" value="Email"/>

                            <TextInput type='email' className='rounded-md' selected={data.email}
                                       onChange={(e) => setData('email', e.target.value)}/>

                            <InputError className="mt-2" message={errors.email}/>
                        </div>

                        <div className='flex-initial mr-3'>
                            <InputLabel htmlFor="start_date" value="Start date"/>

                            <DatePicker className='rounded-md' selected={data.start_date}
                                        onChange={(date) => setData('start_date', date)}/>

                            <InputError className="mt-2" message={errors.start_date}/>
                        </div>


                        <div className='flex-initial mr-3'>
                            <InputLabel htmlFor="end_date" value="End date"/>

                            <DatePicker className='rounded-md' selected={data.end_date}
                                        onChange={(date) => setData('end_date', date)}/>

                            <InputError className="mt-2" message={errors.end_date}/>
                        </div>


                        <div className="items-center mt-5">
                            <PrimaryButton disabled={processing}>Submit</PrimaryButton>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                            </Transition>
                        </div>
                    </div>
                </form>


                <div className='flex mt-20 w-full'>
                    <HistoricalDataTable/>
                </div>
            </section>


        </>
    );
}
