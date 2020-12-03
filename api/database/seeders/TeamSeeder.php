<?php

namespace Database\Seeders;

use App\Models\Player;
use App\Models\Team;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $playersIds = Player::all()->pluck('id');

        Team::factory(10)->create()->each( function($team) use ($playersIds) {
            $randomPlayersForTeam = $playersIds->random(rand(1, 12))->toArray();
            $team->players()->sync($randomPlayersForTeam);
        });
    }
}
