<?php

namespace Database\Factories;

use Faker\Provider\CarData;
use Faker\Provider\Fakecar;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->shuffle(Fakecar::vehicleType()),
            'fare_fleet' => fake()->randomFloat(2, 1, 2)
        ];
    }
}
