<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/app/{any]', function (){
    $path = public_path('app/index.html');
    abort_unless(file_exists($path), 400, 'Page not found');
    return file_get_contents($path);
})->name('frontend');
