<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CompanyData extends Mailable
{
    use Queueable, SerializesModels;

    private mixed $company_name;
    private mixed $company_symbol;
    private mixed $start_date;
    private mixed $end_date;

    /**
     * Create a new message instance.
     */
    public function __construct($company_name,$company_symbol,$start_date,$end_date)
    {
        $this->company_name = $company_name;
        $this->company_symbol = $company_symbol;
        $this->start_date = $start_date;
        $this->end_date = $end_date;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Company Data',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.companyData',
            with: [
                'companyName' => $this->company_name,
                'companySymbol' => $this->company_symbol,
                'startDate' => $this->start_date,
                'endDate' => $this->end_date,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
