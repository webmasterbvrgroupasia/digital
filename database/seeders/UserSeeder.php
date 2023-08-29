<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [

                'name' => 'test',

                'email' => 'test@gmail.com',

                'password'=> Hash::make('Webmaster'),

                'created_at'=> Carbon::now()->format('Y-m-d : H:i:s')

            ],
        ];

        DB::table('users')->insert($data);
    }
}
