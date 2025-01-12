<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Buat data manual untuk tabel users
        \App\Models\User::create([
            'name' => 'Azra',
            'email' => 'azra@gmail.com',
            'password' => bcrypt('123'), // Enkripsi password
        ]);

        \App\Models\User::create([
            'name' => 'Raihan',
            'email' => 'raihan@gmail.com',
            'password' => bcrypt('123'), // Enkripsi password
        ]);
        
        \App\Models\User::create([
            'name' => 'Zidan',
            'email' => 'zidan@gmail.com',
            'password' => bcrypt('123'), // Enkripsi password
        ]);
    }
}
