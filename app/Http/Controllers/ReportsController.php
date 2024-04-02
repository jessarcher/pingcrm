<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Inertia\Inertia;

class ReportsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Reports/Index');
    }
}
